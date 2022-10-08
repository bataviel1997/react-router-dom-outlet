import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function BlogPage() {

  // state
  const [blogs, setBlogs] = useState([])

  // com did mount 
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        console.info(res.data)
        setBlogs(res.data)
      })
      .catch((err)=>{
        console.error(err)
      })
  }, [])


  return (
    <div className=' w-full min-h-screen'>
    <h1 className='text-4xl font-medium mb-6 text-orange-600'>Blog Page</h1>
    <table className=' w-full'>
        <thead className='h-12 bg-white'>
            <tr>
                <th className=' text-center px-2 font-medium'>id</th>
                <th className=' text-center px-2 font-medium'>Title</th>
                <th className=' text-center px-2 font-medium'>Body</th>
                <th className=' text-center px-2 font-medium'>Action</th>
            </tr>
        </thead>

        <tbody>
            {blogs.map((item)=>(
                  <tr className=' h-12 hover:bg-slate-200' key={item.id}>
                  <td className='text-center px-2 font-medium '>{item.id}</td>
                  <td className='text-left px-2 font-medium'>{item.title}</td>
                  <td>
                    <p className='text-left px-2 font-medium'>
                      {item.body}
                    </p>
                  </td>
                    <td>
                        <div className='w-full flex gap-2 justify-center'>
                          <button className='rounded-sm h-8 w-[80px] bg-green-500 text-white'>Edit</button>
                          <button className='rounded-sm h-8 w-[80px] bg-blue-500 text-white'>View</button>
                          <button className='rounded-sm h-8 w-[80px] bg-red-500 text-white'>Delete</button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
      
  </div>
  )
}
