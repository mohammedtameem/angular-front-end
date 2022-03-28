import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../services/booklist.service';
import { Booklist } from './booklist';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  bookList:Booklist[] =[];
  constructor(private service: BooklistService) { }

  ngOnInit(): void
  {
    this.bookList =  this.service.getBookList();


  }

}
