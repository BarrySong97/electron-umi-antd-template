import { app, BrowserWindow, ipcMain, screen } from "electron";
import * as path from "path";
import * as url from "url";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from "electron-devtools-installer";

let mainWindow: Electron.BrowserWindow | null;

const mainWindowSize = {
  width: 1800,
  height: 800,
};

function createWindow() {
  mainWindow = new BrowserWindow({
    ...mainWindowSize,
    backgroundColor: "#fff",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:8000");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "renderer/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app
  .on("ready", createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === "development") {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log("An error occurred: ", err));
    }
  });
app.allowRendererProcessReuse = true;
