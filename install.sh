#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  cd dist
  git init

  git remote add deploy "travis@134.209.153.7:/var/www/html/vue/savaal"
  git config user.name "Travis CI"
  git config user.email "ani.rowjee+travis@gmail.com"

  git add .
  git commit -m "Deploy"
  git push --force deploy master
else
  echo "Not deploying, since this branch isn't master."
fi
