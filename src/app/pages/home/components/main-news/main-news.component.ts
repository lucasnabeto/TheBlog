import { Component, Input } from '@angular/core';
import { NewsContent } from 'src/app/data/fake-data';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
})
export class MainNewsComponent {
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

  descriptionLength: number = 360;
}
