const { BrowserWindow } = require("electron")
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    x: 1200,
    y: 100,
    // 预加载脚本
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // 当不进行隔离时，预加载脚本 preload.js 的内容可直接被渲染进程调用
      // contextIsolation: false
    }
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))

  return mainWindow
}

module.exports = { createWindow }