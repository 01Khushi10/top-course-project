import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Card from './Components/Card'
import { ToastContainer, toast } from 'react-toastify'
import {apiUrl, filterData} from './data.js'
import Spinner from './Components/Spinner.js'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
    }
    catch(err){
      toast.error("Network error");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='min-h-screen bg-bgDark2 flex flex-col'>
      <div>
        <NavBar />
      </div>
      <div className='bg-bgDark2 '>
      <div>
        <Filter category={category}
        setCategory={setCategory} filterData={filterData} />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]'>
        {
          loading ? (
            <Spinner></Spinner>
          ):(
            <Cards courses={courses} category={category}></Cards>
          )
          }
      </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
