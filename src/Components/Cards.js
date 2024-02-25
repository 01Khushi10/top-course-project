import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    function getCourses(){
        if(category === "All"){
            let allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((courseData) =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            return courses[category];
        }
        
    }
  return (
    <div className='flex flex-wrap gap-4 mb-4 justify-center'>
        {
            getCourses().map((course)=>{
                return (
                    <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            })
        }
    </div>
  )
}

export default Cards