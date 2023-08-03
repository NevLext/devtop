"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const file_1 = require("./helpers/file");
// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//     })
//     win.loadFile("index.html")
// }
// app.whenReady().then(() => {
//     createWindow()
// })
(0, file_1.getDirectoryContent)('./..');
electron_1.app.quit();
