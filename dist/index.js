"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let app = express();
app.listen(3000, () => {
    console.log("port numbe");
});
//use of promise with then catch and use of async await
function getMathbook() {
    return true;
}
function getsciencebook() {
    return false;
}
function result() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (getMathbook()) {
                console.log("math book found");
            }
            else if (getsciencebook()) {
                console.log("get science book");
            }
            else {
                console.log("both book not found");
            }
        }, 2000);
    });
}
//use of then catch
// result().then(response=>{
//     console.log(response)
// })
// .catch(error=>{
//     console.log(error)
// })
//use of async and await
function result1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response1 = yield result();
            console.log(response1);
        }
        catch (error) {
            console.log(error);
        }
    });
}
result();
