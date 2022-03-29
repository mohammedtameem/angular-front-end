import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../services/booklist.service';
import { Booklist } from './booklist';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  users:any;
  constructor(private service: BooklistService) { }

  ngOnInit(): void
  {
    let response =  this.service.getBookList();
    response.subscribe((data) => this.users = data);



  }

}
