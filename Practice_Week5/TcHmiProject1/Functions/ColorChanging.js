// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.57/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ColorChanging(par1) {

                var myButton = TcHmi.Controls.get('TcHmiButton');
                myButton.setBackgroundColor({ "color": "Red" });
            }
            TcHmiProject1.ColorChanging = ColorChanging;
            // 1.12 BEST PRACTICE: Register INSIDE the project namespace definition
            TcHmi.Functions.registerFunctionEx('ColorChanging', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ColorChanging);
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
//TcHmi.Functions.registerFunctionEx('ColorChanging', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ColorChanging);
