from flask import Flask, request, url_for, redirect, send_from_directory
from werkzeug.serving import run_simple
from werkzeug.debug import DebuggedApplication

import os

app = Flask(__name__, static_folder=None)
app.debug = True

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('data/js', path)

@app.route('/css/<path:filename>')
def send_css(filename):
    return send_from_directory('data/css/', filename)

@app.route('/')
def index():
    return send_from_directory('data/', "index.html")

@app.route('/ticket/<path:p>')
def returnToIndex(p):
    return index()

if __name__ == "__main__":

  debugged_app = DebuggedApplication(app, evalex=True)

  run_simple('0.0.0.0', 9876, debugged_app, use_reloader=True, use_debugger=True, use_evalex=True)
