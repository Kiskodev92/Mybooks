import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public books : Book[];

  constructor(private serviaddbook: BooksService){
    this.books= this.serviaddbook.books
  }    

  addbook(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement, id_book:HTMLInputElement, id_user:HTMLInputElement){
    let newbook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value, id_book.valueAsNumber, id_user.valueAsNumber)
    console.log(newbook);
    this.books.push(newbook);
  }
}
