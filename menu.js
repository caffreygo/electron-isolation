const { app, Menu } = require('electron')
const { createWindow } = require('./window')

const isMac = process.platform === 'darwin'

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
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  {
    label: "操作",
    submenu: [
      {
        label: "打开窗口",
        click: () => {
          createWindow()
        }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
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