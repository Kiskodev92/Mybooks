import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
private url:string = 'http://localhost:3000/books'
private url2:string ='http://localhost:3000/booksid'


  public books: Book [];
  constructor(private http: HttpClient,  private userService: UsuarioService) {
        this.books = [
      // new Book("Juedo de tronos","Fantasia", "George R.R Martin", 15.99, "https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg", 1, 0 ),
      // new Book("Memorias de Idhun","Fantasia", "Laura Gallego", 24.99, "https://www.lauragallego.com/wp-content/uploads/2004/09/idhun_portada.jpg", 2, 0 ),
      // new Book("La cámara secreta","Fantasia", "JK Rowling", 17.99, "https://imagedelivery.net/QDkyDSqaJI1JEO0MqH_3SQ/60a007e7-31e9-439c-be44-10704c15c800/default", 3, 0 ),
      // new Book("El hobbit","Fantasia", "Tolkien", 17.99, "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 4, 0 ),
    ]
  }
  getAll(){
   
    return this.http.get(`${this.url}?id=${this.userService.user.id_user}`)
    
  };

  getOne(id_book:number){
    return this.http.get(`${this.url2}?id_user=${id_book}&id_book=${this.userService.user.id_user}`)
  };

  add(book:Book){
    
    return this.http.post(this.url, book)
  };

  
  edit(book:Book){
    return this.http.put(this.url, book);
  }


  delete(idnum:number){
    return this.http.request('delete' , this.url, { body: { id:idnum }})
  }
}
