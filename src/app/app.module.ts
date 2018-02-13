import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { HomeEditComponent } from './home/home-edit/home-edit.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeItemComponent } from './home/home-list/home-item/home-item.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { DropdownDirective } from './home/dropdown.directive';
import { HomeService } from './services/home.service';
import { AppRoutingModule } from './routes/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeEditComponent,
    HomeListComponent,
    HomeItemComponent,
    HomeStartComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
