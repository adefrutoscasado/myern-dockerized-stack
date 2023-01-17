#!/bin/bash

set -x
registry="registry_host:registry_port"
repository="registry_repository_name"
unset version

if [ $# -ne 1 ]; then
    echo "Missing version tag"
    exit 1
fi
version="$1"
backend_tag=${registry}/${repository}/myern-backend:${version}
frontend_tag=${registry}/${repository}/myern-frontend:${version}

cd ../server/
docker build \
    -t ${backend_tag} .
docker push ${backend_tag}

cd ../client/
docker build \
    --build-arg PUBLIC_URL=#PUBLIC_URL# \
    -t ${frontend_tag} .
docker push ${frontend_tag}
