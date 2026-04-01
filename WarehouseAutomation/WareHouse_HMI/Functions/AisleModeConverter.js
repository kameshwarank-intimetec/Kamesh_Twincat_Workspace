// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var AisleModeConverter = function (state) {
        var modeMap = {
            0: 'IDLE',
            10: 'RECEIVING_FROM_LOOP',
            20: 'TRANSPORT_TO_CRANE',
            30: 'WAITING_FOR_PICK',
            40: 'READY_FOR_DROP',
            50: 'TRANSPORT_TO_LOOP',
            99: 'FAULT'
        };

        return modeMap[state] !== undefined ? modeMap[state] : 'UNKNOWN (' + state + ')';
    };

    TcHmi.Functions.registerFunction('AisleModeConverter', AisleModeConverter);
})(TcHmi);