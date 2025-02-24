type stateTypes = {
    message: string,
    user: Object | null
}
export let globalState = $state<stateTypes>({
    message: 'original state',
    user: null,
});
