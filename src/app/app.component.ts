import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    { title: 'Prepare for aptitude'},
    { title: 'Prepare for maths'},
    { title: 'Prepare for tables'},
  ]

  addTodos(value:string){
    if(value ==="")
      this.todos;
    else
      this.todos.push({title:value}); 
  }

  deleteTodos(id:number){
    this.todos = this.todos.filter((value,i,clonedTodos)=> 
                                    clonedTodos.indexOf(value)!==id);
  }
}
