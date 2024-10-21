<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let projects: Array<Project>;
</script>

<div>
	<h2 class="mb-10">Projects</h2>

	<ul class="menu menu-vertical lg:menu-horizontal gap-4 sm:gap-8">
		{#each projects as { title, path }}
			<a href="projects/{path}">
				<li class="card shadow-xl w-auto sm:max-md:max-w-96 bg-base-200">
					<figure>
						<img
							class="rounded-box object-fill aspect-video max-h-64"
							src="/{path}/title.png"
							alt={title}
						/>
					</figure>
					<div class="card-body">
						<span class="card-title">{title}</span>
					</div>
				</li>
			</a>
		{/each}
	</ul>
</div>
