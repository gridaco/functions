"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.all("/", function (req, res, next) {
    return res.status(200).json({
        message: "Hello from root!",
    });
});
app.get("/hello", function (req, res, next) {
    return res.status(200).json({
        message: "Hello from path!",
    });
});
app.use(function (req, res, next) {
    return res.status(404).json({
        error: "Not Found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map