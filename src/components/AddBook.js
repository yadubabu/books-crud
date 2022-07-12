import React from 'react';
import { useState } from 'react';
import { addBooks, updateBook,getBook } from '../services/booksServices';
import { useEffect } from 'react';


const AddBook = ({id,setBookId}) => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [status,setStatus]=useState('false')
    const [error,setError]=useState({error:'false',msg:''});
    const [message,setMessage]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError('');
        if(title === '' || author===''){
            setError({error:'true',msg:'All Fields are Mandatory'});
            return;
        }
        const newBook={
            title,
            author,
            status,
        };
      try{
          if(id !== undefined && id !== ""){

              await updateBook(id,newBook);
              setBookId('');
              setError({error:false,msg:'Updated successfully'})
          }else{
              await addBooks(newBook);
              setError({error:false,msg:'New Book added successfully'});
          }
      } catch(err){
          setError({error:'true',msg:err})
      }       
      setAuthor('');
      setTitle('');
    }
    const editHandler=async()=>{
        setMessage('');
        try{
            const docSnap=await getBook(id);
            console.log('the record is :' , docSnap.data());
            setTitle(docSnap.data().title);
            setAuthor(docSnap.data().author);
            setStatus(docSnap.data().status);
        }catch (err){
            setMessage({error:true,mg:err.message});
        }
    }
    useEffect(()=>{
        console.log('The id here is:' , id);
        if(id !== undefined && id !== ""){
            editHandler();

        }
    },[id]);
  return (
    <>  {error && <h2 style={{color:'red'}}>{error.msg}</h2>}
        {message && <h3 style={{color:'green'}}>{message}</h3>}
        <div>
            <form className='ui form' onSubmit={handleSubmit}>
                <label>Title:</label>
                <input value={title} type='text' name='title' onChange={(e)=>setTitle(e.target.value)}/>
                <label>Author:</label>
                <input value={author} type='text' name='author' onChange={(e)=>setAuthor(e.target.value)}/>
                <button className='ui button primary' onClick={(e)=>setStatus(e.target.value)} value='Available'>Available</button>
                <button className='ui button danger' onClick={(e)=>setStatus(e.target.value)} value='Non-Available'>Non-Availlable</button>
                <br/><center><button style={{background:'red',color:'black',width:'200px',height:'40px',borderRadius:'5px'}}>Add/Update</button></center>
            </form>
                
        </div>
    </>
  )
}

export default AddBook