const { app, Menu } = require('electron')
const { createWindow } = require('./window')

const isMac = process.platform === 'darwin'

const createMenu = (win) => {
  const template = [
    ...(isMac
      ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      }]
      : []),
    {
      label: '操作',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit' },
        {
          label: "打开窗口",
          click: () => {
            createWindow()
          }
        },
        {
          label: "渲染进程事件",
          click: () => {
            // 主进程向渲染进程发送事件
            win.webContents.send('toPreload', '渲染进程事件 clicked')
          }
        },
        {
          label: 'Learn More',
          accelerator: "CommandOrControl+B",
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]


  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = { createMenu }