<script>
	import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";
</script>

<div class="flex gap-10 flex-col">
    <a class="link link-hover link-accent text-xl" href="resume.pdf" target="_blank">
        {"> Download resume as pdf <"}
    </a>
    <Skeleton>
        <img src="resume_en.png" alt="Resume"/>
    </Skeleton>
</div>
