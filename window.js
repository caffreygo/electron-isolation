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
      // contextIsolation: false 当不进行隔离时，预加载脚本 preload.js 的内容可直接被渲染进程调用
      // nodeIntegration: true 当开启此配置，预加载脚本可以使用 fs 这些 node 模块
      // 当两个配置都设置时，渲染脚本也可以使用 fs 这些 node 模块
    }
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))

  return mainWindow
}

module.exports = { createWindow }