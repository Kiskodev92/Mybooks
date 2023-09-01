import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public books : Book[];

  constructor(private servieditbook:BooksService, private router: Router){
    // this.book= this.servieditbook.edit();
  }
    editbook(title:string, type:string, author:string, price:number, photo:string, id_book:number){
      this.servieditbook.edit(new Book(title, type, author, price, photo, id_book));
    }
  
}
