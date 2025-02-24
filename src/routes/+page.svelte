<script lang="ts">
    import { globalState } from '$lib/store.svelte';
    import { _getContext } from '$lib/contexts';
    let userContext = _getContext('user');
</script>
<p class="my-2">
	Home:
    <button class="text-white px-2 py-1 bg-red-800 rounded" onclick={() => globalState.message = 'globalState.message set by home'}>{globalState.message}</button>
    <span class="mx-1">Context:
        {#if userContext.loggedIn} Logged in
        {:else} Logged out
        {/if}
    </span>
</p>


