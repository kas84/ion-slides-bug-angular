import { Component } from '@angular/core'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}
  slideOpts = {
    loop:true,
    initialSlide: 1,
    speed: 400,
  }
  activate() {
    alert('clicked')
  }
}
