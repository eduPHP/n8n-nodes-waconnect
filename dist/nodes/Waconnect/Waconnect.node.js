"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waconnect = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const send_1 = require("./resources/send");
const react_1 = require("./resources/react");
class Waconnect {
    constructor() {
        this.description = {
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
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...send_1.textOperations,
                ...send_1.textDescription,
                ...react_1.reactionOperations,
                ...react_1.reactionDescription,
            ],
        };
    }
}
exports.Waconnect = Waconnect;
//# sourceMappingURL=Waconnect.node.js.map