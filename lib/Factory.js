let Container = require("./Container");
(function () {
  var Factory = (function () {
    return {
        // Return a new Container
      NewContainer: function(...elements){
          return Container(elements);
      },
      // Always Returns True
      True: function () {
        return true;
      },
      // Always Returns False;
      False: function () {
        return false;
      },
      // Prints to the Console
      Log: function (toLog) {
        console.log(toLog);
      },
      // Iterates through container elements and handles each element using a handler
      Loop: function (arr, handler) {
        arr.map(handler);
      },

      // Conditionals
      Conditional: function (condition, trueHandler, falseHandler) {
        if (eval(condition)) {
          trueHandler();
        } else {
          falseHandler();
        }
      },

      Operation: function (instruction) {
        instruction();
      },

      // Implementation of any operation using Factory
      Operation: function (instruction,arg) {
        instruction(arg);
      },

      // Overridden Operation which takes functionality as a string input
      Operation: function (instruction, arg, input) {
        if (input) {
          let fun = eval(instruction);
          fun(arg);
        }
      },
    };
  })();
  module.exports = Factory;
})();
