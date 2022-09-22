import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  firebasecodeError(code: string){

    switch(code){
      case FirebaseCodeErrorEnum.EmailAlreadyinUse:
        return 'el Usuario ya existe'

      case FirebaseCodeErrorEnum.WeakPassword:
        return 'la Constraseña es demasiado corta';

      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'email invalido';

      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';

      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';

      default:
        return 'error desconocido';

        
    }

  }

}
