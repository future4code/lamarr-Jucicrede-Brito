import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const arrayPost = [
    {nomeUsuario:"Eloísa", fotoUsuario:"https://picsum.photos/id/237/200/300", fotoPost:"https://picsum.photos/200/150"},
    {nomeUsuario:"Paulo", fotoUsuario:"https://picsum.photos/51/52", fotoPost:"https://picsum.photos/250/180"},
    {nomeUsuario:"Neto", fotoUsuario:"https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE", fotoPost:"https://picsum.photos/100/150"},
    
  ]

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

           {console.log(arrayPost)}
  
      
    </div>
  
    
  )
  
  }
  
  


export default App;