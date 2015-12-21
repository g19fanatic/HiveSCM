# HiveSCM
Distributed, standalone, issue/bug tracking system

Each individual issue/bug is tracked in a json file that goes along with your [git] repo.<br>
This allows the repo to keep track of its bugs and have a distributed Source Code Management(SCM) system.<br>

No installations necessary to run, just a virtualenv folder copy<br>
Hopefully to be a pyinstaller/py2exe/cx_freeze single executable someday

## Setting up the dev environment 
To create the initial 'virt' virtualenv

using a `virtualenv` for python, run the following to get setup:
- `cd HiveSCM`
- `virtualenv --no-site-packages --distribute virt`
- `source virt/bin/activate` or `source virt/scripts/activate`
- `pip install -r requirements.txt`

Once you have the virt folder, you can get to the tracker by:
- 'sourcing' the activate file and `python app.py`
- running the included `run_app.bat` which should just start up the 'server'

## To add to other repos (once you have a 'virt' setup)
- `git clone` this repo into  `/<yourRepo/HiveSCM`
- copy your 'virt' folder to the same directory
- execute `run_app.bat`

## Contributing
- File an issue for any features/bugs
- Fork the repo
- Create a feature/bug branch off of the `develop` branch
- Submit a pull request when you're finished

Please squash commits to be as compressed and logically necessary for the issue

Please be sure that it is rebased off of the latest develop
