const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  toMain: () => {
    ipcRenderer.send('mainEvent')
  }
})