
import { useState } from 'react'
import './App.css'
import Bloges from './components/Bloges/Bloges'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [bookmarkTime, setBookmarkTime] = useState(0)
  const handleClickBtn = blog => {
    const newBook = [...bookmarks, blog]
    setBookmarks(newBook)
  }

  const handleBookmarkTime = time => {
    setBookmarkTime(bookmarkTime+time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Bloges handleClickBtn={handleClickBtn}
          handleBookmarkTime={handleBookmarkTime}
        ></Bloges>
        <Bookmarks bookmarks={bookmarks} bookmarkTime={bookmarkTime} ></Bookmarks>
      </div>

    </>
  )
}

export default App
