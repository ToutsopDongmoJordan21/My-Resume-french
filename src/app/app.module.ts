import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage'
// import {} from 'googlemaps';
// import { AgmCoreModule } from '@agm/core';
import { DatabaseService } from './services/database.service';
import { ContactComponent } from './contact/contact.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { IconsComponent } from './contact/icons/icons.component';
import { SkillsComponent } from './skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PersonalSkillsComponent } from './skills/personal-skills/personal-skills.component';
import { ProfessionalSkillsComponent } from './skills/professional-skills/professional-skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    RootNavComponent,
    TextAnimationComponent,
    IconsComponent,
    SkillsComponent,
    PersonalSkillsComponent,
    ProfessionalSkillsComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    NgbModule,
    BrowserAnimationsModule,
    TeximateModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgCircleProgressModule.forRoot({})
    // AnimateOnScrollModule.forRoot(),
  ],
  providers: [
    DatabaseService,
    {provide : BUCKET, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
