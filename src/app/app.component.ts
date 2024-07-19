import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { Movie } from './Models/movie';
import { Product } from './Models/product';
import { AppService } from './app.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoserviceService } from './todoservice.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ` <h2 class="text-4xl">inside template {{name}}</h2>
  // <button class="bg-lime-600 rounded-md ml-2" (click)="changeName()">changeName</button> `,
  styleUrls: ['./app.component.css'],
  //standalone: true
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class AppComponent {



}


