import React, {useState, Component, useEffect} from 'react'
import {TextField} from '@material-ui/core'
import './Add.css'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import db from '../firebase'
import { useStateValue } from '../StateProvider'
import { useParams } from 'react-router-dom';

function Add(){
    const {courseId}=useParams();
    const [name, setName] = useState(""); 
    const [detail, setDetail] = useState(""); 
    const [duration, setDuration] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [{user}, dispatch]=useStateValue();

    useEffect(() => {
      if(courseId){
        db.collection('courses').doc(courseId).onSnapshot((snapshot)=>(
          setDuration(snapshot.data().duration),
          setName(snapshot.data().name),
          setPrice(snapshot.data().price),
          setDetail(snapshot.data().detail)))
      }
    }, [courseId])

    const handleSubmit=(e)=> {
        e.preventDefault();

        if(courseId){
          db.collection('courses').doc(courseId).update({
            name:name,
            detail:detail,
            duration:duration,
            price:price,
        })}
        else{db.collection('courses').add({
            email:user.email,
            name:name,
            detail:detail,
            duration:duration,
            price:price,
        })}
        alert('Saved');
        setName("");
        setDetail("");
        setDuration("");
        setPrice("");
      }

        return (
          <div className='background'>
            <form noValidate autoComplete="off">
              <div className='add_form'>
                <div className='add_row'>
                  <h3 className='add_name'>Name of the course:</h3>
                  <div  className='add_input'>
                  <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                </div>
                <div className='add_row'>
                  <h3 className='add_name'>Details of the course:</h3>
                  <div  className='add_input'>
                  <TextField id="outlined-basic" label="Details" variant="outlined" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
                  </div>
                </div>
                <div className='add_row'>
                  <h3 className='add_name'>Duration of the course:</h3>
                  <div  className='add_input'>
                  <TextField id="outlined-basic" label="Duration" variant="outlined" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
                  </div>
                </div>
                <div className='add_row'>
                  <h3 className='add_name'>Price of the course :     </h3>
                  <div  className='add_input'>
                  <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                  </div>
                </div>
                <div className='add_row'>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
                </div>
              </div>
            </form>
          </div>

        );
}

export default Add
