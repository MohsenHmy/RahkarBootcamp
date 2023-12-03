import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  @Output() listChange = new EventEmitter();
  field = ''
  toDoList: string[]=[]
  doing: string=''
  isDone: boolean = false
  onDoAdded(e:any){
    this.doing= e.target.value
  }

  onClick(){
    this.toDoList.push(this.doing)
    this.listChange.emit(this.doing)
  }

  removeItem(item: string){
    const index = this.toDoList.indexOf(item);
    if(index != -1){
      this.toDoList.splice(index, 1)
    }
  }

  doneItem(){
    this.isDone = !this.isDone
  }

}
