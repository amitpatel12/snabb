'use client'
import React, { useState } from 'react'
import Details from './Details'

const FormTable = () => {
  const [formData, setFormData] = useState({
    name:'',
    country:'',
    email: '',
    password: '',
  })

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'Mike',
      country: '33',
      email: 'nirajan@gmail.com',
      password:'12345'
    }
  ])
    
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {...formData, key: dataSource.length+1}
    setDataSource([...dataSource, data])
    setFormData({
      name:'',
      country:'',
      email: '',
      password: '',
    })
   
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col min-h-screen w-screen items-center mt-10 gap-10 '>
      <form className='grid grid-cols-1 lg:grid-cols-2 gap-10' onSubmit={handleSubmit}>
        <div className='flex lg:text-[20px] text-[18px] lg:items-center flex-col lg:flex-row'>
            <label for='name' className='w-[100px]'>Name</label>
            <input type="text" id='name' name='name' className='outline-none border-gray-400 border-[1px] p-2 rounded-lg' placeholder='Enter Name' value={formData.name} onChange={handleInputChange} required/>
        </div>

        <div className='flex lg:text-[20px] text-[18px] lg:items-center flex-col lg:flex-row'>
            <label for='name' className='w-[130px]'>Country Code</label>
            <input type="text" id='name' name='country' className='outline-none border-gray-400 border-[1px] p-2 rounded-lg' placeholder='Enter Country' value={formData.country} onChange={handleInputChange} required/>
        </div>


        <div className='flex lg:text-[20px] text-[18px] lg:items-center flex-col lg:flex-row'>
            <label for='email' className='w-[100px]'>Email</label>
            <input type="text" id='email' name='email' className='outline-none border-gray-400 border-[1px] p-2 rounded-lg' placeholder='Enter Name' value={formData.email} onChange={handleInputChange} required/>
        </div>


        <div className='flex lg:text-[20px] text-[18px] lg:items-center flex-col lg:flex-row'>
            <label for='password' className='w-[130px]'>Password</label>
            <input type="text" id='password' name='password' className='outline-none border-gray-400 border-[1px] p-2 rounded-lg' placeholder='Enter Password' value={formData.password} onChange={handleInputChange}/>
        </div>
<div className='lg:col-span-2 grid place-content-center'>
        <button type='submit' className=' p-2 bg-blue-600 text-white rounded-lg mt-10 w-[100px] items-center text-center'>ADD</button>
        </div>
      </form>
     

      <Details dataSource={dataSource}/>
    </div>
  )
}

export default FormTable
