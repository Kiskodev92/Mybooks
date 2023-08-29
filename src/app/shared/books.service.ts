import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public books: Book [];
  constructor() {
        this.books = [
      new Book("Juedo de tronos","Fantasia", "George R.R Martin", 15.99, "https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg", 1, 0 ),
      new Book("Memorias de Idhun","Fantasia", "Laura Gallego", 24.99, "https://www.lauragallego.com/wp-content/uploads/2004/09/idhun_portada.jpg", 2, 0 ),
      new Book("La cámara secreta","Fantasia", "JK Rowling", 17.99, "https://imagedelivery.net/QDkyDSqaJI1JEO0MqH_3SQ/60a007e7-31e9-439c-be44-10704c15c800/default", 3, 0 ),
      new Book("El hobbit","Fantasia", "Tolkien", 17.99, "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 4, 0 ),
    ]
  }

}