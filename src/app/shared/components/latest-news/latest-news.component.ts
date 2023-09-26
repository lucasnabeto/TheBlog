import { Component } from '@angular/core';
import { NewsContent, fakeData } from 'src/app/data/fake-data';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent {
  latestNews: NewsContent[] = fakeData
    .filter((news) => news.mainNews !== true)
    .sort((news1, news2) =>
      news1.publicationDate < news2.publicationDate
        ? 1
        : news2.publicationDate < news1.publicationDate
        ? -1
        : 0
    );
}
