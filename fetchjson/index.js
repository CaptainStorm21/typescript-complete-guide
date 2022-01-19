"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data)
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n      The todo with ID : ".concat(ID, ";\n      Has a Title: ").concat(title, ";\n      Has it been finished? ").concat(finished, ";\n  "));
});
