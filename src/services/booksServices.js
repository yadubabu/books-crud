import {db} from '../firebase';

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const booksRef=collection(db,"books");

export const addBooks=(newBook)=>{
        return addDoc(booksRef,newBook);
    };

 export const updateBook=(id,updatedBook)=>{
    
        const bookDoc=doc(db,"books",id);
        return updateDoc(bookDoc,updatedBook);

    };
  export const deleteBook=(id)=>{
        const bookDoc=doc(db,"books",id);
        return deleteDoc(bookDoc);
    };
    export const getAllBooks=()=>{
        return getDocs(booksRef);
        };
    
    export const getBook=(id)=>{
        const bookDoc=doc(db,"books",id);
        return getDoc(bookDoc);
    }


