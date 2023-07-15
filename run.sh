#!/usr/bin/env bash

docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t conditional-bug .
docker run -d -p 80:8000 conditional-bug

echo -e "\nApp running on port 80."
