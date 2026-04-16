// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var DiverterStateConverter = function (state) {
        // Using an object map for non-sequential enum values
        var stateMap = {
            0: 'IDLE',
            10: 'LIFTING',
            20: 'DIVERTING',
            30: 'LOWERING',
            40: 'DONE',
            90: 'FAULT',
           
        };
        
        // Return the mapped string, or the raw value if not found
        return stateMap[state] !== undefined ? stateMap[state] : 'UNKNOWN (' + state + ')';
    };

    TcHmi.Functions.registerFunction('DiverterStateConverter', DiverterStateConverter);
})(TcHmi);