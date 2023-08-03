import { app } from 'electron'
import { getDirectoryContent } from './helpers/file'

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

getDirectoryContent('./..')
app.quit()
