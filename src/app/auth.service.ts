import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // getStudents() {
  //   throw new Error('Method not implemented.');
  // }
  // getProductsMini() {
  //   throw new Error('Method not implemented.');
  // }
  // isLoggedIn() {
  // }
  constructor(private http:HttpClient) { }

  public save(products:Product):Observable<any>{
    return this.http.post<any>("http://localhost:5000/save",products)
  }  
  public update(Student_Id:number):Observable<any>{
    return this.http.put<any>("http://localhost:5000/update",{Student_Id})
  }  
  public deleteStudent(Student_Id:number):Observable<any>{
    return this.http.post<any>("http://localhost:5000/delete",{Student_Id})
  }

  public shows(Student_Id:any):Observable<any>{

    return this.http.post<any>("http://localhost:5000/shows",{Student_Id})
  }

  updateUser(data:any){
    return this.http.post<any>("http://localhost:5000/updateStudent",data)
  }

  public show():Observable<any>{
    return this.http.get<any>("http://localhost:5000/show")
  }
   
  public login(email:string,password:string):Observable<any>{
    return this.http.post<any>("http://localhost:5000/login",{email,password})
  }
  public uploadimg(image:any):Observable<any>{
    return this.http.post<any>("http://localhost:5000/upload",image)
  }
  
  public uploadimage(image:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/updateimages",image)
  }

  public signup(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:5000/register",user)
  }
  handleError(error:Response){

  }
}
