import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }
  public createCollection(path:string){
    return this.firestore.collection(path).valueChanges();
  }
  // public saveContactDetails(details: IContactForm) {
  //   const { name, email, message, contactNumber } = details;
  //   return this.firestore.collection('email-list')
  //     .add({
  //       name,
  //       email,
  //       message,
  //       contactNumber,
  //       read: false,
  //       date: new Date()
  //     });
  // }
}
