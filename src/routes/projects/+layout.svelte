<script lang="ts">
	import { page } from '$app/stores';
	import projects, { type Project } from '$lib/data/projects';

	function getCurrentProject(path: string) {
		const projPath = path.replace('/projects/', '');
		const currentProj = projects.find((p) => p.path === projPath);

		return currentProj;
	}

	export let currentProject: Project;
	$: {
		currentProject = getCurrentProject($page.url.pathname) || projects[0];
	}
</script>

<svelte:head>
	<title>Gabriel Vasconcellos - {currentProject.title}</title>
</svelte:head>

<div class="flex flex-col lg:flex-row lg:justify-between">
	<div class="prose">
		<h1>{currentProject.title}</h1>
		{#if currentProject.video}
			<iframe
				class="rounded-box max-w-[80vw] max-h-96 aspect-video block lg:hidden"
				height="315px"
				src={currentProject.video}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{/if}
		{#if currentProject.link}
			<a class="link link-hover link-accent" href={currentProject.link.url} target="_blank">
				{currentProject.link.text}
			</a>
		{/if}
		<slot></slot>
	</div>
	<div class="flex flex-col gap-4 lg:ml-10 items-center">
		{#if currentProject.video}
			<iframe
				class="rounded-box max-w-xl max-h-96 aspect-video hidden lg:block"
				height="315px"
				src={currentProject.video}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{/if}
		{#each currentProject.images as image}
			<img
				class="rounded-box {image.aspectRatio} {image.aspectRatio === 'aspect-[16/9]'
					? 'max-w-xl-64 sm:max-w-xl max-h-96'
					: 'max-w-64 max-h-96'}"
				src="/{currentProject.path}/{image.src}"
				alt="Gameplay footage"
			/>
		{/each}
	</div>
</div>
