import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animal-tarjeta',
  templateUrl: './animal-tarjeta.component.html',
  styleUrls: ['./animal-tarjeta.component.css']
})
export class AnimalTarjetaComponent implements OnInit {


  @Input() animal: any = {};
  @Input() index: number;

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  verAnimal(){
    this.router.navigate(['/animal', this.index]);
  }

}
