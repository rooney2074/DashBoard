import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';
  sideBarOpen = true;

  ngOnInit(): void {
    
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
