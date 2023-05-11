# website

My main website with a portfolio and a blog area for some stuff I want to write
about 😄

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prisma

This project uses [Prisma](https://www.prisma.io/) to communicate with it's
database.

### Note about development

During development, adjust `schema.prisma` to your needs and
[sync with development database](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate)
(done automatically on dev server start). This will create migrations, which are
then applied automatically to production in deployment pipeline.

## Google Cloud Run

This project is hosted on [Google Cloud Run](https://cloud.google.com/run).
Whenever something is pushed to the main branch, GitHub Actions builds a new
Docker image, uploads it to the cloud, and deploys the page.

## Docs

[Setting up the dev environment](./docs/development.md)  
[More on project architecture](./docs/architecture.md)  
[Project requirements](./docs/requirements.md)  
[Testing docs](./docs/testing.md)
