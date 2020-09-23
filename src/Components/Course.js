import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from '../firebase';

const useStyles = makeStyles({
  root: {
    height:300,
    width:300,
    margin:13
  },
  media: {
    height:150,
    minHeight:150,
  },
});

function Course({id,course, flag}) {
  const classes = useStyles();

  const images=['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEzoWh1jN9ES0JHvXcPf-FLmsmw0zlPfBh-A&usqp=CAU',
  'https://assets.entrepreneur.com/content/3x2/2000/20190509074950-Apply-Now-Startup-School-Online-Course-Bigstock-4000pxW-X-2670pxH-copy.jpeg',
    'https://mk0thinkificig8baqk3.kinstacdn.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/06/Create-Online-Courses-10.jpg.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBzh9ZVTH4W2JfPTNWsN4-F5wXE7sJra3ssg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSl8EERSkQhWRdwCXkoGY2mj_DvtqqGa5tauw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyBrfwWcgCTXRVAq18I3Nu5N06TEUbRUH64g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkW0yh98KN5ainsKrMWiCqF_V3m4Tbj9H7Xg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZBF96HsAQrCFAQ1U_TTKDDHLwG119Ur_fuA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoCymNxwaVkzrOXhr25fE20_mETJkjux5ANg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPl6YGdhd1qNj2TPYDnulLWhfKOr2aSFVqiA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBzh9ZVTH4W2JfPTNWsN4-F5wXE7sJra3ssg&usqp=CAU'
  ];

  const delete_course=(e)=>{
    e.preventDefault();
    db.collection('courses').doc(id).delete();
  }

  return (
    <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={id%2===0?images[0]:images[1]}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <div style={{flex:1,display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    {course.name}
                    {flag && <div classname='ed_button'>
                      <Link to={`/add/${id}`}><EditIcon style={{color:'grey', fontSize:'large'}} className='edit'/></Link>
                      <IconButton aria-label="delete">
                        <DeleteIcon onClick={delete_course} style={{fontSize:'large'}}/>
                      </IconButton>
                      </div>}
                    </div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {course.detail}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div>{course.duration}</div>
                        <div>Rs. {course.price}</div>
                    </div>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}

export default Course;
