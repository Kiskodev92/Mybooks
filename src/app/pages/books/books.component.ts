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
      new Book("Juedo de tronos","Fantasia", "George R.R Martin", 15.99, "https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg", 1, 0 ),
      new Book("Memorias de Idhun","Fantasia", "Laura Gallego", 24.99, "https://www.lauragallego.com/wp-content/uploads/2004/09/idhun_portada.jpg", 2, 0 ),
      new Book("La cámara secreta","Fantasia", "JK Rowling", 17.99, "https://imagedelivery.net/QDkyDSqaJI1JEO0MqH_3SQ/60a007e7-31e9-439c-be44-10704c15c800/default", 3, 0 ),
      new Book("El hobbit","Fantasia", "Tolkien", 17.99, "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 4, 0 ),
    ]
  }
  addbook(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement, id_book:HTMLInputElement, id_user:HTMLInputElement){
    let newbook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value, id_book.valueAsNumber, id_user.valueAsNumber)
    console.log(newbook);
    this.books.push(newbook);
  }
  cerrarX(num:number){
    this.books = this.books.filter(idb => idb.id_book !=num)

  }
}
