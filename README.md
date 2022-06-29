[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjhonson-lc%2Fmy-homepage)

# My homepage (mejhon.dev)

- [Next.js](https://nextjs.org/): **as the React framework**
- [Prisma](https://prisma.io/): **as the ORM for database access**
- [PlanetScale](https://planetscale.com): **as the database**
- [Sanity](https://www.sanity.io/): **as the CMS**
- [NextAuth.js](https://next-auth.js.org/): **for authentication**
- [Vercel](https://vercel.com): **for deployment**
- [Chakra UI](https://chakra-ui.com/): **for styling**

## Overview

- `app/layouts/*` - The different page layouts (blog, index) uses.
- `blog/*` - Components, types and screens of the blog entity
- `lib/*` - Helpful utilities or code for external services.
- `pages/*` - All static pages.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering create author, post views and post comments.
- `pages/blog/*` - Static pre-rendered blog pages using Sanity.
- `pages/work/*` - [Personal Work](https://mejhon.dev/work).
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `session/*` - Components, types and screens of the session entity
- `work/*` - Components, types and screens of the work entity

## Running Locally

```bash
$ git clone https://github.com/jhonson-lc/my-homepage.git
$ cd my-homepage
$ npm i
$ npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/jhonson-lc/my-homepage/blob/main/.env.example);

## Cloning / Forking

Please review the [license](https://github.com/jhonson-lc/my-homepage/blob/main/LICENSE.txt) and remove all of my personal information.