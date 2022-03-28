import { Injectable } from '@angular/core';
import { Booklist } from '../booklist/booklist';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {


  bookList:Booklist[] = [

    new Booklist(1,"andrew","java programming",1000),
    new Booklist(2,"john","angular",2000),
    new Booklist(3,"mark","reactjs",3000)
  ];

  constructor() {

   }

  getBookList()
  {
    return this.bookList;
  }
}
