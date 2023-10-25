# ESDE NextJS Workshop

This repository contains the starter code for the ESDE NextJS Workshop.

## Getting Started

1. Clone this repository
2. Build and start the docker containers `npm run docker:up` or `docker-compose up -d`
3. Apply all db schema changes `npm run docker:exec npm run db:push` or `docker-compose exec esde-workshop-next npm run db:push`
4. (Optional) Attach to the container to see logs `npm run docker:logs` or `docker-compose logs -f esde-workshop-next`
