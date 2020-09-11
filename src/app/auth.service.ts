


export class AuthService{
  LoggedIn = true;

 isAuthenticated(){
     const promise = new Promise(
         (resolve,reject)=>{
             setTimeout(()=>{
                 resolve(this.LoggedIn);
             },1)
         }
     )
     return promise;
 }

     
  login(){
  this.LoggedIn = true;
  }
  logout(){
      this.LoggedIn = false;
  }
} 