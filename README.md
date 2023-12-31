# ESDE NextJS Workshop

This repository contains the starter code for the ESDE NextJS Workshop.

## Getting Started

1. Clone this repository
2. Build and start the docker containers `npm run docker:up` or `docker-compose up -d`
3. Apply all db schema changes `npm run docker:exec npm run db:push` or `docker-compose exec esde-workshop-next npm run db:push`
4. (Optional) Attach to the container to see logs `npm run docker:logs` or `docker-compose logs -f esde-workshop-next`
5. Open your browser on `http://localhost:3040`

## Attach to docker container using VSCode
1. Install `Dev Containers` extension
2. Reload VSCode (CMD/CTRL + SHIFT + P -> `Developer: Reload Window`)
3. CMD/CTRL + SHIFT + P -> `Dev Containers: Attach to Running Container...`
4. Choose path `/usr/src/app` and press enter

If you want to restart the container, run `docker-compose restart esde-workshop-next`

## Useful links
- [NextJS Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [T3 Stack documetation](https://orm.drizzle.team/docs/overview) - Using a stack similar to this workshop. Check it out if you want to get started building a web app with these technologies.