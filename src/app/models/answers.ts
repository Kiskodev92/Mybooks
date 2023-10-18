import { Book } from "./book";
import { User } from "./user";


export class Answer {

  constructor(public error: boolean,
              public codigo: number,
              public mensaje: string,
              public data: Book[],
              public result : User[]){}
}