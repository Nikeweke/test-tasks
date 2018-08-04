/*
*  Take 10 minutes
*
*/ 

// 1 replace
const list = [10, 20, 30];
function changeElements(list) {
  let temp = list[1]
  list[1] = list[0]
  list[0] = temp 
}
changeElements(list);
console.log(list); // [20, 10, 30];


// 2 sort
const list2 = [30, -5, 0, 10, 5];
function mySort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  }
  
mySort(list2);
console.log(list2); // [-5, 0, 5, 10, 30]


// 3 bind (run it in html file)
var func1 = function(message) {
    this(message);
}

var func2 = func1.bind(alert);
func2('Test'); // alert 'Test'

function myBind(func, context) {
  this.call(func, context)
}

var func3 = myBind(func1, alert);
func3('Test'); // alert 'Test'
