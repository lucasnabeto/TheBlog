import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NewsContent } from 'src/app/data/fake-data';

@Component({
  selector: 'app-news-summary',
  templateUrl: './news-summary.component.html',
  styleUrls: ['./news-summary.component.scss'],
})
export class NewsSummaryComponent {
  @Input()
  news: NewsContent = {
    author: '',
    coverImage: '',
    description: '',
    id: -1,
    link: '',
    publicationDate: '',
    subject: undefined,
    title: '',
  };
}
