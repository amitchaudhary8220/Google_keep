import React from 'react';
  import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
  

  
  

const Note = (props) => {
    const { id,title, content,onDeleteHandler} = props;
    console.log("this is props",props);

    const newOnDeleteHandler = () => {
        onDeleteHandler(id);
    }
    return (
        <>
            <div className='note'>
                <h1>{title}</h1>
                <br />
                <p>{content}</p>
                <button className="btn" onClick={newOnDeleteHandler}>
                    <DeleteForeverIcon className="deleteIcon"></DeleteForeverIcon>

                </button>
               
            </div>

        </>
    );
}

export default Note;