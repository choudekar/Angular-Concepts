import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {



  userName: string = 'Hari';
  password: string = 'Inital Password';


  constructor(private http: HttpClient) {
    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(

    //   {
    //     next: (data) => { console.log(data) },
    //     error: (error) => { console.log(error) },
    //     complete: () => { console.log("completed") }
    //   }
    //   // (data) => {
    //   //   console.log(data);
    //   // }
    // )

  }



  getUser() {
    let jwtToken = sessionStorage.getItem("jwt");
    let myHeaders = new HttpHeaders().append("Athentication", `Beare ${jwtToken}`)
    // return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users", {
    //   headers: myHeaders
    // });
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(delay(5000));
  }

  getProducts() {
    //return this.http.get<any[]>("assets/products.json");
    return this.http.get<any>("https://dummyjson.com/products");
  }

  getMovies() {
    return this.http.get<any[]>("assets/movies.json");
  }

  getTodos() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos");
  }

  postUser() {
    return this.http.post("https://jsonplaceholder.typicode.com/users", {
      name: "john deo",
      mailId: "johndeo@gmail.com"
    });
  }
}
