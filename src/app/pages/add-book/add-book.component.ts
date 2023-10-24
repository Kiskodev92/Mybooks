import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { BooksComponent } from '../books/books.component';
import { UsuarioService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public serviaddbook:BooksService, public UserService: UsuarioService){}
  
  public send (title:string, type:string, author: string, price: number, photo:string){
  let newbook = new Book(title, type, author, price, photo, 0, this.UserService.user.id_user)
    this.serviaddbook.add(newbook).subscribe((data)=>{
      console.log(data);
     
    });
  }
}
