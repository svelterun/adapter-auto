export const adapters = [
	{
		name: 'Begin',
		test: () => !!process.env.BEGIN,
		module: '@sveltejs/adapter-begin'
	},
	{
		name: 'Vercel',
		test: () => !!process.env.VERCEL,
		module: '@sveltejs/adapter-vercel'
	},
	{
		name: 'Cloudflare Pages',
		test: () => !!process.env.CF_PAGES,
		module: '@sveltejs/adapter-cloudflare'
	},
	{
		name: 'Cloudflare Workers',
		test: () => !!process.env.CF_WORKER || !!process.env.CF_WORKERS,
		module: '@sveltejs/adapter-cloudflare-workers'
	}
	{
		name: 'Netlify',
		test: () => !!process.env.NETLIFY,
		module: '@sveltejs/adapter-netlify'
	},
	{
                name: 'Static',
                test: () => !!process.env.STATIC,
                module: '@sveltejs/adapter-static'
        },
	{
		name: 'Node.js',
		test: () => !!process.env.NODE || (
			!process.env.VERCEL && 
			!process.env.BEGIN && 
			!process.env.CF_PAGES && 
			!process.env.CF_WORKER && 
			!process.env.NETLIFY &&
			!process.env.STATIC
		),
		module: '@sveltejs/adapter-node'
	}
};
