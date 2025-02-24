<script lang="ts">
	import { globalState } from '$lib/store.svelte';
	import { _getContext } from '$lib/contexts';
	let userContext = _getContext('user');
</script>

<div class="my-2">

    <span>Header: </span>
	<a class="text-white px-2 py-1 bg-green-500 rounded" href="/">Home</a>
    <a class="text-white px-2 py-1 bg-green-500 rounded" href="/page1">Page 1</a>
    <a class="text-white px-2 py-1 bg-green-500 rounded" href="/page2">Page 2</a>
    <a class="text-white px-2 py-1 bg-green-500 rounded" href="/page3">Page 3</a>
	<button class="text-white px-2 py-1 bg-green-800 rounded" onclick={() => globalState.message = 'set by header'}>{globalState.message}</button>
	
	<span class="mx-1">{ globalState.user ? 'globalState.user set' : 'globalState.user not set'}</span>

	<span class="mx-1">Context:
	{#if userContext.loggedIn} Logged in
    {:else} Logged out
    {/if}
	</span>
	
</div>
