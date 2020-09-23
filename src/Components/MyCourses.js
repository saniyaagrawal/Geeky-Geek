import React, { useState, useEffect } from 'react'
import Course from './Course'
import './Home.css'
import db from '../firebase'
import { useStateValue } from '../StateProvider'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

function MyCourses() {
    const [{user}, dispatch] = useStateValue();
    const [courses, setCourses] = useState([]);
    // const email='saniya.agrawal@gmail.com';
    // if(user.email)
    const email=user.email;

    useEffect(()=>{
        const run=db.collection('courses').where('email','==',email).onSnapshot((snapshot)=>
        setCourses(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        }))))
        return ()=>{
            run();
        }
    },[])

    return (
        <div className='home'>
            <div className='search'>
            <Paper component="form" >
                <IconButton type="submit" aria-label="search">
                <SearchIcon />
                </IconButton>
                <InputBase
                placeholder="Search Course"
                inputProps={{ 'aria-label': 'search course' }}
                style={{marginLeft:1}}
                />
            </Paper>
            </div>
           <div className='course'>
           {courses.map((course)=>(
            <Course
                key={course.id}
                id={course.id}
                course={course.data}
                flag
            />
           ))}
           </div>
        </div>
    )
}

export default MyCourses
