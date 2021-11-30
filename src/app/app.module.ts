import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeSliderComponent } from './shared/home-slider/home-slider.component';
import { CardComponent } from './shared/card/card.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurVisionMissionValuesComponent } from './our-vision-mission-values/our-vision-mission-values.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNowComponent } from './book-now/book-now.component';
import { BannerWidgetComponent } from './shared/banner-widget/banner-widget.component';
import { WideCardComponent } from './shared/wide-card/wide-card.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { ManageBlogComponent } from './blogs/manage-blog/manage-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { ImageWidgetComponent } from './shared/image-widget/image-widget.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';
import { QuotesComponent } from './quote/quotes/quotes.component';
import { QuoteComponent } from './quote/quote/quote.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HomeSliderComponent,
    CardComponent,
    ServicesComponent,
    AboutUsComponent,
    OurVisionMissionValuesComponent,
    ContactUsComponent,
    BookNowComponent,
    BannerWidgetComponent,
    WideCardComponent,
    BlogComponent,
    BlogsComponent,
    ManageBlogComponent,
    ImageWidgetComponent,
    FeedbackComponent,
    ListBlogsComponent,
    QuotesComponent,
    QuoteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    QuillModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
