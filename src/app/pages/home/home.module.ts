import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, MainNewsComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
