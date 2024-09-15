import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  
  return (

    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
    <div className='mt-4'>
      <span>Email</span>
      <br></br>
      <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-2 mt-2 border rounded-md outline-none'/>
      <br></br>
      <span>Password</span>
      <br></br>
      <input type='text' placeholder='Enter Your Password' className='w-80 px-3 py-2 mt-2 border rounded-md outline-none' />
    </div>
    <div className='flex justify-around mt-4'>
      <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-warning duration-300 cursor-pointer">Login</button>
    </div>
    <p className='text-center mt-3'>Not registered?<Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link>{ ""}</p>
    </div>
</dialog>
    </div>
  )
}
