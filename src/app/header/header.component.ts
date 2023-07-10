import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  show:any = ''

  @Output() toggleSidebarForMe: EventEmitter<any>= new EventEmitter();
  constructor(){}

  ngOnInit(): void {
    this.show = localStorage.getItem('Shows')
  }
  
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

}
