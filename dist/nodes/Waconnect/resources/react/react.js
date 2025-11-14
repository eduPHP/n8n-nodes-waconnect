"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactionDescription = exports.reactionOperations = void 0;
exports.reactionOperations = [
    {
        displayName: 'Message',
        name: 'react',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: { resource: ['reaction'] },
        },
        options: [
            {
                name: 'React to Message',
                value: 'react',
                action: 'Add a reaction emoji',
                description: 'React to a message with an emoji',
            },
        ],
        default: 'react',
    },
];
exports.reactionDescription = [
    {
        displayName: 'Input Mode',
        name: 'reactionInputMode',
        type: 'options',
        default: 'fields',
        options: [
            { name: 'Use Fields', value: 'fields', description: 'Use structured input fields below' },
            { name: 'Raw JSON', value: 'json', description: 'Manually provide the request body as JSON' },
        ],
        description: 'Choose how to provide reaction data',
        displayOptions: { show: { resource: ['reaction'] } },
    },
    {
        displayName: 'Raw JSON Body',
        name: 'reactionRawJson',
        type: 'json',
        default: '{"key": {"id": "message-id"}, "reaction": "👍"}',
        typeOptions: { rows: 10 },
        displayOptions: { show: { resource: ['reaction'], reactionInputMode: ['json'] } },
        description: 'Custom JSON payload. Overrides all other fields when provided.',
        routing: {
            send: { type: 'body', property: '.' },
        },
    },
    {
        displayName: 'Message ID',
        name: 'message_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: { resource: ['reaction'], reactionInputMode: ['fields'] } },
        description: 'The target message ID to react to',
        routing: { send: { type: 'body', property: 'key.id' } },
    },
    {
        displayName: 'Reaction Emoji',
        name: 'reaction',
        type: 'resourceLocator',
        default: { mode: 'emoji', value: '' },
        displayOptions: { show: { resource: ['reaction'], reactionInputMode: ['fields'] } },
        required: true,
        modes: [
            {
                displayName: 'Select Emoji',
                name: 'emoji',
                type: 'list',
                typeOptions: {
                    searchListMethod: 'searchEmojis',
                    searchable: true,
                    searchFilterRequired: false,
                },
            },
            {
                displayName: 'Custom',
                name: 'custom',
                type: 'string',
                placeholder: 'Type or paste emoji',
                validation: [
                    function (value) {
                        const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/u;
                        if (!emojiRegex.test(value)) {
                            throw new Error('Please enter a valid emoji');
                        }
                    },
                ],
            },
        ],
        routing: {
            send: { type: 'body', property: 'reaction', value: '={{$value}}' },
        },
    },
    {
        displayName: 'Send Reaction',
        name: 'sendReaction',
        type: 'hidden',
        default: '',
        displayOptions: { show: { resource: ['reaction'] } },
        routing: {
            request: {
                method: 'POST',
                url: '={{$credentials.baseUrl}}/messages/react',
                headers: {
                    Authorization: '=Bearer {{$credentials.accessToken}}',
                    'Content-Type': 'application/json',
                },
            },
        },
    },
];
//# sourceMappingURL=react.js.map