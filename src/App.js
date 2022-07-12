import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { useState } from 'react';


const App=()=>{
const [bookId,setBookId]=useState('');
 const getBookIdHandler=(id)=>{
   setBookId(id)
 }
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<AddBook id={bookId} setBookId={setBookId}/>}/>
        </Routes>
      </Router>
      <BookList getBookId={getBookIdHandler}/>      

    </div>
  )
}

export default App;
