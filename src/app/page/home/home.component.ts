import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tituloPadre='Este es el titulo del padre';
  recibir(mensaje:string){
    this.tituloPadre=mensaje;
  }
  enviarHijo(){
    this.tituloPadre='Este es el titulo del padre'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
