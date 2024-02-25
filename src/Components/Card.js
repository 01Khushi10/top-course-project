import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    const clickHandler = () => {
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>cid !== course.id));
            toast.warning("Like Removed")
        }
        else{
            if(likedCourses === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark rounded-md  overflow-hidden'>
        <div className='relative'>
            <img className='object-cover w-[100%] h-[100%] relative' src={course.image.url}></img>
            <div className='absolute w-[40px] h-[40px] rounded-full right-2 bottom-1 grid place-items-center bg-white z-10'>
                <button onClick={clickHandler}>
                   {
                    likedCourses.includes(course.id) ? (
                        <FcLike fontSize="1.75rem" />
                    ):(
                        <FcLikePlaceholder fontSize="1.75rem" />
                    )
                   }
                </button>
            </div>
        </div>
        
        <div className='p-4 bg-bgDark bg-opacity-80 text-white'>
            <p className='font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 '>
                {course.description.length>100 ? (course.description.substring(0,100)+"..."):(course.description)}
                </p>
        </div>
    </div>
  )
}

export default Card