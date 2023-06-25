import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'dark-mode';
  color: any;
  letters: any;
  document: any;

  ondarkMode() {
    const element = document.body;
    element.classList.toggle('dark-mode');
  }
}
