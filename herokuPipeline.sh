#!/bin/bash

#heroku create $1-dev
#heroku create $1-stage
#heroku create $1-prod

origin=$(git config --get remote.origin.url)
echo "creating pipeline for $1 from $origin"
heroku pipelines:setup $1 $origin
