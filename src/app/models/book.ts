export class Book {
        public title: string;
        public type: string;
        public author: string;
        public price: number;
        public photo: string ;
        public id_book?: number;
        public Id_user?: number;

        constructor(title:string, type:string, author: string, price: number, photo:string, id_book:number = 0, Id_user:number = 0){

            this.id_book= id_book;
            this.Id_user = Id_user;
            this.title = title;
            this.type = type;
            this.author = author;
            this.price = price;
            this.photo = photo;
        }
}
