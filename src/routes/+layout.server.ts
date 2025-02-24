import type {  PageServerLoad } from './$types';

export const load: PageServerLoad = async (event:any) => {
	return { user: {id: 1, name: 'John'}};
};
