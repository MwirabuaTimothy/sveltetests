import { setContext, getContext } from "svelte";


export type keyType = 'user'
export type valueType = boolean

export function _setContext(key:keyType, value: valueType) {
    console.log('_setContext', key, value)
    setContext(key, value);
}
export function _getContext(key:string): valueType {
    return getContext(key);
}

