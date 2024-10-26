<script lang="ts">
    let isLoading = true;

    function onLoad() {
        isLoading = false;
    }

    export let className: string = "";
</script>

{#if isLoading}
<div class="skeleton {className}">
    <slot onload={onLoad}></slot>
</div>
{:else}
     <slot></slot>
{/if}
