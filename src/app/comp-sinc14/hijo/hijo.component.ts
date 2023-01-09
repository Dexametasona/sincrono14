import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() tituloPadre='';
  tituloHijo='Este es el titulo del hijo'
  @Output() mensaje=new EventEmitter<string>;

  emitir(){
    this.mensaje.emit(this.tituloHijo)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
