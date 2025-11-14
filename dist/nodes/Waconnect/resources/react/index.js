"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactions = exports.reactionOperations = exports.reactionDescription = void 0;
exports.searchEmojis = searchEmojis;
var react_1 = require("./react");
Object.defineProperty(exports, "reactionDescription", { enumerable: true, get: function () { return react_1.reactionDescription; } });
Object.defineProperty(exports, "reactionOperations", { enumerable: true, get: function () { return react_1.reactionOperations; } });
exports.reactions = [
    { name: '😀 Grinning', value: '😀' },
    { name: '😂 Tears of Joy', value: '😂' },
    { name: '❤️ Red Heart', value: '❤️' },
    { name: '👍 Thumbs Up', value: '👍' },
    { name: '🔥 Fire', value: '🔥' },
    { name: '🎉 Party Popper', value: '🎉' },
    { name: '😢 Crying Face', value: '😢' },
];
async function searchEmojis(filter) {
    const all = exports.reactions;
    const q = (filter || '').toLowerCase();
    return {
        results: q ? all.filter((e) => e.name.toLowerCase().includes(q)) : all,
    };
}
;
//# sourceMappingURL=index.js.map