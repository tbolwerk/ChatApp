"use strict";
exports.__esModule = true;
exports.DB_FILE = void 0;
var sqlite3_1 = require("sqlite3");
exports.DB_FILE = "soundboard";
var useDb = function (fn) {
    var db = new sqlite3_1["default"].Database(exports.DB_FILE);
    var result = fn(db);
    db.close();
    return result;
};
exports["default"] = useDb;
