// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.57/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {
    var Functions;
    (function ( Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function FunctionJS1(par1) {

                var myButton = TcHmi.Controls.get('TcHmiButton');
                myButton.setText('Text changed');
            }
            TcHmiProject1.FunctionJS1 = FunctionJS1;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.FunctionJS1);
