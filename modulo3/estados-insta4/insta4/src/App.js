import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [fotoUsuario, setFotoUsuario] = useState('')
  const [fotoPost, setFotoPost] = useState('')
  const [arrayPost, setArrayPost] = useState([
    {nomeUsuario:"Eloísa", fotoUsuario:"https://picsum.photos/id/237/200/300", fotoPost:"https://picsum.photos/200/150"},
    {nomeUsuario:"Paulo", fotoUsuario:"https://picsum.photos/51/52", fotoPost:"https://picsum.photos/250/180"},
    {nomeUsuario:"Neto", fotoUsuario:"https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE", fotoPost:"https://picsum.photos/100/150"},
    
  ])
  const addNovoPost = () =>{
    let novoPost = {nomeUsuario:nomeUsuario, fotoUsuario:fotoUsuario, fotoPost:fotoPost}
  const novoArray = [...arrayPost, novoPost]
  setArrayPost(novoArray)
  setNomeUsuario('')
  setFotoUsuario('')
  setFotoPost('')
  }

  const listaPost = arrayPost.map((elemento, index) =>{
    return <Post
    nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}

    key={index}
    />
  })
  return(
    <div className='MainContainer'>

           {listaPost} 

           <div className='ContainerFormulario'>
           <label>Nome:</label>
           <input placeholder='nome' value={nomeUsuario} onChange={(event)=>{setNomeUsuario (event.target.value)}} />
           <label>Usuario URL:</label>
           <input placeholder='usuarioUrl' value={fotoUsuario} onChange={(event)=>{setFotoUsuario (event.target.value)}} />
           <label>Post URL:</label>
           <input placeholder='postUrl' value={fotoPost} onChange={(event)=>{setFotoPost (event.target.value)}}  />
           <button onClick={addNovoPost}>Enviar</button>


           </div>
         
  
      
    </div>
  
    
  )
  
  }
  
  


export default App;