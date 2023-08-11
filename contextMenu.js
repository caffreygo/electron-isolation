const { ipcMain, app, Menu, BrowserWindow, shell } = require('electron')

createMainContextMenu = () => {
  ipcMain.on('mainPopMenu', (event, options) => {
    const template = [{
      label: '退出',
      click: () => app.quit()
    }, {
      label: "访问官网",
      click: () => {
        shell.openExternal("https://www.google.com")
      }
    }]

    const menu = Menu.buildFromTemplate(template)

    menu.popup(BrowserWindow.fromWebContents(event.sender))
  })
}

module.exports = { createMainContextMenu }