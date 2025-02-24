<script lang="ts">
	// import { page } from '$app/stores';
	import { globalState } from '$lib/store.svelte';
	// import type { PageData } from './$types';
	// import type { authType } from '$lib/stores/userContext';
	// let { auth }: { user: PageData | null, auth: authType } = $props();

	// import { getAuthContext, type authType } from '$lib/stores/userContext';
	// let auth: authType  = getAuthContext();
	
</script>

<div class="my-2">

    <span>Header: </span>
	<a class="text-white px-2 py-1 bg-green-500 rounded" href="/">Home</a>
    <a class="text-white px-2 py-1 bg-green-500 rounded" href="/page1">Page 1</a>
    <a class="text-white px-2 py-1 bg-green-500 rounded" href="/page2">Page 2</a>
	<button class="text-white px-2 py-1 bg-green-800 rounded" onclick={() => globalState.message = 'set by header'}>{globalState.message}</button>
	<p>{ globalState.user ? 'User set' : 'User not set'}</p>
	
</div>
