import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto0';
  constructor(){
    this.temporizador();
  }
   iniciar(ini:HTMLButtonElement, par:HTMLButtonElement){
    console.log("boton iniciar: "+ini);
    console.log("boton parar: "+ par)
    ini.disabled=true;
    par.disabled=false;
    this.temporizador();
  }
  parar(par:HTMLButtonElement, ini:HTMLButtonElement){
    console.log("boton iniciar: "+par);
    console.log("boton parar: "+ ini);
    ini.disabled=false;
    par.disabled=true;
    clearInterval(this.temp);
  }
  temp:NodeJS.Timeout | undefined;
  horas:number=0;
  minutos:number=0;
  segundos:number=0;
  milisegundos:number=0;
  temporizador(){
    this.temp=setInterval(()=>{
        this.horas=new Date().getHours();
        this.minutos=new Date().getMinutes();
        this.segundos=new Date().getSeconds();
        this.milisegundos=new Date().getMilliseconds();
    },100)
  }

}
