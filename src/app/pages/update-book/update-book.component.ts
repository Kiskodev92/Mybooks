import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public books : Book[];

  constructor(public servieditbook:BooksService, private toastr: ToastrService, private http:HttpClient, public userService: UsuarioService){
  }
    editbook(title:string, type:string, author:string, price:number, photo:string, id_book:number){
      let bookedit = new Book(title, type, author, price, photo, id_book, this.userService.user.Id_user);
      console.log(bookedit);
      
      this.servieditbook.edit(bookedit).subscribe((data) =>{
        this.toastr.success("La referencia" + " " + bookedit.id_book + "fue modificada")
      });
    }
}
