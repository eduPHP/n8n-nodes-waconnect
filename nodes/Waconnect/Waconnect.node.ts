import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { textDescription, textOperations } from './resources/send';
import { reactionDescription, reactionOperations } from './resources/react';

export class Waconnect implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WA Connect',
		name: 'waconnect',
		icon: 'file:waconnect.svg',
		group: ['transform'],
		version: 1,
		subtitle: 'Send WhatsApp message',
		description: 'Interact with the Waconnect API',
		codex: {
			categories: ['WA Connect'],
			subcategories: {
				'WA Connect': ['Send Text', 'Send Reaction'],
			},
		},
		defaults: {
			name: 'Waconnect',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'waconnectApi', required: true }],
		requestDefaults: {
			baseURL: 'https://wa-connect.rdo.blog.br',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Options',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Text Message', value: 'message' },
					{ name: 'Reaction', value: 'reaction' },
				],
				default: 'message',
			},

			...textOperations,
			...textDescription,
			...reactionOperations,
			...reactionDescription,
		],
	};
}
