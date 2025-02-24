<script lang="ts">
    import { globalState } from '$lib/store.svelte';
</script>
<p class="my-2">
	Home:
    <button class="text-white px-2 py-1 bg-red-800 rounded" onclick={() => globalState.message = 'globalState.message set by home'}>{globalState.message}</button>
</p>