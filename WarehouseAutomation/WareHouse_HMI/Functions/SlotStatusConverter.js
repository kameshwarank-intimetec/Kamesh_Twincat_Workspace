// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {
    var SlotStatusConverter = function (state) {
        
        // 0: None (Transparent/Default), 1: Yellow, 2: Green, 3: Orange, 4: Red
        var colorMap = [
                '#00000000', // 0: None (Fully Transparent - 8 values)
                '#FFFF00FF', // 1: Yellow (Solid - 8 values)
                '#008000FF', // 2: Green (Solid)
                '#FFA500FF', // 3: Orange (Solid)
                '#FF0000FF'  // 4: Red (Solid)
        ];

        // Return the color if it exists, otherwise return a fallback color (Gray)
        return colorMap[state] !== undefined ? colorMap[state] : '#808080';
    };

    TcHmi.Functions.registerFunction('SlotStatusConverter', SlotStatusConverter);
})(TcHmi);