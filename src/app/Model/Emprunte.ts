export interface Emprunte {
  id : number;
  bookId : number;
  studentId : number;
  dateEmprunte : Date;
  datePrevue : Date;
  dateRetour : Date;
  bookName : string;
  studentName : string;
}
