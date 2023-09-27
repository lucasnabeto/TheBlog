import { Component } from '@angular/core';
import { NewsContent, fakeData } from 'src/app/data/fake-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mainNews: NewsContent = fakeData
    .filter((news) => news.mainNews === true)
    .sort((news1, news2) =>
      news1.publicationDate < news2.publicationDate
        ? 1
        : news2.publicationDate < news1.publicationDate
        ? -1
        : 0
    )[0];
}
