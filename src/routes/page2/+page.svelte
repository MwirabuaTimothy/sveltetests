<script lang="ts">
    import { globalState } from '$lib/store.svelte';
    globalState.user = null
</script>
<p class="my-2">
	Page 2:
    <button class="text-white px-2 py-1 bg-purple-800 rounded" onclick={() => globalState.message = 'globalState.message set by page 2'}>{globalState.message}</button>
</p>