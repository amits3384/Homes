import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { HomeStartComponent } from "../home/home-start/home-start.component";
import { HomeEditComponent } from "../home/home-edit/home-edit.component";
import { HomeDetailComponent } from "../home/home-detail/home-detail.component";

const appRoutes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: '', component: HomeStartComponent},
        {path: 'new', component: HomeEditComponent},
        {path: ':id', component: HomeDetailComponent},
        {path: ':id/edit', component: HomeEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}