import fire from '../config/Fire';
import { CheckType } from '../utilities/check_type'

// This will be the repository for calling the database directly
// TAKE CARE!!!!! This class is very dangerous if you call it 
// with trash information.
//
// The security is very poor, because anyone with the enough 
// knowledge can use this repository for modifying the database.
// We have to work on that for the future sprints, okay? :v

export class FirebaseDatabaseRepository {

    // I will initialize the contructor with the Fire object.
    constructor() {
        this.firebaseInstance = fire.firestore();
        this.checkType = new CheckType();
    }

    // I will create a generic method for use the database.
    // The idea here is: You say to the method the collection where
    // you want to upload the information, the document id, and pass 
    // the object (I like call it "payload") with the data that it will
    // be uploaded to that document.

    createNewDocument(collection, documentID, payload) {

        // So the first thing is to make a reference to the collection
        // As always, we have to check if that is a String for avoiding 
        // problems :)

        if(!this.checkType.isAString(collection)){
            console.log('It is not a valid collection');
            return false;
        }


        // Now we can make a reference to that collection.
        const collectionReference = this.firebaseInstance.collection(collection);


        var generateADocumentIDAutomatically = false;


        if(documentID == null){
            
            // If the documentID is null, that means you want to generate it automatically,
            // so I will write that into a variable.

            generateADocumentIDAutomatically = true;

        } else {

            // Okay, so now we have to check if the documentID is a String for...
            // ... Yeah! Repeat after me, "avoiding problems :)"

            if(!this.checkType.isAString(documentID)){
                return false;
            }
            else {
                generateADocumentIDAutomatically = false;
            }
        }


        // Nice, so now we have to add the data to the database.
        // For that, I will use the method offered by the Firebase SDK
        // You can read the documentation here: https://firebase.google.com/docs/firestore/quickstart
        // It is veryyyy good, so take a look at it ;)
        //
        // The payload it will be an object that I will upload to the document selected
        //
        // The methods for generate a documentID automatically and for setting a documentID are different,
        // so for that reason I'm going to use the "generateADocumentIDAutomatically" variable.

        if(generateADocumentIDAutomatically) {
            
            // In this case I will create a document inside the Collection, making the document ID free to
            // be Firebase who assigns it.
            //
            // So I'm gonna use the following method for that:
            // Please note that I'm adding the payload as an object, I don't need to transform it to a JSON
            // format, Firebase makes that automatically.
            // 
            // I will return the promise as such, so you can recieve the .then() and the .catch() methods
            // on your own.


            return collectionReference.add(payload);
            
        } else {

            // In this case, I will create a document with a specific ID, so I'm going to use the method
            // offered by Firebase.
            //
            // Here I pass the payload as an object too.
            //
            // And also I will return  the promise that Firebase provides us.


            return collectionReference.doc(documentID).set(payload);
        }
    }

    

    // So the idea here is to make a method for reading a specific document.
    // Like in the above method, you must specify the collection and the document ID,
    // and it will return you its document snapshot 
    readADocument(collection, documentID) {

        // So the first thing is to make a reference to the collection
        // As always, we have to check if that is a String for avoiding 
        // problems :)
        
        if(!this.checkType.isAString(collection)){
            return null;
        }

        // Now we can make a reference to that collection.
        const collectionReference = this.firebaseInstance.collection(collection);

        // Okay, so the next step is search for the document that we are searching for.
        // For that, I will use the method offered by Firebase.
        //
        // I will return the promise, so the controller must handle it.
        //
        // As always, I will check if the input is a String or not.

        if(!this.checkType.isAString(documentID)){
            return null;
        }

        // Now I'm going to return the promise.
        return collectionReference.doc(documentID).get();
    }



    // So the idea here is to make a method for update a specific document.
    // Like in the above method, you must specify the collection and the document ID,
    // with also the payload to add and a boolean parameter that indicates us if we need
    // merge the current content on that document with that payload, or if we need 
    // overwrite the entire document.
    updateDocument(collection, documentID, payload, merge) {

        // So the first thing is to check if the inputs are valid, so we will check 
        // these types.

        if((!this.checkType.isAString(collection))||(!this.checkType.isAString(documentID))||(!this.checkType.isABoolean(merge))) {
            return false;
        }

        // Ok, here the variables are correct and we can to upload the payload.
        // 
        // Now the next step is to make a reference to the collection.
        const collectionReference = this.firebaseInstance.collection(collection);

        // It is fine, now we need to modify the document (or add new information).
        // We will use the method offered by Firebase set() that it's the same for 
        // creating a new one, but wih a new parameter "merge" that it will be used
        // for updating the document without overwriting it.
        return collectionReference.doc(documentID).set(payload, {merge: true});
    }

    // And finally, the last method. 
    // The idea here is create a method that lets us to delete documents.
    // You will need the collection and the document ID.
    deleteDocument(collection, documentID) {

        // The first thing, as always, is to verify if the inputs are valid.
        if((!this.checkType.isAString(collection))||(!this.checkType.isAString(documentID))){
            return false;
        }

        // Now we have checked that, we need to use the method offered by Firebase for deleting documents.
        return this.firebaseInstance.collection(collection).doc(documentID).delete();
    }
}