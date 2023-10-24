import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public books : Book[];

  constructor(public servieditbook:BooksService, private http:HttpClient, public userService: UsuarioService,private router:Router){
  }
    editbook(title:string, type:string, author:string, price:number, photo:string, id_book:number){
      let bookedit = new Book(title, type, author, price, photo, id_book, this.userService.user.id_user);
      console.log(bookedit);
      this.router.navigateByUrl('/book')
    }
}
