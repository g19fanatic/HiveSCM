from flask import Flask, request, url_for, redirect
from werkzeug.serving import run_simple
from werkzeug.debug import DebuggedApplication

import os

app = Flask(__name__)
app.debug = True

@app.route('/', methods=['GET', 'POST'])
def index():
  return "Nothing to see here"

if __name__ == "__main__":

  debugged_app = DebuggedApplication(app, evalex=True)

  run_simple('0.0.0.0', 9876, debugged_app, use_reloader=True, use_debugger=True, use_evalex=True)
