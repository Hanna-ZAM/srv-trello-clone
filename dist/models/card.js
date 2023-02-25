"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const cardSchema = new Schema({
    id: {
        type: Number,
    },
    text: {
        type: String,
    },
});
exports.Card = mongoose_1.default.model('Card', cardSchema);
//# sourceMappingURL=card.js.map