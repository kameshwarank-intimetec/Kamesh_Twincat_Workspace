// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {
    var SlotStatusConverter = function (state) {
        var colorMap = [
            '#000000', // 0: None
            '#FFFF00',          // 1: Yellow
            '#008000',          // 2: Green
            '#FFA500',          // 3: Orange
            '#FF0000'           // 4: Red
        ];

        var selectedColor = colorMap[state] !== undefined ? colorMap[state] : '#808080';

        return {
            "color": selectedColor
        };
    };

    TcHmi.Functions.registerFunction('SlotStatusConverter', SlotStatusConverter);
})(TcHmi);