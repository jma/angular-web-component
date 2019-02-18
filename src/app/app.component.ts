import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ExternalComponent } from './external/external.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'element';
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(ExternalComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('app-external1', PopupElement);
  }
}
