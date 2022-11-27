import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
 
function CreateNote(props) {
    // console.log("props of createNote",props)
    // console.log("createnote renderd");
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',

    });


    const onChangeHandler = (event) => {
        //setNote also contains the previous record which we can take using spread operator (...)

        // const value = event.target.value;
        // const name = event.target.name;


        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
                //here we are checking that which name is matching here ,then assigning the value


            }
        })
    }

    //when we provide name and value in every element then we can access data according to value and name

    const newOnClickHandler = () => {
        props.onClickHandler(note);
        setNote({
            title: "",
            content:"",
        })
        
    }

    const expandIt = () => {
       
        setExpand(true);
    }
    const closeIt = () => {
        setExpand(false);
    }

    return (
        <div className="main_note" onClick={expandIt} onDoubleClick={closeIt}>
            <form >
                {expand?
                    <input type='text' name="title" value={note.title} onChange={onChangeHandler} placeholder='Title' /> : null}
                
                {/* {expand ?
                    <Button className="close" variant="contained" onClick={closeIt}>close</Button>
                    : null}  */}
               
                <textarea rows="" column="" name="content" value={note.content} onChange={onChangeHandler}
                  placeholder='write a note...'/>
                
                
                {expand ?
                    <Button onClick={newOnClickHandler}>
                        <AddIcon className="plus_sign"></AddIcon>
                    </Button> : null}

            </form>

        </div>
    );
}

export default CreateNote;
