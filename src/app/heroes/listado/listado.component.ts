import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent{
  heroes:string[] = ['Spiderman', 'Hulk', 'Ironman','Thor', 'Capitán America'];
  heroeBorrado:string = '';

  borrarHeroe(){
    
    this.heroeBorrado =  this.heroes.pop() || '';
   
  }
}
