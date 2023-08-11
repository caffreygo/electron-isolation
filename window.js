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
      // sandbox: false 预加载脚本可以使用 fs、electron.shell 等，渲染进程不能使用
      // contextIsolation: false 当不进行隔离时，预加载脚本 preload.js 的内容可直接被渲染进程调用
      // nodeIntegration: true 当开启此配置，预加载脚本可以使用 fs、electron.shell
      // 当两个配置都设置时，渲染脚本也可以使用
    }
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))

  // setTimeout(() => {
  //   mainWindow.center()
  //   mainWindow.setBounds({
  //     width: 600,
  //     height: 600,
  //     x: 0,
  //     y: 0
  //   }, true)
  // }, 2000)

  return mainWindow
}

module.exports = { createWindow }