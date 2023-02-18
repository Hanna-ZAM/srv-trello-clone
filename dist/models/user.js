"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        /* required: true,*/
    },
    surname: {
        type: String,
        /* required: true,*/
    },
    projects: {
        type: [String],
        default: []
    }
});
exports.User = mongoose_1.default.model('User', userSchema);
/*module.exports = User;*/
//# sourceMappingURL=user.js.map