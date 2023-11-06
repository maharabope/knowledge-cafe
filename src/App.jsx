
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'

import Header from './component/Header/Header'
import Bookmarks from './component/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks]=useState([])

  const handelBookmark=(blog)=>{
    const newBookmarks= [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }
  

  return (
    <div className='max-w-7xl mx-auto '>
     <Header></Header>
     <div className='md:flex mt-8'>
     <Blogs handelBookmark={handelBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
      
    </div>
  )
}

export default App
