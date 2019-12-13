"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors = require('cors');
app.use(cors());
var database_1 = __importDefault(require("./config/database"));
app.listen(process.env.PORT || 3002, function () {
    console.log("server is connected");
});
app.get("/get", function (req, res) {
    res.send({ message: "server is getting" });
});
var db = database_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
app.use(express_1.default.json());
app.use("/", require("./Todo"));
