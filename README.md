# HiveSCM
Distributed, standalone, issue tracking system

## Setting up the dev environment
using a `virtualenv` for python
run the following to get setup:
`virtualenv --no-site-packages virt`
`source virt/bin/activate` or `source virt/scripts/activate`
`pip install -r requirements.txt`

## Building the pyinstaller exe for distribution
TODO

## Distribution
Copy the `dist` folder contents into any repo you want tracked.
It should contain everything necessary to get going.

## Contributing
File an issue for any features/bugs
Fork the repo
Create a feature/bug branch off of the `develop` branch
Do your fix in your own repo
Submit a pull request when you're finished

Please squash commits to be as compressed and logically necessary for the issue
Please be sure that it is rebased off of the latest develop
