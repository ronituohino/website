# Architecture

## Structure

The application is made with [Next.js](https://nextjs.org/) and it follows (in
my opinion) the preferred file structure of Next apps:

`/pages` contains the actual routed pages of the application.  
`/pages/api` contains backend routes. See
[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction).  
`/pages/_app.tsx` is rendered on every page (use for shared layouts or heading
tags). See
[Next.js Custom App](https://nextjs.org/docs/advanced-features/custom-app).  
`/pages/_document.tsx` is rendered on every page on the server. See
[Next.js Custom Document](https://nextjs.org/docs/advanced-features/custom-document).  
`/pages/404.tsx` is a custom error page. See
[Next.js Custom Error Page](https://nextjs.org/docs/advanced-features/custom-error-page).  
`/components` contains React components that can be reused throughout the
application.  
`/public` contains statically served files.  
`/styles` contains global css style declarations.  
`/docs` contains all the application documentation.  
`/test` contains all application tests.  
`/prisma` contains the database models.  
`/assets` contains assets which I needed to create some of the content on the
website. (Blender files)

### Ignored folders

`/node_modules` contains all Node modules which need to be installed for the
application to run.  
`/.next` contains the application realtime build. This folder can be deleted for
Next.js to rebuild the application.

## Hosting

The application is hosted in a Docker container in
[Google Cloud Run](https://cloud.google.com/run). The deployment is automated
using GitHub Actions [here](../.github/workflows/pipeline.yml).

## Database

The application database is on [bit.io](https://bit.io).  
Free DBaaS resources here: https://free-for.dev/#/?id=dbaas
