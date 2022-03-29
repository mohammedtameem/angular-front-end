import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booklist } from '../booklist/booklist';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private http:HttpClient) {

   }

  getBookList()
  {
    return this.http.get("https://api.covidtracking.com/v1/us/current.json");
  }
}
