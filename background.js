// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
 * Checks for an extension error that occurred during the asynchronous call.
 * If an error occurs, will invoke the error callback and throw an exception.
 *
 * @param {function(!Error)} errCallback The callback to invoke for error
 *     reporting.
 */
function checkForExtensionError(errCallback) {
    if (typeof(chrome.extension.lastError) != 'undefined') {
        var error = new Error(chrome.extension.lastError.message);
        errCallback(error);
        throw error;
    }
}

/**
 * Captures a screenshot of the visible tab.
 *
 * @param {function(string)} callback The callback to invoke with the base64
 *     encoded PNG.
 * @param {function(!Error)} errCallback The callback to invoke for error
 *     reporting.
 */
function captureScreenshot(callback, errCallback) {
    chrome.tabs.captureVisibleTab({format: 'png'}, function (dataUrl) {
        if (chrome.extension.lastError &&
            chrome.extension.lastError.message.indexOf('permission') != -1) {
            var error = new Error(chrome.extension.lastError.message);
            error.code = 103;  // kForbidden
            errCallback(error);
            return;
        }
        checkForExtensionError(errCallback);
        var base64 = ';base64,';
        callback(dataUrl.substr(dataUrl.indexOf(base64) + base64.length))
    });
}

/**
 * Gets info about the current window.
 *
 * @param {function(*)} callback The callback to invoke with the window info.
 * @param {function(!Error)} errCallback The callback to invoke for error
 *     reporting.
 */
function getWindowInfo(callback, errCallback) {
    chrome.windows.getCurrent({populate: true}, function (window) {
        checkForExtensionError(errCallback);
        callback(window);
    });
}

/**
 * Updates the properties of the current window.
 *
 * @param {Object} updateInfo Update info to pass to chrome.windows.update.
 * @param {function()} callback Invoked when the updating is complete.
 * @param {function(!Error)} errCallback The callback to invoke for error
 *     reporting.
 */
function updateWindow(updateInfo, callback, errCallback) {
    console.log(arguments);
    chrome.windows.getCurrent({}, function (window) {
        checkForExtensionError(errCallback);
        chrome.windows.update(window.id, updateInfo, function (window) {
            checkForExtensionError(errCallback);
            callback();
        });
    });
}

/**
 * Launches an app with the specified id.
 *
 * @param {string} id The ID of the app to launch.
 * @param {function()} callback Invoked when the launch event is complete.
 * @param {function(!Error)} errCallback The callback to invoke for error
 *     reporting.
 */
function launchApp(id, callback, errCallback) {
    chrome.management.launchApp(id, function () {
        checkForExtensionError(errCallback);
        callback();
    });
}

console.log('hit');

window.addEventListener("load", function () {
    const client = io('https://localhost:8000', {
        secure: true,
        rejectUnauthorized: false,
        autoConnect: true
    });
    client.on('resolve', (name, updateInfo) => {
        console.log('updating...');
        if (name === 'BrowserService.prototype.updateWindow') {
            // TODO: include gulp notebook search, .bash_sessions,
            //    selenium scripts, stack overflow, github,
            updateWindow(updateInfo, () => {
                client.emit('result', 'BrowserService.prototype.updateWindow',
                    'Updating window with ' + JSON.stringify(search));
            }, () => {
                client.emit('result', 'BrowserService.prototype.updateWindow',
                    'Updating window error ' + JSON.stringify(search));
            })
        }
    });
    client.emit('handle', 'BrowserService', () => {
    });
    client.on('error', e => console.log(e));

});
