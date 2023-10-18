import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/user.service';
import { Answer } from 'src/app/models/answers'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books : Book[];

  constructor(public serviBook: BooksService, private toastr: ToastrService, private userService: UsuarioService){
    this.books = []
      this.serviBook.getAll(this.userService.user.Id_user).subscribe((data:Answer) =>{
      console.log(data)
      this.books = data.data;
    });
  }

  public send(
    title: string,
    type: string,
    author: string,
    price: number,
    photo: string,
    id_book: number
  ) {
    let newBook = new Book(title, type, author, price, photo, id_book);
  }

  cerrarX(num:number){
    this.books = this.books.filter(idb => idb.id_book !=num)
    this.serviBook.delete(num).subscribe((data:any) =>{
      console.log(data.data);
    });
  }
  busq(id_book:number){
    if(id_book){
       this.serviBook.getOne(id_book, this.userService.user.Id_user).subscribe((data:any) =>{
        console.log(data.data);
        this.books = [data.data];
       })
    }else{this.serviBook.getAll().subscribe((data:any)=>{
      console.log(data.data);
      this.books = data.data;
    })};
  }
}
