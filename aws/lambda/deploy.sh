# ref: https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/images-create.html

test() {
    docker run -p 9000:8080 hello-world
    curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
}

deploy() {
    _REGION=
    _ACCOUND_ID=
    _NAME=
    _REPOSITORY=${_ACCOUND_ID}.dkr.ecr.${_REGION}.amazonaws.com

    aws ecr get-login-password --region ${_REGION} | docker login --username AWS --password-stdin ${_REPOSITORY}

    aws ecr create-repository --repository-name ${_NAME} --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE

    docker tag ${_NAME}:latest ${_REPOSITORY}/${_NAME}:latest
    docker push ${_REPOSITORY}/${_NAME}:latest
}
