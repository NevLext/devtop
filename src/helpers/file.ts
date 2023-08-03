import fs from 'fs'
import path from 'path'
import { DirectoryItem } from '../types/file.types'

export const traverseDirectory = (directoryPath: string, content: any) => {
    const files = fs.readdirSync(directoryPath)

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file)
        const stats = fs.statSync(filePath)
        const pushItem = (isDirectory: boolean) => {
            content.push({
                isDirectory,
                path: filePath.replace(/\\/g, '/')
            })
        }
        if (stats.isDirectory()) {
            pushItem(true)
            traverseDirectory(filePath, content)
        } else pushItem(false)
    })
}

export const getDirectoryContent = (directoryPath: string) => {
    const content: DirectoryItem[] = []
    traverseDirectory(directoryPath, content)
    return content
}

export const getDirectoryItemParent = (itemPath: string) => {
    const parts = itemPath.split('/')
    parts.pop()
    return parts.join('/')
}

export const getDirectoryChildren = (directoryPath: string) => {
    const content = getDirectoryContent(directoryPath)
    const parts = directoryPath.split('/')
    return content.filter(
        (item) => item.path.split('/').length == parts.length + 1
    )
}

export const getFileLineCount = (filePath: string) => {
    const file = fs.readFileSync(filePath).toString()
    return file.split(/(?:\r\n|\r|\n)/g).length
}
