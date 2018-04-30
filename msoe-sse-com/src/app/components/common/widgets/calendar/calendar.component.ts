import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'sse-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  items: any;
  dataSource: any;
  currentDate: Date = new Date();

  constructor(private http: HttpClient) {
    this.getData();
  }

  // https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/Angular/Light/

  private getData() {
    const PUBLIC_KEY = 'AIzaSyAxMty8JrtiQ4UzVaqLZ9O_JyteZEGchMc';
    const CALENDAR_ID = '53b8ab382nvvs5hdg4l7e700i0@group.calendar.google.com';
    const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
      CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
    this.http.get(dataUrl).subscribe(
      (data: any) => {
        this.items = data.items;
        this.dataSource = new DataSource({
          store: new CustomStore({
            load: () => this.items
          })
        });
      },
      (error: any) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
