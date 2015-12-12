from flask import Flask, request, url_for
from flask import redirect, send_from_directory, make_response
from werkzeug.serving import run_simple
from werkzeug.debug import DebuggedApplication

import os

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

#serving default index
@app.route('/')
def index():
    return make_response(open('data/index.html').read())

#forward all app handled '/ticket/*' paths back to index if they hit the server (they shouldn't)
@app.route('/ticket/<path:p>')
def returnToIndex(p):
    return index()

@app.route('/api/config')
def getConfiguration():
    return make_response(open('data/config.json').read())

if __name__ == "__main__":

  debugged_app = DebuggedApplication(app, evalex=True)

  run_simple('0.0.0.0', 9876, debugged_app, use_reloader=True, use_debugger=True, use_evalex=True)
