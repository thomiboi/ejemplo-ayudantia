import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  //Funcion para mostrar la alerta
  mostrarAlerta() {
    this.presentAlert(
      'Correo enviado',
      'Se ha enviado un correo a tu cuenta para restablecer tu contraseña'
    );
  }

  //Creacion de alerta
  async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }
}
