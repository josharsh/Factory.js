(function () {
  let Container =  (elements) => {
    arr=elements;
    return {
      view: function(){
        return arr;
      },
      insert: function (val) {
        arr.push(val);
        return arr;
      },
      delete: function () {
        arr.pop();
        return arr;
      },
    };
  };
  module.exports = Container;
})();
