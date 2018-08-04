### Javascript task

**1.** Есть массив [10, 20, 30].
Поменяйте местами 0 и 1 элементы, чтобы получилось [20, 10, 30]

```js
const list = [10, 20, 30];
function changeElements(list) {
    // your code
}
changeElements(list);
console.log(list); // [20, 10, 30];
```

**2.** Есть массив [30, -5, 0, 10, 5].
Напишите функцию сортировки от наименьшего к наибольшему, результат [-5, 0, 5, 10, 30] . Не используйте стандартную функцию sort.
```js
const list = [30, -5, 0, 10, 5];
function mySort(list) {
    // your code
}
mySort(list);
console.log(list); // [-5, 0, 5, 10, 30]
```

**3.** Напишите свою реализацию bind.
```js
var func1 = function(message) {
    this(message);
}
var func2 = func1.bind(alert);
func2('Test'); // alert 'Test'
function myBind(func, context) {
    // your code
}
var func3 = myBind(func1, alert);
func3('Test'); // alert 'Test'
```
