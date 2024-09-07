import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  login: any;

  constructor(
    public alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //Recibir la iformacion del login
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.login =
          this.router.getCurrentNavigation()?.extras?.state?.['login'];
        //Mostrar en consola
        console.log(this.login);
      }
    });
  }

  //Funcion para acceder a los componentes
  segmentChanged($event: any) {
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['/home/' + direccion]);
  }

  //Funcion para mostrar la alerta
  cerrarSesionAlert() {
    this.presentAlert('Cerrar sesion', 'Sesion cerrada correctamente');
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
