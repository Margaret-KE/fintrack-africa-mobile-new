// home.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
    const form = document.getElementById('contact-form') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

      console.log('Form submitted:', { name, email, message });

      alert('Thank you for your message, we will get back to you shortly!');

      form.reset();
    });
  }
}

