import React from 'react'

function Filter(props) {
    let category = props.category;
    let setCategory = props.setCategory;
    let filterData = props.filterData;
    const filterHandler = (title) => {
        setCategory(title);
    }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center' >
        {
            filterData.map((data, index)=>{
                return (
                    <button onClick={()=>filterHandler(data.title)} className={`text-white text-lg px-2 py-1 rounded-md font-medium bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? ("bg-opacity-60 border-whirte"):("bg-opacity-40 border-transparent")}
                    }`} key={data.id} >{data.title}</button>
                )
            })
        }
    </div>
  )
}

export default Filter