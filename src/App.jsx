
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  

  return (
    <div className='mx-80'>
     <Header></Header>
     <div className='md:flex mt-8'>
     <Blogs></Blogs>
     <Bookmark></Bookmark>
     </div>
      
      
    </div>
  )
}

export default App
