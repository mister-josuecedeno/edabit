// not my solution

function Stack() {
  let data = [];
  this.push = function (item) {
    data.push(item);
  };
  this.isEmpty = function () {
    return !data.length;
  };
  this.pop = function () {
    return data.pop();
  };
  this.peek = function () {
    return data[data.length - 1];
  };
  this.size = function () {
    return data.length;
  };
}
