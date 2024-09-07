import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  //Declarar el modelo
  login: any = {
    usuario: '',
    password: '',
  };

  //Variable para guardar campo vacio
  field: string = '';
  constructor(public router: Router, public toastController: ToastController) {}

  //Funcion para llevar informacion del modelo login al home.
  Ingresar() {
    if (this.validateModel(this.login)) {
      this.presentToast('bottom', 'Bienvenid@ ' + this.login.usuario);
      //Generate state
      let navigationExtras: NavigationExtras = {
        state: { login: this.login },
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.presentToast('middle', 'Falta el campo ' + this.field, 3000);
    }
  }

  //Generacion del present toast
  async presentToast(
    position: 'top' | 'middle' | 'bottom',
    msg: string,
    duration?: number
  ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration ? duration : 2000,
      position: position,
    });
    await toast.present();
  }

  //Validacion del modelo
  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value === '') {
        this.field = key;
        return false;
      }
    }
    return true;
  }
}
