import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Datos} from '../datos';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  constructor(private fb:FormBuilder,private servicio:ServicioService) { }

  ngOnInit(): void {
  }

}
