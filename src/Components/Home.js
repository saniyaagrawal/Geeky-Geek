import React, { useState, useEffect } from 'react'
import Course from './Course'
import './Home.css'
import db from '../firebase'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

function Home() {
    const [courses, setCourses] = useState([]);
    const [keyword, setKeyword]= useState('')

    useEffect(()=>{
        const run=db.collection('courses').onSnapshot((snapshot)=>
        setCourses(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        }))))
        
        return ()=>{
            run();
        }
    },[])

    const handleInput=(e)=>{
        e.preventDefault();
        setKeyword(e.target.value)
    }

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
                        value={keyword}
                        onChange={handleInput}
                        />
                    </Paper>
            </div>
           <div className='course'>
           {courses.filter((c)=>c.data.name.toLowerCase().includes(keyword.toLowerCase())).map((course)=>(
            <Course
                key={course.id}
                id={course.id}
                course={course.data}
            />
            
           ))}
           </div>
        </div>
    )
}

export default Home
