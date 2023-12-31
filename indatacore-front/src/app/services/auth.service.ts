import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean=false;
  roles:any;
  accessToken!:any;
  username:any;
  constructor(private http:HttpClient,private router:Router) { }
  public login(username:string, password:string){
let options={
  headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
}
let params=new HttpParams()
  .set("email", username).set("password", password);
return this.http.post("http://localhost:8888/auth/login", params, options)
  }

  public register(data:any):Observable<any>{
    return this.http.post("http://localhost:8888/auth/register", data)
  }

  loadProfile(data: any) {
    this.isAuthenticated=true;
   this.accessToken=data['access-token'];
   let decodedJwt:any=jwtDecode(this.accessToken);
   this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;
    window.localStorage.setItem("jwt-token", this.accessToken);
  }

  logout() {
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
    window.localStorage.removeItem("jwt-token");
    this.router.navigateByUrl("/login");
  }

  loadJwtTokenFromLocalStorage() {
    let token=window.localStorage.getItem("jwt-token");
    if(token){
      this.loadProfile({"access-token": token})
      this.router.navigateByUrl("/");
    }
  }

  
}

