import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBSKtMHfWPRabEsZXb-2NOCu0o_e5vPWjc",
  authDomain: "my-portfolio-866eb.firebaseapp.com",
  projectId: "my-portfolio-866eb",
  storageBucket: "my-portfolio-866eb.appspot.com",
  messagingSenderId: "593259113196",
  appId: "1:593259113196:web:60ae6b7e70a571706a53c9"
};


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    PortfolioPageComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectListComponent,
    SkillsListComponent,
    ToolsListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
