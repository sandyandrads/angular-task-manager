import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.modal';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
  //imports: [CardComponent] standalone components 
})
export class UserComponent {

  /*@Input( {required : true}) user!: {
    id: string;
    avatar: string;
    name: string;
  };*/

  @Input( {required: true} ) selected!: boolean;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
