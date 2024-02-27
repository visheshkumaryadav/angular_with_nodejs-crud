import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToastModule } from 'primeng/toast';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
// import { UserListComponent } from './user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule,DataViewLayoutOptions } from 'primeng/dataview';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagModule } from 'primeng/tag';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    PageNotFoundComponent,
    // UserListComponent
  ],
  imports: [
    BrowserModule,PanelModule,
    AppRoutingModule,DropdownModule,
    ToastModule,InputTextModule,
    CardModule,RippleModule,
    HttpClientModule, 
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToolbarModule,DataViewModule,
    RatingModule,
    
    ButtonModule,
    MatToolbarModule,
    MatIconModule,
    TableModule,MessageModule,
    TreeTableModule,MessagesModule,
    DialogModule,ConfirmDialogModule,ConfirmPopupModule,TagModule
  ],
  providers: [DataViewLayoutOptions],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
