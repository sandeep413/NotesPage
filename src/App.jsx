import React, { use } from 'react'
import { useState } from 'react';
const App = () => {

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [details, setdetails] = useState([])

  function formSubmit(e) {
    e.preventDefault();
    const copyDetails = [...details];//Copying purana Data as it is
    copyDetails.push({ title, description });
    // console.log(copyDetails);
    setdetails(copyDetails);
    // console.log(details.title);
    setTitle('');
    setdescription('');
  }

  function deleteAction(idx){
   const copyDetails=[...details];
   copyDetails.splice(idx,1);
   setdetails(copyDetails);
  }
  return (
    <div className="flex  max-h-screen px-6 items-center bg-[url('https://images.unsplash.com/photo-1584099799061-455b6b0b7f00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

      <div className='  flex p-6 lg:w-1/2 items-center '>
        <form className=' px-10 py-4 flex flex-col gap-4 ' onSubmit={(e) => {
          formSubmit(e);
        }} >
          <input className='border-2 rounded-sm w-sm outline-0 px-4 mt-4' type="text" placeholder='Enter Title' value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} />
          <textarea onChange={(e) => {
            setdescription(e.target.value)
          }} className='border-2 w-sm h-56 outline-0 rounded-sm p-4' name="text" id="text" placeholder='Enter Description' value={description} ></textarea>
          <button className='bg-black text-blue-800 rounded-xl h-10'>Add Note</button>
        </form>
      </div>

      <div className='lg:w-1/2 lg:border-l-2 p-4 mt-10 overflow-auto'>
        <h1>Recent Notes</h1>
        <div className='flex flex-wrap h-[90vh] mt-6 gap-4 '>{
          details.map(function (elem, idx) {
            return (
              // console.log(elem.title)
              <div key={idx} className="w-48 h-52 bg-cover rounded-2xl flex flex-col flex-wrap justify-between items-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <div className=' w-full  py-5'>
                  <h5 className=' pl-5 font-bold text-blue-400 text-xl'>{elem.title}</h5>
                  <p className='pl-5 text-blue-400'><b>{elem.description}</b></p>
                </div>
                <button onClick={()=>{
                  deleteAction(idx);
                }} className=' cursor-pointer active:scale-105 mb-2 bg-red-500 w-20 rounded-2xl'>Delete</button>
              </div>
            )
          })
        }


        </div>
      </div>

    </div>
  )
}
export default App; 