


import fire from '../config/Fire';

export class FirebaseReadRepository {

    constructor(){
        this.firebaseInstance = fire;
    }


    readCollection(nameCollection){
        return this.firebaseInstance.firestore().collection(nameCollection);
    }


    readGroupCollection(nameCollection){
        return this.firebaseInstance.firestore().collectionGroup(nameCollection);
    }
    


}








