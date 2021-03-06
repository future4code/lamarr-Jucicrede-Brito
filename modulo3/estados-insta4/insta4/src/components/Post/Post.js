import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


function Post(props){
  
  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [respostaUsuario, setRespostaUsuario] = useState("")
  

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (curtido){
      setNumeroCurtidas(numeroCurtidas - 1);
    }else {
      setNumeroCurtidas(numeroCurtidas + 1);
    }
    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)

    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setRespostaUsuario("")
    setNumeroComentarios(numeroComentarios + 1)

    console.log(respostaUsuario)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario valorInput={respostaUsuario} onChangeComentario={(event)=>{setRespostaUsuario(event.target.value);}} aoEnviar={aoEnviarComentario}/>
    }

  return(
    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post