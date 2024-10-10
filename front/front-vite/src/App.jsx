import './App.css'
import { MdInfo } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import Notes from './components/Notes'
import CreatePostForm from './components/CreatePostForm';


function App() {
  return (
    <div className='main-container'>
      <nav className='navigation'>
    <div className="icons">
    <IoIosHome />
    
    <MdInfo/>
    </div>
      </nav>
      <h1 className='titulo'>Registra tus tareas!!!</h1>
      <hr />
<div className="cuadricula">
<Notes/>

</div>

      <CreatePostForm/>
    </div>
  )
}

export default App
