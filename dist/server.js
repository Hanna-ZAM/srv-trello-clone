"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
/*import ('dotenv').config();*/
const method_override_1 = __importDefault(require("method-override"));
const api_post_routes_1 = require("./routes/api-post-routes");
const errorMsg = chalk_1.default.bgKeyword('white').redBright;
const successMsg = chalk_1.default.bgKeyword('green').white;
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const MONGO_URL = 'mongodb+srv://Hanna-ZAM:PASS789@cluster0.gzl4z8j.mongodb.net/clone-trello?retryWrites=true&w=majority';
const PORT = 3001;
mongoose_1.default
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(successMsg('Connected to DB')))
    .catch((error) => console.log(errorMsg(error)));
app.listen(PORT, () => {
    console.log(successMsg(`listening port ${PORT}`));
});
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
/*app.use(express.json());*/
app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
app.use((0, method_override_1.default)('_method'));
app.use(api_post_routes_1.router);
//# sourceMappingURL=server.js.map