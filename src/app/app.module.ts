import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeBgDirective } from './change-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    QuizComponent,
    WelcomeComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
