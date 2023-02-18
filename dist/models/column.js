"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const columnSchema = new Schema({
    title: {
        type: String,
    },
    cards: {
        type: [String],
        default: []
    }
});
exports.Column = mongoose_1.default.model('Column', columnSchema);
//# sourceMappingURL=column.js.map