import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NewsSummaryComponent } from './components/news-summary/news-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, LatestNewsComponent, NewsSummaryComponent],
  exports: [MenuComponent, LatestNewsComponent, NewsSummaryComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
