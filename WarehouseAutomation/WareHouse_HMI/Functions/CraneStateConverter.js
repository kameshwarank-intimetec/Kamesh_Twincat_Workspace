// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var CraneStateConverter = function (state) {
        var stateMap = {
            0: 'IDLE',
            10: 'MOVING_TO_PICK',
            15 : 'READY_TO_PICK',
            20: 'PICKING',
            25 : 'READY_TO_MOVE',
            30: 'MOVING_TO_PLACE',
            40: 'PLACING',
            50: 'RETURNING_HOME',
            99: 'FAULT'
        };

        return stateMap[state] !== undefined ? stateMap[state] : 'UNKNOWN (' + state + ')';
    };

    TcHmi.Functions.registerFunction('CraneStateConverter', CraneStateConverter);
})(TcHmi);