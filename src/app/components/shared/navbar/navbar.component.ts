import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //para navegar a una ruta desde un componente

//navigate = doctor/1 (rutas dinámicas)
//navigateByUrl = home (rutas estáticas)

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarAnimal(termino:string){
      console.log(termino);
      this.router.navigate(['/buscar', termino]);
  }

}
