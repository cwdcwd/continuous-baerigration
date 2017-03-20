# Continuous Baerigration


### CI Status:
- CircleCI:
  + master branch
    + build:  [![CircleCI](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/master.svg?style=svg)](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/master)
    + coverage:
  + develop branch:
    * build:  [![CircleCI](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/develop.svg?style=svg)](https://circleci.com/gh/cwdcwd/continuous-baerigration/tree/develop)
    * coverage:
- GitlabCI:
  + master branch:
    * build: [![build status](https://gitlab.com/lazybaer/continuous-baerigration/badges/master/build.svg)](https://gitlab.com/lazybaer/continuous-baerigration/commits/master)
    * Coverage: [![coverage report](https://gitlab.com/lazybaer/continuous-baerigration/badges/master/coverage.svg)](https://gitlab.com/lazybaer/continuous-baerigration/commits/master)
  + develop branch:
    * build:[![build status](https://gitlab.com/lazybaer/continuous-baerigration/badges/develop/build.svg)](https://gitlab.com/lazybaer/continuous-baerigration/commits/develop)
    * coverage:[![coverage report](https://gitlab.com/lazybaer/continuous-baerigration/badges/develop/coverage.svg)](https://gitlab.com/lazybaer/continuous-baerigration/commits/develop)


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
- Under the "Project Settings" -> "Test Commands" -> "Test Commands" -> set the "Test commands" to `npm test`

## Setting up Heroku Pipelines
- Github:
  + run the `herokuPipeline.sh` bash script to create an app and pipeline. i.e.: `./herokuPipeline.sh fancyAppName`
  + this will prompt you set up your pipeline
- Gitlab:
  + run the `herokuPipeline-gitlab.sh` bash script to create an app and pipeline. i.e.: `./herokuPipeline.sh fancyAppName`
  + note: Automatic deploys via Github are not currently available so you will have to rely on the [.gitlab-ci.yaml](https://github.com/cwdcwd/continuous-baerigration/blob/master/.gitlab-ci.yml) file to be set up properly for deploys. This entails setting:
    * an app name in `$HEROKU_DEV_APP` and `$HEROKU_STAGING_APP` variables
    * your Heroku API key in the `$HEROKU_DEV_API_KEY` and `$HEROKU_STAGING_API_KEY` variables
    * the URL of your deployment sites in the `$HEROKU_DEV_URL` and `$HEROKU_STAGING_URL`
