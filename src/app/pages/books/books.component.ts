import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books : Book[];

  constructor(){
    this.books = [
      new Book("Juedo de tronos","Fantasia", "George R.R Martin", 15.99, "https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg", 0, 0 ),
      new Book("Memorias de Idhun","Fantasia", "Laura Gallego", 24.99, "https://www.lauragallego.com/wp-content/uploads/2004/09/idhun_portada.jpg", 0, 0 ),
      new Book("Harry Potter y la cámara secreta","Fantasia", "JK Rowling", 17.99, "https://static.wikia.nocookie.net/esharrypotter/images/0/04/HP2_portada_espa%C3%B1ol_de_bolsillo_2020.jpg/revision/latest?cb=20200606233251", 0, 0 ),
      new Book("El hobbit","Fantasia", "Tolkien", 17.99, "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 0, 0 ),
    ]
  }
}
