/*
*  todolist.js
*
*  Компонент TODOlist
*/

import React from 'react';  // React requires
import axios from 'axios';  // Библиотека которая делает запросы AJAX, так как JQ - тут не работает корректно
import $     from 'jquery'; // Jquery

// Notifies PNotify
import              '../css/pnotify.custom.min.css';
import PNotify from '../js/pnotify.custom.min.js';


// Class(Component) todos
export default class Todos extends React.Component {

  /*
  *  VARS of CLASS
  *
  */
  constructor(props) {
      super(props);
      this.state = {
        task: '',                    // task - для привязи значений вводимых в поле
        // items: []  // items - массив в котором объекты вида Object{id:..., task:..., status:...}
        items: this.props.tasks
      };

      // Good Solution: Bind it in here!
      this.editInput         = this.editInput.bind(this)
      this.addTask           = this.addTask.bind(this)
      this._handleKeyPress   = this._handleKeyPress.bind(this)
      this.getMapTodos       = this.getMapTodos.bind(this)
      this.removeTask        = this.removeTask.bind(this)
   }


  /*
  *   Добавить задание
  *
  */
  addTask(event){

    //  console.log(this.state.task)

    // проверка на пустое поле
    if(this.state.task == ''){
        new PNotify({ title: 'Oh No!',    text: 'The "task" field is empty',   type: 'error'   });
        return;
    }

    // Возвращает случайное целое число между min (включительно) и max (не включая max)
    // Использование метода Math.round() даст вам неравномерное распределение!
    var max = 1000000,
        min = 1,
        random_id = Math.floor(Math.random() * (max - min)) + min;

     // создаем объект - задание, который вставим в наш массив заданий
     var new_task = {id: random_id, task: this.state.task, status: 0}

    // пушим в массив заданий
     var items  = this.state.items;
     items.push(new_task)

     // меняем наш массив
     this.setState({
       items: items
     });

      var postData = $.param( { task: new_task } );  // ИЛИ можно самому сделать строку вида : "name=Kraker&surname=Braker"

      axios.post(`/new`,  postData)
        .then(res => {
            // console.log(res.data[0]);
            // var data = res.data;
            // this.setState({ items: data });

           new PNotify({ title: 'Hell yeah!',    text: res.data.message,   type: 'success'   });
        });

      // обновить список ?
      // this.getTasks()
  }




   /*
   *   Удалить задание
   *
   */
   removeTask(index_elem, item_id){

      var answer = '';

      // console.log("Deleted " + index_elem)

       axios.post(`/del`,  "task_id=" + item_id)
         .then(res => {
           // const posts = res.data.data.children.map(obj => obj.data);
             // console.log(res.data[0]);
             answer = res.data.message;
            new PNotify({ title: 'Its gone!',    text: answer,   type: 'info'   });
        });

      var items = this.state.items;
      items.splice(index_elem, 1);  // index_elem - номер ел. в массиве, 1 - кол-во удаляемых ел.

      this.setState({
       items: items
      });
   }



  /*
  *   ЗАбрать из поля ввода текст
  *
  */
  editInput(event){
    //  alert(event.target.value)
     this.setState({task: event.target.value}); // поставим значение поля в нашу переменную
  }




   /*
   *  По нажатию на Ентер добавить задание
   *
   */
   _handleKeyPress(event) {
       if (event.key === 'Enter') {
         this.addTask();
       }
   }



   /*
   *  just test func
   *
   */
   clicked(){
       console.log(this.state.items)
   }



   /*
   *  Прокрутить и выдать html заданий
   *
   */
   getMapTodos(){

       var todos = this.state.items;                  // make todos local in render func
       todos     = todos.map(function(item, index){   // cycle
              return(
                  <li key={index} className="list-group-item">
                    {item.task}
                    <span onClick={this.removeTask.bind(null, index, item.id)} data-item_id={index}  className="btn btn-danger" style={{float: 'right', marginTop: '-6px'}}>Delete it</span>
                  </li>
              );
       }.bind(this));

      return todos;
   }


   /*
   *  Возьмем задачи из БД
   *  (Вот так было, сейчас через поле беруться задачи (#tasks), и передаються в компонент как "props")
   *
   */
  // getTasks(){
  //   var postData = $.param( {'get_tasks': true} );  // ИЛИ можно самому сделать строку вида : "name=Kraker&surname=Braker"
  //
  //    axios.post(`/core/tasker.class.php`,  postData)
  //      .then(res => {
  //        // const posts = res.data.data.children.map(obj => obj.data);
  //          // console.log(res.data[0]);
  //          var data = res.data;
  //          this.setState({ items: data });
  //     });
  // }


   /*
   *  Когда компонент установился сработает это встроенная ф-ция React'a
   *  Возьмем задачи из БД
   */
  //  componentDidMount() {
  //      this.getTasks()
  //  }




  /*
  *  Render HTML
  *
  */
  render()
   {

    var todos_tasks = this.getMapTodos()

    return (
      <div className="panel panel-default">

        {/* Поле ввода и кнопка добавления */}
        <div  className="panel-heading">

            <h3 onClick={this.clicked.bind(this)}  id="bashka">Its todoList</h3>  {/* Просто заголовок на котором онклик ф-ция */}

            <input className="form-control" value={this.state.term} onChange={this.editInput} onKeyPress={this._handleKeyPress}/>  {/* поле ввода задания */}

            <br />
            <button onClick={this.addTask} className="btn btn-success">Add it</button>  {/* кнопка добавления */}
        </div>

        {/* Вывод задач */}
        <div className="panel-body">
            <ul className="list-group">
               {todos_tasks} {/* Maped data */}
            </ul>
        </div>

      </div>
    );
  }
}
