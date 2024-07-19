import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent {
  userid: string | null = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get("id"));

    this.route.paramMap.subscribe(params => {
      console.log("From sub", params.get('id'));
      this.userid = params.get('id');

    })
  }

}
