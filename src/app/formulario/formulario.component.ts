import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Datos} from '../datos';
import {ServicioService} from '../servicio.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder,private servicio:ServicioService) { 
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descipcion:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  EnviarDatos(){
    let lista:Array<Datos>=[{
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value
     }
   ];

  }

}
