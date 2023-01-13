"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const feed_json_1 = __importDefault(require("./mocks/feed.json"));
const whales_json_1 = __importDefault(require("./mocks/whales.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', function (req, res) {
    res.render('pages/index', { feeds: feed_json_1.default, whales: whales_json_1.default });
});
app.get('/feed', (req, res) => {
    res.send(feed_json_1.default);
});
app.get('/whales', (req, res) => {
    res.send(whales_json_1.default);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}.`);
});
