DOCKER_BUILDKIT=1 docker build -t node17 .
docker run --rm \
    -it \
    -v "$(pwd)":/home/node/app \
    -w /home/node/app \
    -p 3000:3000 \
    node17 \
    bash -c "npm install && npm run build"