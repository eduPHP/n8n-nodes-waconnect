import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
export { reactionDescription, reactionOperations } from './react';
export declare const reactions: {
    name: string;
    value: string;
}[];
export declare function searchEmojis(this: ILoadOptionsFunctions, filter?: string): Promise<INodeListSearchResult>;
