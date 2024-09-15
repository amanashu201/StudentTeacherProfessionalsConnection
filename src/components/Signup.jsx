import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


export default function Signup() {
  return (
    <>
    <div className='flex h-screen item-center justify-center'>
        <div id="my_modal_3" className=" ">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>{""}
    </form>
    <h3 className="font-bold text-lg">Sinup!</h3>
    <div className='mt-4'>
    <span>Name</span>
      <br></br>
      <input type='email' placeholder='Enter Your Name' className='w-80 px-3 py-2 mt-2 border rounded-md outline-none'/>
      <br></br>

      <span>Email</span>
      <br></br>
      <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-2 mt-2 border rounded-md outline-none'/>
      <br></br>
      <span>Password</span>
      <br></br>
      <input type='text' placeholder='Enter Your Password' className='w-80 px-3 py-2 mt-2 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around mt-4'>
      <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-warning duration-300 cursor-pointer">Signup</button>
    </div>
    <p className='text-center mt-3'>Have account?<button
     className='underline text-blue-500 cursor-pointer'
     onClick={()=> document.getElementById('my_modal_3').showModal()
     }
     >Login</button>
     <Login/>
     </p>
     
    </div>
    
</div>
</div>

    </>
  )
}
