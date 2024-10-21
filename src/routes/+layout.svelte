<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import '../app.css';

	import { page } from '$app/stores';

	function setActiveLinks(links: Array<any>, currentPath: string) {
		let current = links[0];
		for (var i = 0, len = links.length; i < len; i++) {
			if (links[i].path === currentPath) {
				current = links[i]
			}
		}

		current.active = true;
		return current;
	}

	export let headerLinks: Array<any>;
	export let path;
	export let currentLink: any;
	$: {
		path = $page.url.pathname;

		headerLinks = [
			{ path: '/', text: 'Projects', active: false },
			{ path: '/resume', text: 'Resume', active: false },
			{ path: '/contact', text: 'Contact', active: false }
		];

		currentLink = setActiveLinks(headerLinks, path);
	}
</script>

<svelte:head>
	<title>Gabriel Vasconcellos - {currentLink.text}</title>
</svelte:head>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="w-full navbar bg-neutral text-neutral-content border-b-2 border-base-300">
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="sm:mx-2 flex-1 mx-auto">
				<a class="text-xl sm:text-3xl btn btn-ghost btn-lg" href="/">Gabriel Vasconcellos</a>
			</div>
			<div role="tablist" class="hidden sm:block tabs tabs-lg flex-none tabs-bordered">
				{#each headerLinks as link}
					<a role="tab" class="tab capitalize {link.active ? 'tab-active' : ''}" href={link.path}>
						{link.text}
					</a>
				{/each}
			</div>
		</div>
		<div class="m-10 mx-auto max-w-[90vw]"><slot></slot></div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-4/6 p-4">
			{#each headerLinks as link}
				<li>
					<a class="text-xl" href={link.path} aria-label="close sidebar">
						{link.text}
					</a>
					<div class="divider" />
				</li>
			{/each}
		</ul>
	</div>
</div>
