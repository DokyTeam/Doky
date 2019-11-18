import fire from '../config/Fire';


export class FirebaseCreateRepository {

    constructor(){
        this.firebaseInstance = fire;
    }
    
    writeDocument(collectionName,document,merge=false){
        return this.firebaseInstance.firestore().doc(collectionName).set(document, { merge: merge });
    }

    writeCollectionIdDefined(collectionName, idDoc, document){

        return this.firebaseInstance.firestore().collection(collectionName).doc(idDoc).set(document);

    }

}