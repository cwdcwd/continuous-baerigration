#!/bin/bash

APPS=( $1-dev $1-stage $1-prod)
STAGES=("development" "staging" "production")

for ((i = 0; i < ${#APPS[@]}; i++)); do
  echo "creating app ${APPS[i]} for ${STAGES[i]}"
  heroku create ${APPS[i]}

  if [ $i -eq 0 ]; then
    echo "Creating heroku pipeline named ${1}"
    heroku pipelines:create $1 -s ${STAGES[i]} --app ${APPS[i]}
  else
    echo "adding ${APPS[i]} to pipeline at ${STAGES[i]}"
    heroku pipelines:add $1 -a ${APPS[i]} -s ${STAGES[i]}
  fi
done
