import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  
})
export class AppComponent {
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrestablishment: string [];

  ngOnInit () {
    this.httpService.get('./assets/establishment.json').subscribe(
      data => {
        this.arrestablishment = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrestablishment[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    }
  }