import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow'

export { reactionDescription, reactionOperations } from './react';

export const reactions = [
	{ name: '😀 Grinning', value: '😀' },
	{ name: '😂 Tears of Joy', value: '😂' },
	{ name: '❤️ Red Heart', value: '❤️' },
	{ name: '👍 Thumbs Up', value: '👍' },
	{ name: '🔥 Fire', value: '🔥' },
	{ name: '🎉 Party Popper', value: '🎉' },
	{ name: '😢 Crying Face', value: '😢' },
];

export async function searchEmojis(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const all = reactions;
	const q = (filter || '').toLowerCase();
	return {
		results: q ? all.filter((e) => e.name.toLowerCase().includes(q)) : all,
	};
};
