
import './App.css'
import Bloges from './components/Bloges/Bloges'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Bloges></Bloges>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
