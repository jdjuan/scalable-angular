import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data$: Observable<any>;

  constructor(private http: HttpClient) {
    this.data$ = http.get('https://yesno.wtf/api');
  }
}
