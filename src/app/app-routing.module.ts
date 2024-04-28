import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'footer-component', component: FooterComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
