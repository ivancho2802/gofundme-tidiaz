import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gofundme-tidiaz';
  data

  constructor(
    private http: HttpClientModule
  ){

  }

  ngOnInit(){
    this.http.get('/api/gofundme')
    .subscribe((data:any)=>{
      this.data = data
    })
  }
}
