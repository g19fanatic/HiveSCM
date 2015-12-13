from flask import Flask, request, url_for
from flask import redirect, send_from_directory, make_response
from werkzeug.serving import run_simple
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
    return make_response(open('data/' + filename).read())

#serving default index
@app.route('/')
def index():
    return getFile('index.html')

#forward all app handled '/ticket/*' paths back to index if they hit the server (they shouldn't)
@app.route('/ticket/<path:p>')
def returnToIndex(p):
    return index()

@app.route('/api/config')
def getConfiguration():
    return getFile('config.json')

@app.route('/api/users')
def getUsers():
    return getFile('users.json')

@app.route('/api/labels')
def getLabels():
    return getFile('labels.json')

@app.route('/api/getTicketList')
def getTicketList():
    ticketPath = 'data/tickets'
    return json.dumps(listdir(ticketPath))

@app.route('/api/createTicket', methods=['POST'])
def createTicket():
    currentFiles = listdir("data/tickets");
    ticketIds = []
    for f in currentFiles:
        ticketIds.append(f.strip(".json"))
    ticketIds.sort()
    newTicket = json.loads(request.data)['ticket']
    newTicket['id'] = int(ticketIds[-1]) + 1
    open('data/tickets/' + str(newTicket['id']) + '.json', 'w').write(json.dumps(newTicket))
    return ""


if __name__ == "__main__":

  debugged_app = DebuggedApplication(app, evalex=True)

  run_simple('0.0.0.0', 9876, debugged_app, use_reloader=True, use_debugger=True, use_evalex=True)
