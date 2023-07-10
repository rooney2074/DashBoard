import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  About:string = ''

  onOptionSelected(option: string) {
    // Handle the selected option here
    console.log(option);
  }

}
