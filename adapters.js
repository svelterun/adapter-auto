export const adapters = [
  {
    name: 'Cloudflare Pages',
    test: () => !!process.env.CF_PAGES,
    module: '@sveltejs/adapter-cloudflare'
  },
  {
    name: 'Cloudflare Workers',
    test: () => (!!process.env.CF_WORKER || !!process.env.CF_WORKERS),
    module: '@sveltejs/adapter-cloudflare-workers'
  },
  {
    name: 'Netlify',
    test: () => !!process.env.NETLIFY,
    module: '@sveltejs/adapter-netlify'
  },
  {
    name: 'Vercel',
    test: () => !!process.env.VERCEL,
    module: '@sveltejs/adapter-vercel'
  },
  {
    name: 'Static',
    test: () => !!process.env.STATIC || (
      !process.env.CF_PAGES &&
      !process.env.CF_WORKER &&
      !process.env.CF_WORKERS &&
      !process.env.NETLIFY &&
      !process.env.VERCEL
    ),
    module: '@sveltejs/adapter-static'
  },
];
