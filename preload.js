const { contextBridge, ipcRenderer } = require('electron')
// const fs = require('fs')

// electron.shell.openExternal('https://www.google.com') 使用系统默认浏览器打开一个网页，需要打开 sandbox

contextBridge.exposeInMainWorld('api', {
  toMain: () => {
    ipcRenderer.send('mainEvent')
  }
})