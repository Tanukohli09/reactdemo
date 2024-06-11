import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Box({data,reference}) {
  return (
   
      <motion.div drag dragConstraints={reference} className=' relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-700 text-white px-8 py-10 overflow-hidden '>
       <FaRegFileAlt/><br/>

       <p className='text-sm'>{data.desc}
       </p>

       <div className='footer absolute bottom-0  w-full  left-0  '>
        <div className='flex items-center justify-between mb-3 py-3 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
          {data.close ? <IoMdClose/>:< IoDownloadOutline color='#000'/>  }
          
          </span>

        
        </div>
        {
          data.tag.isopen && (<div className={`tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h3 className='test'>{data.tag.tagTitle}</h3>
          </div>)
        }
        
       </div>
       
        
         </motion.div>
      
  )
}
export default Box;