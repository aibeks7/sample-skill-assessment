"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../public')));
// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}. Cool`);
});