import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavigationComponent } from './navigation-bar/navigation/navigation.component';
import { FooterComponent } from './footer-bar/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [CommonModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent,FooterComponent]
})

export class AppComponent {
  title = 'angular-example';
}
