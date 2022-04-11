import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../models/User';

@Component({
  selector: 'angapp-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: User
  @Output() deleteEvent= new EventEmitter()
  @Input() index= 0;
  callParent(){
    this.deleteEvent.emit(this.index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}