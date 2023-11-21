import { Component } from '@angular/core';
import{Todo} from '../class/Todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  todovalue:String=""

  todoList:Todo[]=[

    {content:"todo1",
    value:false},
    {content:"todo2",
    value:false}
  ]
   finishList:Todo[]=[

   ]
  constructor(){}

  addTodo(){
    this.todoList.push({content:this.todovalue,value:false});
    this.todovalue=""
  }

    changeTodo(i:number){
     const item=this.todoList.splice(i,1);
     console.log(item)
     this.finishList.push(item[0])
    }

    changeFinishTodo(i:number){
      const item=this.finishList.splice(i,1);
      this.todoList.push(item[0])
    }
    deleteTodo(i:number){
      console.log("deletng element")
      this.todoList.splice(i,1)
   // this.todoList.filter(todo=>todo.i!==todo.i)
    }
  
}
