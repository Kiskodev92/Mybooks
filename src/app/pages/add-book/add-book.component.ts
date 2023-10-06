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
    this.books= this.serviaddbook.books;
  }    
  newbook(title:string, type:string, author:string, price:number, photo:string, id_book:number, ):void{
    this.serviaddbook.add(new Book(title, type, author, price, photo, id_book)).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
