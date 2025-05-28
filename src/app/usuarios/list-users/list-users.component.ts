import { Component } from '@angular/core';
import CardUserComponent from '../card-user/card-user.component';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CardUserComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

}
