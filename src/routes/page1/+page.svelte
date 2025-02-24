<script lang="ts">
    import { globalState } from '$lib/store.svelte';
    let { data }:  { data: PageServerData } = $props();
    globalState.message = 'globalState.message set by page 1 top'
	globalState.user = data.user
</script>
<p class="my-2">
	Page 1: 
    <button class="text-white px-2 py-1 bg-pink-800 rounded" onclick={() => globalState.message = 'globalState.message set by page 1'}>{globalState.message}</button>
</p>