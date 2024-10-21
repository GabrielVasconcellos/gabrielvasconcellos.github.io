<script lang="ts">
	import { ProjectList } from '$lib/components/ProjectList';
	import projects from '$lib/data/projects';
</script>

<div>
	<div class="prose mb-10">
		<h2>About</h2>
		<p class="text-xl">
			I'm Gabriel, a computer engineer with a passion for game development. I have over two years of
			experience in gameplay programming, primarily working with Unity, and I am currently learning
			Unreal Engine.
		</p>
	</div>
	<ProjectList {projects} />
</div>
