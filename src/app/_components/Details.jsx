'use client'
import React, {useEffect, useState} from 'react'
import { Table } from 'antd'
const Details = ({dataSource})=> { 
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'Country',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          sorter: (a, b) => a.email.localeCompare(b.email),
        },

        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
          },
      ];

      useEffect(()=>{
        setData(dataSource)
      },[dataSource])

     

      const handleChange = (e)=> {
       setValue(e.target.value)
      
       const searchTerm = e.target.value;
       setValue(searchTerm);
   
      
       const filteredResults = dataSource.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setData(filteredResults)
      }

   
    return (
        <div className= 'sm:w-[70%] flex flex-col gap-5 w-full p-2 sm:p-0 !overflow-auto'>
          <p className='text-center font-bold text-[18px]'>Details Table</p>
            <div className="flex justify-between items-center">

                <input type='text' placeholder="Search By Name" className="outline-none border-gray-400 border-[1px] p-2 rounded-lg" onChange={handleChange}/>
               
            </div>
            <Table dataSource={data} columns={columns} className=''/>
        </div>
    )
}

export default Details