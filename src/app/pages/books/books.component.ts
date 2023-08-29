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
  // addbook(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement, id_book:HTMLInputElement, id_user:HTMLInputElement){
  //   let newbook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value, id_book.valueAsNumber, id_user.valueAsNumber)
  //   console.log(newbook);
  //   this.books.push(newbook);
  // }
  cerrarX(num:number){
    this.books = this.books.filter(idb => idb.id_book !=num)
  }
}
