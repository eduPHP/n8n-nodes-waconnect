import type {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
  Icon,
} from 'n8n-workflow';

export class WaconnectApi implements ICredentialType {
	name = 'waconnectApi';
	displayName = 'WaConnect API';
	// Optional doc link
	documentationUrl = 'https://github.com/eduPHP/wa-connect-baileys?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'hidden',
			default: 'https://wa-connect.rdo.blog.br',
			description: 'Root URL of your WaConnect server',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				// Inject Bearer token into every request
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	// Uses the user's Base URL + /test
	test: ICredentialTestRequest = {
		request: {
			method: 'POST', // or 'POST' if your /test requires it
			url: '={{$credentials.baseUrl}}/api/sessions/test',
		},
	};

	// Put waconnect.svg next to this file and keep this simple:
	icon = 'file:waconnect.svg' as Icon;
}
