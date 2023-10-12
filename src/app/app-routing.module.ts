import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    title: "defaultLayout",
    children: [
      {
        path: "",
        component: HomeComponent,
        title: "home"
      },
      {
        path: "detail",
        component: DetailComponent,
        title: "detail"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
