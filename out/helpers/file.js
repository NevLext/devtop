"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectoryContent = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getFileLineCount = (filePath) => {
    console.log(filePath);
};
const traverseDirectoryRecursively = (directoryPath, content) => {
    const files = fs_1.default.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path_1.default.join(directoryPath, file);
        const stats = fs_1.default.statSync(filePath);
        const pushItem = (isDirectory) => {
            content.push({
                isDirectory: true,
                path: filePath
            });
        };
        if (stats.isDirectory()) {
            pushItem(true);
            traverseDirectoryRecursively(filePath, content);
        }
        else
            pushItem(true);
    });
};
const getDirectoryContent = (directoryPath) => {
    const content = [];
    traverseDirectoryRecursively(directoryPath, content);
};
exports.getDirectoryContent = getDirectoryContent;
