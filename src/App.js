import React ,{useState} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import CreateNote from './CreateNote';
import Note from './Note';



function App() {
  const [addItem, setAddItem] = useState([]);
  const onClickHandler = (data) => {
    // console.log("data after clicking the button ", data);
    setAddItem((prevData) => {
      return [...prevData, data];
    });

    console.log(addItem);
   
  }

  const onDeleteHandler =(id) => {
    setAddItem((oldData) => 
      oldData.filter((ele, index) => {
        return index !== id;
      })

        
    );
  }
  return (
   
      <>
      
      <Header></Header>
      <CreateNote onClickHandler={onClickHandler}/> 
      {addItem.map((val, index) => {
        return <Note key={index}
          id={index}
          title={val.title}
          content={val.content}
          onDeleteHandler={onDeleteHandler}
         />
     })}
      
      <Footer />
      </>
      
  
  );
}

export default App;



//array.map(function(currentValue,index,arrr),thisValue)

