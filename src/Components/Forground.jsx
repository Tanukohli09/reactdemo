import React,{useState} from 'react';
import Box from './Box';

function Forground() {


  const data=[
   {
      desc:"hello what's going on!!!",
      filesize:".9mb",
      close:true,
      tag:{isopen:true , tagTitle:"Download Now", tagColor:"green"},
   },
   {
    desc:"hello what's going on!!!",
    filesize:".9mb",
    close:false,
    tag:{isopen:true , tagTitle:"Download Now", tagColor:"blue"},
 },

 {
  desc:"hello what's going on!!!",
  filesize:".9mb",
  close:true,
  tag:{isopen:true , tagTitle:"Download Now", tagColor:"green"},
},


  ];
  //useState()
  return (
  
      <div  className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Box data={item} />
        ))}
          
      </div>

   
  )
}
export default Forground;