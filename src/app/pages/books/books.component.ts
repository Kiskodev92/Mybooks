import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books : Book[];

  constructor(private serviBook: BooksService){
    this.books = this.serviBook.books;
  }
  cerrarX(num:number){
    this.books = this.books.filter(idb => idb.id_book !=num)
    this.serviBook.delete(num);
  }
  busq(id_book:number){
    if(id_book){
      this.books = this.serviBook.getOne(id_book)
    }else{ this.books = this.serviBook.getAll()};
  }
}
