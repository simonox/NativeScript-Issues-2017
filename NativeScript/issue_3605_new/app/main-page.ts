import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as imageSourceModule from "image-source";
import * as enums from "ui/enums";
import * as fs from "file-system";

declare var android: any;

var permissions = require("nativescript-permissions");

export function onLoaded(args) {
    let page = args.object;

    permissions.requestPermission([
        "android.permission.INTERNET",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.SET_WALLPAPER",
        "android.permission.ACCESS_NETWORK_STATE"
    ], "I need these permissions")
        .then(function (res) {
            console.log("Permissions granted!");
        })
        .catch(function () {
            console.log("No permissions - plan B time!");
        });
}

export function saveImage() {

    var folderPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();
    console.log("folderPath; " + folderPath)

    // var documents = fs.knownFolders.documents();-
    // console.log("documents: " + documents);

    var fileName = 'img_' + new Date().getTime() + '.png';
    console.log("fileName: " + fileName);

    var path = fs.path.join(folderPath, fileName);
    console.log("path: " + path);

    var img = imageSourceModule.fromResource("icon");
    console.log("img: " + img);

    var exists = fs.File.exists(path);
    console.log("exists: " + exists);

    if (!exists) {
        var saved = img.saveToFile(path, enums.ImageFormat.png);
        console.log("saved: " + saved);
    }
}