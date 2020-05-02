import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { AnimalesService } from './servicios/animales.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTarjetaComponent } from './components/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//DECLARATIONS: OBLIGATORIO EL REGISTRO DE COMPONENTES
//IMPORTS: OBLIGATORIO EL REGISTRO DE MODULES
//PROVIDERS: NO ES OBLIGATORIO REGISTRAR LOS SERVICES


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalComponent,
    AnimalTarjetaComponent,
    AnimalesComponent,
    BuscadorComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AnimalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
