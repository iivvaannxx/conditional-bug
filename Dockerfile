FROM denoland/deno:1.33.3

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache source/main.ts

EXPOSE 8000

CMD ["run", "-A", "source/main.ts"]
