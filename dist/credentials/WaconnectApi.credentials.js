"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaconnectApi = void 0;
class WaconnectApi {
    constructor() {
        this.name = 'waconnectApi';
        this.displayName = 'WaConnect API';
        this.documentationUrl = 'https://github.com/eduPHP/wa-connect-baileys?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'hidden',
                default: 'http://host.docker.internal:9012',
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
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.accessToken}}',
                },
            },
        };
        this.test = {
            request: {
                method: 'POST',
                url: '={{$credentials.baseUrl}}/sessions/test',
            },
        };
        this.icon = 'file:waconnect.svg';
    }
}
exports.WaconnectApi = WaconnectApi;
//# sourceMappingURL=WaconnectApi.credentials.js.map