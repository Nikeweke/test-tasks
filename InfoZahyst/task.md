# Backend Тестове завдання

Створити можливість описувати довільні сутності з атрибутами та валідацією для цих атрибутів (відношення між атрибутами і сутностями many-to-many). 
Описання повинно бути реалізовано за допомогою DSL або конфігураційного об'єкту (наприклад yaml). 
Реалізувати CRUD по цим об'єктам через REST.

Наприклад, описання сутності `Person` з атрибутами може виглядати у DSL так

```js
define('attribute', 'firstName')
  .validation({ required: true })
define('attribute', 'lastName')
  .validation({ required: true })
define('attribute', 'age')
  .type('int')
  .validation({ min: 1, max: 120 })
define('attribute', 'email')
  .validation({ email: true })

define('entity', 'Person')
  .has('firstName')
  .has('lastName')
  .has('age')
  .hasMany('email') // може мати багато емейлів
```

CRUD по сутності може виглядати так:

```js
const person = new Entity('Person', {
  firstName: 'John',
  lastName: 'Doe',
  age: 10,
  email: [ // only unique emails
    'john.doe@example.come',
    'johnny@gmail.come'
  ]
})

person.validate() // validates all attributes if something is wrong throws exception
person.save() // saves person into db

// Update
person.firstName = 'Bred'
person.save()

// Delete
Entity.destroy('Person', personId)

// Read
Entity.findById('Person', personId)
Entity.findAll('Person')
```

## Основні вимоги

1. Використовувати SQL базу данних (ми використовуємо PostgreSQL)
2. Повинна бути можливість змінювати схему сутностей без зміни схеми бази данних (реалізувати спрощений варіант:
   грубо флов такий - почистили базу, засідували структуру через DSL,   
   хочемо змінити DSL - чистимо базу і знову сідуємо)
3. Використання шаблонів програмування для реалізації задачі
4. Якщо передавати атрибути, які не існують в описанні сутності викидується помилка
5. Правильно обробляти помилки, відділяти помилки клієнта і сервера 
6. REST API повинен слідувати best practices включаючи правильну видачу статус кодів

## Бонус (можна усно)

1. Взяти до уваги вирішення конфліктів, коли АРІ користується декілька людей одночасно і пробують оновити одну і ту ж сутність приблизно в той самий час
2. Зберігати історію по змінах сутностей
3. Мати можливість отримати стан довільної сутності/сутностей за вказаний проміжок часу
4. Повинна бути реалізована валідація атрибутів