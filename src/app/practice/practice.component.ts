
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Movie } from '../Models/movie';
import { Product } from '../Models/product';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  totalProduct: any[] = []
  currentData: any[] = []
  staringPostion = 0
  endingPostion = 10

  title = 'angular15';
  msg = "Hello Todo"
  imgUrl: string = "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1275957%2Fretina_500x200_cover-top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png"
  isDisable: boolean = false;
  name: string = 'Hii angular';
  headingContent: string = "Level 1 heading";
  isLoggedIn: boolean = false;
  userName: string = "";
  password: string = "";
  passwordMatching: boolean = true;
  isChecked: boolean = false;

  isButtonDisabled: boolean = false;



  oldmovies: string[] = ["RRR", "BB2", "Usthad"];

  users: string[] = ["john", "deo", "raj"]

  serverUsers: any[] = [];
  serverProducts: { limit: number, products: any[] } = { limit: 0, products: [] };
  jsonMovies: any[] = [];
  errorGettingUsers: boolean = false;
  appService: AppService = inject(AppService);

  constructor(private http: HttpClient, private router: Router) {

    // console.log(sampleProductData);
    this.totalProduct = this.products;
    // console.log(this.totalProduct);
    this.currentData = this.totalProduct.slice(this.staringPostion, this.endingPostion)

    this.appService.getUser().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.errorGettingUsers = false;
          this.serverUsers = data;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error)
          this.errorGettingUsers = true;
        },
        complete: () => {
          console.log("completed");
        }
      },
    ),


      this.appService.getMovies().subscribe(
        {
          next: (data) => {
            console.log(data);
            this.jsonMovies = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log("completed");
          }
        }
      ),
      this.appService.getProducts().subscribe(
        {
          next: (data) => {
            console.log(data);
            this.serverProducts = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log("products completed");
          }
        }
      ),


      this.appService.postUser().subscribe((data) => { console.log(data) });
  }

  @ViewChild("heading") hOneElement: ElementRef | undefined;
  @ViewChild("appChild") appChild: ElementRef | undefined;


  logTitle() {
    console.log(this.title);

  }
  passwordCheck(pw: string, cpw: string) {
    if (pw == cpw) {
      this.passwordMatching = true;

    } else {
      this.passwordMatching = false;
    }
  }
  loginform2(form: NgForm) {

    console.log(form);

  }
  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }





  movies: Movie[] = [
    {
      "id": "1",
      "title": "Lord of the Rings",
      "year": 2001,
      "genre": "Fantasy",
      "img": "LOTR.jpg",
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from  "
    },
    {
      "id": "2",
      "title": "Harry Potter",
      "year": 2001,
      "genre": "Fantasy",
      "img": "HarryPotter.jpg",
      "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts"
    },
    {
      "id": "3",
      "title": "The Hobbit",
      "year": 2014,
      "genre": "Fantasy",
      "img": "Hobbit.jpg",
      "description": "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling "
    },
    {
      "id": "4",
      "title": "The Mummy",
      "year": 1999,
      "genre": "Adventure",
      "img": "Mummy.jpg",
      "description": "At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally "
    },
    {
      "id": "5",
      "title": "Jurassic Park",
      "year": 1993,
      "genre": "Thriller",
      "img": "Jurassic.jpg",
      "description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
    },
    {
      "id": "6",
      "title": "The Matrix",
      "year": 1999,
      "genre": "Action",
      "img": "Matrix.jpg",
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. "
    },
    {
      "id": "7",
      "title": "Interstellar",
      "year": 2012,
      "genre": "Action",
      "img": "Interstellar.jpg",
      "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraf"
    },
    {
      "id": "8",
      "title": "Pirates of the Caribbean",
      "year": 2003,
      "genre": "Fantasy",
      "img": "Pirates.jpg",
      "description": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization."
    }
  ]

  products: Product[] = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",

      "images":
        "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/1/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      // ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",
      "images": "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/2/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      // ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": "samsung.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/3/1.jpg"
      // ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": "oppo.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/4/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      // ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": "huawei-p30-pro-1.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/5/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/3.jpg"
      // ]
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": "macbook-pro-14-m2-max.jpg"

      // "images": [
      //   "https://cdn.dummyjson.com/product-images/6/1.png",
      //   "https://cdn.dummyjson.com/product-images/6/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/6/3.png",
      //   "https://cdn.dummyjson.com/product-images/6/4.jpg"
      // ]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": "Samsung_Galaxy_Book_2_Pro_revi_0_1200x768.jpeg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/7/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      // ]
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": "Microsoft-Surface-Laptop-4.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/8/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      // ]
    },
    {
      "id": 9,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",

      "images":
        "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/1/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      // ]
    },
    {
      "id": 10,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",
      "images": "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/2/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      // ]
    },
    {
      "id": 11,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": "samsung.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/3/1.jpg"
      // ]
    },
    {
      "id": 12,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": "oppo.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/4/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      // ]
    },
    {
      "id": 13,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": "huawei-p30-pro-1.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/5/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/3.jpg"
      // ]
    },
    {
      "id": 13,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": "macbook-pro-14-m2-max.jpg"

      // "images": [
      //   "https://cdn.dummyjson.com/product-images/6/1.png",
      //   "https://cdn.dummyjson.com/product-images/6/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/6/3.png",
      //   "https://cdn.dummyjson.com/product-images/6/4.jpg"
      // ]
    },
    {
      "id": 14,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": "Samsung_Galaxy_Book_2_Pro_revi_0_1200x768.jpeg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/7/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      // ]
    },
    {
      "id": 15,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": "Microsoft-Surface-Laptop-4.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/8/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      // ]
    },
    {
      "id": 16,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",

      "images":
        "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/1/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      // ]
    },
    {
      "id": 17,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",
      "images": "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/2/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      // ]
    },
    {
      "id": 18,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": "samsung.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/3/1.jpg"
      // ]
    },
    {
      "id": 19,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": "oppo.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/4/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      // ]
    },
    {
      "id": 20,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": "huawei-p30-pro-1.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/5/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/3.jpg"
      // ]
    },
    {
      "id": 21,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": "macbook-pro-14-m2-max.jpg"

      // "images": [
      //   "https://cdn.dummyjson.com/product-images/6/1.png",
      //   "https://cdn.dummyjson.com/product-images/6/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/6/3.png",
      //   "https://cdn.dummyjson.com/product-images/6/4.jpg"
      // ]
    },
    {
      "id": 22,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": "Samsung_Galaxy_Book_2_Pro_revi_0_1200x768.jpeg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/7/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      // ]
    },
    {
      "id": 23,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": "Microsoft-Surface-Laptop-4.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/8/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      // ]
    },
    {
      "id": 24,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",

      "images":
        "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/1/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      // ]
    },
    {
      "id": 25,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",
      "images": "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/2/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      // ]
    },
    {
      "id": 26,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": "samsung.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/3/1.jpg"
      // ]
    },
    {
      "id": 27,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": "oppo.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/4/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      // ]
    },
    {
      "id": 28,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": "huawei-p30-pro-1.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/5/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/5/3.jpg"
      // ]
    },
    {
      "id": 29,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": "macbook-pro-14-m2-max.jpg"

      // "images": [
      //   "https://cdn.dummyjson.com/product-images/6/1.png",
      //   "https://cdn.dummyjson.com/product-images/6/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/6/3.png",
      //   "https://cdn.dummyjson.com/product-images/6/4.jpg"
      // ]
    },
    {
      "id": 30,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": "Samsung_Galaxy_Book_2_Pro_revi_0_1200x768.jpeg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/7/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      // ]
    },
    {
      "id": 31,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": "Microsoft-Surface-Laptop-4.jpg"
      // "images": [
      //   "https://cdn.dummyjson.com/product-images/8/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      // ]
    },
    {
      "id": 32,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",

      "images":
        "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/1/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/4.jpg",
      //   "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      // ]
    },
    {
      "id": 33,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "apple-iphone-14-pro-max-1.jpg",
      "images": "apple-iphone-14-pro-max-1.jpg",


      // "images": [
      //   "https://cdn.dummyjson.com/product-images/2/1.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/2.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/3.jpg",
      //   "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      // ]
    }

  ]



  // constructor(public appService: AppService) {
  //   console.log(this.appService.userName);

  //   console.log("constructor in app component");

  // }

  ngOnInit(): void {
    console.log("ngOninit ");

  }

  changeName(): void {
    if (this.name == 'Hii angular') {
      this.name = 'Hello Angular'
    } else {
      this.name = 'Hii angular'
    }

  }

  handleClick() {
    if (!this.isDisable) {
      this.isDisable = true
    }

    else {
      this.isDisable = false;
    }
  }
  handleClick2(event: MouseEvent) {
    if (this.isDisable == true) {
      this.isDisable = false
    }
  }

  handlleCopy() {
    console.log("User copied something");

  }

  getHeading(h: HTMLHeadingElement) {
    console.log(h.textContent);
    //h.textContent = "modified text 1"
    this.headingContent = "modified text 2"
  }

  getFullName(val: string) {
    this.userName = val;
    console.log(val);

  }

  logIn() {
    this.isLoggedIn = true;

  }
  logOut() {
    this.isLoggedIn = false;
  }

  // ngAfterViewInit() {
  //   console.log(this.appChild?.nativeElement.textContent);
  //   console.log(this.hOneElement?.nativeElement.headingContent);
  // }

  //   getFullName2(userName: string) {
  //     this.userName = userName;
  //  }
  getPassword(password: string) {
    this.password = password
  }

  onSubmit(form: NgForm) {
    console.log(form);

  }

  onChangeNextPage() {
    this.staringPostion += 10
    this.endingPostion += 10
    this.currentData = this.totalProduct.slice(this.staringPostion, this.endingPostion)
  }
  ondecreaseThePages() {
    this.staringPostion -= 10
    this.endingPostion -= 10
    this.currentData = this.totalProduct.slice(this.staringPostion, this.endingPostion)
  }

  disableNextButton() {
    if (this.endingPostion > this.totalProduct.length) {
      return true
    }
    return false
  }
  perviweEnding() {
    if (this.staringPostion === 0) {
      return true
    }
    return false
  }


}
