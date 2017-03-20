#!/bin/bash

APPS=( $1-dev $1-stage $1-prod)
STAGES=("development" "staging" "production")
NAME=$1
NAME_LEN=${#NAME}
echo "Setting up apps & pipeline: '${NAME}'"

if [ $NAME_LEN -gt 24 ]; then
  echo "'${NAME}' is too long. Max 24 chars."
  exit 1
fi

for ((i = 0; i < ${#APPS[@]}; i++)); do
  echo "Creating app ${APPS[i]} for ${STAGES[i]}"
  heroku create ${APPS[i]}

  if [ $i -eq 0 ]; then
    echo "Creating heroku pipeline named ${NAME}"
    heroku pipelines:create $NAME -s ${STAGES[i]} --app ${APPS[i]}
  else
    echo "Adding ${APPS[i]} to pipeline at ${STAGES[i]}"
    heroku pipelines:add $NAME -a ${APPS[i]} -s ${STAGES[i]}
  fi
done
