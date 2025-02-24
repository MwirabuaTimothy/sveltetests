<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { globalState } from '$lib/store.svelte'
	import Header from './Header.svelte';
	import type { PageServerData } from './$types';
	let { children, data }:  { children: any, data: PageServerData } = $props();
	globalState.message = 'globalState.message set by layout top'
	globalState.user = data.user
</script>

<ParaglideJS {i18n}>

	<p class="my-2">Layout: 
		<button class="text-white px-2 py-1 bg-blue-800 rounded" onclick={() => globalState.message = 'globalState.message set by layout'}>{globalState.message}</button>
	</p>
	<Header/>
	{@render children()}
	
</ParaglideJS>
