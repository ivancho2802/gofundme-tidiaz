//bitacora


//login google
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


constructor(
    private afauth: AngularFireAuth
){}
acces

async loginGoogle(){
    try{
        this.acces = this.afauth.singInWithPopup(new auth.GoogleAuthProvider())
    }catch(err=>{
        cosole.log("err")
        cosole.log(err)
    })
} 