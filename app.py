from flask import Flask, request, url_for
from flask import redirect, send_from_directory, make_response
from werkzeug.serving import run_simple
from werkzeug.serving import WSGIRequestHandler
from werkzeug.debug import DebuggedApplication

from os import listdir
from os.path import isfile, join
import json

import pdb

app = Flask(__name__, static_folder=None)
app.debug = True

#forward static js files to ng frontend
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('data/js', path)

#forward static css files to ng frontend
@app.route('/css/<path:filename>')
def send_css(filename):
    return send_from_directory('data/css/', filename)

#forward static ng route pages to frontend
@app.route('/pages/<path:filename>')
def send_datapages(filename):
    return send_from_directory('data/pages/', filename)

def getFile(filename):
    return open('data/' + filename).read()

def returnFile(filename):
    return make_response(getFile(filename))

#serving default index
@app.route('/')
def index():
    return returnFile('index.html')

#forward all app handled '/ticket/*' paths back to index if they hit the server (they shouldn't)
@app.route('/ticket/<path:p>')
def returnToIndex(p):
    return index()

@app.route('/api/config')
def getConfiguration():
    return returnFile('config.json')

@app.route('/api/users')
def getUsers():
    return returnFile('users.json')

@app.route('/api/labels')
def getLabels():
    return returnFile('labels.json')

def getTicketIds():
    currentFiles = listdir("data/tickets");
    ticketIds = []
    for f in currentFiles:
        ticketIds.append(f.strip(".json"))
    ticketIds.sort()
    return ticketIds

@app.route('/api/tickets')
def getTicketList():
    #pdb.set_trace()
    ticketFiles = listdir("data/tickets")
    ticketFiles.sort()
    tickets = {}
    ticketsInfo = []
    for t in ticketFiles:
        with open("data/tickets/" + t) as f:
            ticket = json.loads(f.read())
            ticketsInfo.append(ticket)

    tickets['tickets'] = ticketsInfo
    return json.dumps(tickets)

@app.route('/api/ticket/<int:ticketId>')
def getTicketInfo(ticketId):
    tickets = getTicketIds()
    ticket = {}
    if (str(ticketId) in tickets):
        ticket = json.loads(open('data/tickets/' + str(ticketId) + '.json').read())
    else:
        ticket['id'] = 0

    return json.dumps(ticket)

@app.route('/api/createTicket', methods=['POST'])
def createTicket():
    ticketIds = getTicketIds()
    newTicket = json.loads(request.data)['ticket']
    newTicket['id'] = int(ticketIds[-1]) + 1
    jsonData = json.dumps(newTicket, indent=4, sort_keys=True)
    open('data/tickets/' + str(newTicket['id']) + '.json', 'w').write(jsonData)
    return ""

if __name__ == "__main__":
  config = json.loads(getFile("config.json"))
  WSGIRequestHandler.protocol_version = "HTTP/1.1"

  debugged_app = DebuggedApplication(app, evalex=True)

  run_simple('0.0.0.0', int(config["serverPort"]), debugged_app, use_reloader=True, use_debugger=True, use_evalex=True)
