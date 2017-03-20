# Continuous Baerigration



### CI Status: master branch



[![CircleCI](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/master.svg?style=svg)](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/master)

### CI Status: develop branch

[![CircleCI](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/develop.svg?style=svg)](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/develop)

The point of this project is to demonstrate Continuous Integration & Deployment of a web app using:
- Heroku Deployment Pipelines w/ Review Apps
- Circle CI for testing
- Gitlab CI for CI & CD when hosted on Gitlab

## Installation & Running:
- `npm i` to install
- `npm start` to run. Default web `PORT` is 3000.


## Testing:
- route unit testing done w/ Mocha & Supertest
- to run, execute `npm test`

## Setting up CircleCI
- sign up & login to CircleCI.
- create a new project inside CircleCI and add your repo to it.
- Under the "Project Settings" -> "Build Settings" -> "Advanced Settings" -> "Build forked pull requests" make sure the setting is "On"
- Under the "Project Settings" -> "Test Commands" -> "Test Commands" -> set the "Test commands" to `npm test`\

## Setting up Heroku Pipelines
- run the `herokuPipeline.sh` bash script to create an app and pipeline. i.e.: `./herokuPipeline.sh fancyAppName`
- this will prompt you set up your pipeline
