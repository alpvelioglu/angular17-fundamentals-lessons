import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" name="title" [(ngModel)]="titleText" />
        <!-- add the input -->

        <label for="body">Post Body</label>
        <textarea id="body" name="body" [(ngModel)]="bodyText"></textarea>
        <!-- add the textarea -->
      </section>
      <section>
        <p>{{titleText}}</p>
        <p>{{bodyText}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  titleText = "";
  bodyText = "";
}
