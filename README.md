# @svelterun/adapter-auto

Automatically chooses the adapter for your current environment, if possible.

## Usage

```bash
npm install -D @svelterun/adapter-auto
```

Then add to your `svelte.config.js`:

```js
import adapt from "@svelterun/adapter-auto";

{
  "kit": {
    "adapter": adapt()
  }
}
```

## Supported environments

The following environments are supported out-of-the-box, meaning a newly created project can be deployed on one of these platforms without any additional configuration:

- [Cloudflare Pages](https://developers.cloudflare.com/pages/) via [adapter-cloudflare](https://github.com/sveltejs/kit/tree/main/packages/adapter-cloudflare)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) via [adapter-cloudflare](https://github.com/sveltejs/kit/tree/main/packages/adapter-cloudflare-workers)
- [Netlify](https://netlify.com/) via [adapter-netlify](https://github.com/sveltejs/kit/tree/main/packages/adapter-netlify)
- [Vercel](https://vercel.com/) via [adapter-vercel](https://github.com/sveltejs/kit/tree/main/packages/adapter-vercel)
- Static via [adapter-static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static)

## Community adapters

Support for additional environments can be added in [adapters.js](adapters.js). To avoid this package ballooning in size, community-supported adapters should not be added as dependencies — adapter-auto will instead prompt users to install missing packages as needed.

## License

[MIT](https://mit-license.org) © [Nicholas Berlette](https://github.com/nberlette)

