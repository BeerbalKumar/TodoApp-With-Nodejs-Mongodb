"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://beerbalkumar:beerbalkumar@todo-5pzm0.mongodb.net/test?retryWrites=true&w=majority");
exports.default = mongoose_1.default;
