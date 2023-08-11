const { app, ipcMain, BrowserWindow, screen } = require('electron')
const { createWindow } = require("./window")
const { createMenu } = require('./menu')
const { createMainContextMenu } = require('./contextMenu')

app.whenReady().then(() => {
  const win = createWindow()
  createMenu(win)
  createMainContextMenu()
})

// 行为设置：Mac 关闭不退出（保留在 docker 栏），再点击时开启
app.on('window-all-closed', () => {
  // 如果不是苹果，退出应用
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0 && process.platform === 'darwin') {
    createWindow()
  }
})

ipcMain.on('setWindowPosition', (event, options) => {
  const win = BrowserWindow.fromWebContents(event.sender)

  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const x = width / 2 - options.width / 2
  const y = height / 2 - options.height / 2

  win.setBounds({ ...options, x, y }, true)
})
