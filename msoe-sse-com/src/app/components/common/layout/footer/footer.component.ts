import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sse-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit() { }

}
