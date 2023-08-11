const { app, ipcMain } = require('electron')
const { createWindow } = require("./window")

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', (event, value)=> {
  console.log("event dispatched")
})
