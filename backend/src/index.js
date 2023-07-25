"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const conn = await mongoose_1.default.connect(process.env.DB_ADDR, {
    dbName: "CoShell",
});
app.listen(port, () => {
    try {
        console.log(`[server] : Server is running at https:${port}`);
    }
    catch (e) {
        console.log(e);
    }
});
