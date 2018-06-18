import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/Router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomesectionComponent } from './homesection/homesection.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes : Routes = 
[{
  path : 'newpath',
  component : DashboardComponent
},

{
  path : 'about',
  component : AboutComponent
},

{
  path : 'home',
  component : HomesectionComponent,
  
},
{
  path : '',
  component : LoginComponent,
  pathMatch: "full"
}


];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    HomesectionComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
