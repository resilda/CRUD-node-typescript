"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 4000;
const app = express_1.default();
const router = express_2.Router();
app.use(express_1.default.static(path_1.default.resolve(__dirname, "./app/src")));
app.use(cors_1.default());
//simple message
router.get("/", (req, res, next) => {
    res.json({ message: "hi" });
});
//get all users
app.get("/users", function (req, res) {
    let data = [
        {
            id: "1",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "2",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "3",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "4",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "5",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "6",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
        {
            id: "7",
            name: "Name",
            lastName: "Last name",
            age: 21,
            hobbies: "hobbies",
        },
    ];
    res.json(data);
});
let data2 = [];
//create new user
app.post('/create', function (req, res) {
    const newUser = {
        id: Math.random() + 1,
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        hobbies: req.body.hobbies
    };
    data2.push(newUser);
    console.log(newUser);
});
app.post('/sth', function (req, res) {
    let name = req.body;
    data2.push(name);
});
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "./app/src", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map