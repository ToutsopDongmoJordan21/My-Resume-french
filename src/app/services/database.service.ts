import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { }
  getabout(){
    return this.db.list('/about').valueChanges();
  }

  createMessage(username: string,email: string,message: string) {
    let client = {
      username, email, message
    }
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('clients')
        .add(client)
        .then(response => {
          console.log(response)
          console.log(client);
        }, error => reject(error));
    });
  }
}
