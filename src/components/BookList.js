import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../src/table.css';
import { deleteBook, getAllBooks } from '../services/booksServices';

const BookList=({getBookId})=> {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        getBooks();
    },[]);

    const getBooks=async ()=>{
        const data=await getAllBooks()
                   .catch(err=>console.log(err));
         setBooks(data.docs.map((doc)=>({...doc.data(),id:doc.id})));       
    }
      const deleteHandler= (id)=>{
         deleteBook(id);
        getBooks();
          }
         
     return (
    <>
    
    <div>
    <div className='mb-2'>
        <button variant='dark edit' onClick={getBooks}>RefreshList</button>

    </div>

      <table >
        <thead >
            <tr >
               <th>#</th> 
               <th>Title</th>
               <th>Author</th>
               <th>Status</th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody >
            {books.map((doc,index)=>{
                return (
                 <tr key={doc.id}>
                <td>{index+1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                    <button className='ui button primary' onClick={(e)=>getBookId(doc.id)}>Edit</button>
                    <button className='ui button danger' onClick={(e)=>deleteHandler(doc.id)}>Delete</button>
                </td>

            </tr>
                )
            })}
            
        </tbody> 
      </table>
      </div>

      </>  
  )

}
export default BookList