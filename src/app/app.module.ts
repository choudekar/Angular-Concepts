import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChildComponent } from './child/child.component';
import { MovieComponent } from './movie/movie.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component'
import { AppInterceptor } from './app.interceptor';
import { FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormspracticeComponent } from './formspractice/formspractice.component';
import { Router, RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UseridComponent } from './userid/userid.component';
import { PracticeComponent } from './practice/practice.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TodooComponent } from './todoo/todoo.component';
import { TaskComponent } from './task/task.component';
import { TodolistComponent } from './todolist/todolist.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { SharedModule } from './shared.module';
import { PipesComponent } from './pipes/pipes.component';
import { KelvinPipe } from './kelvin.pipe';
import { CustomPipe } from './custom.pipe';
import { SearchingPipe } from './searching.pipe';
import { DirectivesComponent } from './directives/directives.component';

import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ChildComponent,
    MovieComponent,
    ProductComponent,
    LoginComponent,
    TodoComponent,
    FormspracticeComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    RoutingComponent,
    HomeComponent,
    UserComponent,
    NotfoundComponent,
    UseridComponent,
    PracticeComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    TodooComponent,
    TaskComponent,
    TodolistComponent,
    QuizAppComponent,
    PipesComponent,
    KelvinPipe,
    CustomPipe,
    SearchingPipe,
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, RouterLink,
    MatToolbarModule, MatButtonModule, MatInputModule, ReactiveFormsModule, SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
