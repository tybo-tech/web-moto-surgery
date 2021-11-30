import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { ListBlogsComponent } from './blogs/list-blogs/list-blogs.component';
import { ManageBlogComponent } from './blogs/manage-blog/manage-blog.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurVisionMissionValuesComponent } from './our-vision-mission-values/our-vision-mission-values.component';
import { QuoteComponent } from './quote/quote/quote.component';
import { QuotesComponent } from './quote/quotes/quotes.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-vision-mission-values', component: OurVisionMissionValuesComponent },
  { path: 'book', component: BookNowComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'list-blogs', component: ListBlogsComponent },
  { path: 'manage-blog/:id', component: ManageBlogComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'quote/:id', component: QuoteComponent },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
