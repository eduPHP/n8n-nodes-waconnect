"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTextFields = exports.textOperations = void 0;
exports.textOperations = [
    {
        displayName: 'Message',
        name: 'send',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: { resource: ['message'] },
        },
        options: [
            {
                name: 'Send Message',
                value: 'text',
                action: 'Send a message',
                description: 'Send a message',
            },
        ],
        default: 'text',
    },
];
exports.sendTextFields = [
    {
        displayName: 'Input Mode',
        name: 'textInputMode',
        type: 'options',
        default: 'fields',
        options: [
            { name: 'Use Fields', value: 'fields', description: 'Use structured input fields below' },
            { name: 'Raw JSON', value: 'json', description: 'Manually provide the request body as JSON' },
        ],
        description: 'Choose how to provide message data',
        displayOptions: { show: { resource: ['message'] } },
    },
    {
        displayName: 'Raw JSON Body',
        name: 'textRawJson',
        type: 'json',
        default: '{}',
        typeOptions: { rows: 10 },
        displayOptions: { show: { resource: ['message'], textInputMode: ['json'] } },
        description: 'Custom JSON payload. Overrides all other fields when provided.',
        routing: {
            send: { type: 'body', property: '.' },
        },
    },
    {
        displayName: 'To (JID)',
        name: 'to',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: { resource: ['message'], textInputMode: ['fields'] } },
        description: 'Recipient WhatsApp ID (e.g. 5511999999999@s.whatsapp.net)',
        routing: { send: { type: 'body', property: 'to' } },
    },
    {
        displayName: 'Message',
        name: 'message',
        type: 'string',
        default: '',
        required: true,
        typeOptions: { rows: 3 },
        displayOptions: { show: { resource: ['message'], textInputMode: ['fields'] } },
        description: 'Text message content to send',
        routing: { send: { type: 'body', property: 'message' } },
    },
    {
        displayName: 'Optional Data',
        name: 'optional',
        type: 'collection',
        placeholder: 'Optional Fields',
        default: {},
        displayOptions: { show: { resource: ['message'], textInputMode: ['fields'] } },
        options: [
            {
                displayName: 'Edit Message ID',
                name: 'edit_message_id',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'edit_message_id' } },
            },
            {
                displayName: 'Reaction',
                name: 'reaction',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'reaction' } },
            },
            {
                displayName: 'Reply To ID',
                name: 'reply_id',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'reply_to' } },
            },
            {
                displayName: 'URL',
                name: 'url',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'link.url' } },
            },
            {
                displayName: 'UTL Title',
                name: 'title',
                type: 'string',
                default: '',
                routing: { send: { type: 'body', property: 'link.title' } },
            },
        ],
    },
    {
        displayName: 'Send Text',
        name: 'sendText',
        type: 'hidden',
        default: '',
        displayOptions: { show: { resource: ['message'] } },
        routing: {
            request: {
                method: 'POST',
                url: '={{$credentials.baseUrl}}/messages/text',
                headers: {
                    Authorization: '=Bearer {{$credentials.accessToken}}',
                    'Content-Type': 'application/json',
                },
            },
        },
    },
];
//# sourceMappingURL=text.js.map