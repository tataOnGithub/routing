import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
