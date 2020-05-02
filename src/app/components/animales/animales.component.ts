import { Component, OnInit } from '@angular/core';
import { AnimalesService, Animal } from '../../servicios/animales.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styles: []
})
export class AnimalesComponent implements OnInit {

  animales: Animal[] = [];

  constructor(private _animalesService: AnimalesService, private router: Router) { }

  ngOnInit() {
    this.animales = this._animalesService.getAnimales();
  }

  verAnimal(idx:number){
    this.router.navigate(['/animal', idx]);
  }

}
