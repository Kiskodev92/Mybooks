import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public books : Book[];

  constructor(private serviaddbook: BooksService, private router:Router){
    this.books= this.serviaddbook.getAll();
  }    
  newbook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number):void{
    this.serviaddbook.add(title, type, author, price, photo, id_book,id_user);
    this.router.navigateByUrl('/book');
  }
}
