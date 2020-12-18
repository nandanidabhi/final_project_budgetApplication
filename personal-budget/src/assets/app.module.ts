import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { MenuComponent } from 'app/menu/menu.component';
import { HeroComponent } from 'app/hero/hero.component';
import { FooterComponent } from 'app/footer/footer.component';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { ArticleComponent } from 'app/article/article.component';
import { AboutComponent } from 'app/about/about.component';
import { LoginComponent } from 'app/login/login.component';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
