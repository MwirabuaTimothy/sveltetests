<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { globalState } from '$lib/store.svelte'
	import Header from './Header.svelte';
	import type { PageServerData } from './$types';
	let { children, data }:  { children: any, data: PageServerData } = $props();
	import { _setContext, _getContext, type valueType } from '$lib/contexts';
	// globalState.message = 'globalState.message set by layout top'
	// globalState.user = data.user

	let _state:valueType = $state({loggedIn: false});
	_setContext('user', _state);
	let userContext = _getContext('user');

	$inspect('layout.svelte _state', _state) 
	$inspect('layout.svelte _getContext("user")', userContext)
</script>

<ParaglideJS {i18n}>

	<p class="my-2">Layout: 
		<button class="text-white px-2 py-1 bg-blue-800 rounded" onclick={() => globalState.message = 'globalState.message set by layout'}>{globalState.message}</button>
	</p>
	<Header/>
	{@render children()}

	<p>Layout context tests...
		{#if userContext.loggedIn}
			<button class="text-white px-2 py-1 bg-red-800 rounded" onclick={() => {
				console.log('Logout');
				_state.loggedIn = false
			}}>Logout</button>
		{:else}
			<button class="text-white px-2 py-1 bg-red-800 rounded" onclick={() => {
				console.log('Login');
				_state.loggedIn = true
			}}>Login</button>
		{/if}
	</p>

</ParaglideJS>
