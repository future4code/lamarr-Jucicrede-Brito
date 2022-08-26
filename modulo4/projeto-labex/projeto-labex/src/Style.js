import styled from "styled-components";

export const ContainerHome = styled.div`
background-image: url(https://dasartes.com.br/dasartes.com.br/wp-content/uploads/2022/07/main_image_star-forming_region_carina_nircam_final-5mb-1024x593-1.jpeg);
background-size:cover;
width: 100vw;
height: 100vh;
`
export const TitleHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size:50px;
color: white;
text-shadow:0 9px 5px black;
height: 30vh;
`
export const TitleMove = styled.div`
 font-size: 30px;
 font-weight: bold;
 font-family: Courier;
 text-shadow:0 9px 5px dodgerBlue;
 color: aquamarine;
`
export const MyButton = styled.button`
 padding:10px ;
 width: 10%;
 margin: 0 15px;
 margin-top: 2px;
 background: Navy;
 font-weight: bold;
 text-transform: uppercase;
 color: white;
 font-size:15px ;
 text-shadow: 1px 1px 2px black;
 :hover{
    background-color: DeepSkyBlue;
 }`
export const ContainerTravel = styled.div`
background-image: url(https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/03/planeta-sistema-solar.jpg);
background-size:cover;
width: 100%;
height: 30vh;
`
export const H1 = styled.div`
display: flex;
align-items: center;
font-weight: bold;
justify-content: center;
font-size: 40px;
color: blue;
text-shadow:0 9px 5px lightSkyBlue;
height: 10vh;
`
export const Travel = styled.div`
 display: flex;
flex-direction: column;
align-items: center;
justify-content: stretch;
font-size: 25px;
color: blue;
height: 50vh;
color: black;
width: max-content;
margin:0 auto;
padding: 1px;
`
export const MyButton2 = styled.button`
 padding:5px ;
 width: 40%;
 height: 40%;
 margin: 0 15px;
 margin-top: 2px;
 border: 1px solid darkTurquoise;
 background: darkTurquoise;
 font-weight: bold;
 text-transform: uppercase;
 color: white;
 font-size:10px ;
 text-shadow: 1px 1px 2px black;
 :hover{
    background-color: lightSkyBlue;
 }
`
export const MyForm=styled.form`
    display: flex;
    flex-direction:column;
    
    margin: 0 auto;
    width: max-content;
    padding: 30px;
    border: 2px solid blue;
    border-radius: 15px;
    label{
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        border-top: 1px solid blue;
        border-bottom: 1px solid blue;
    }
    input{
        font-size: 16px;
        padding: 5px;
        border: 1px solid blue;
        background: lightcyan;
        margin: 4px 0 4px 0;
        font-weight: bold;
}
   button{
      padding:5px ;
     width: 40%;
     margin: 0 5px;
     margin-top: 1px;
     background: blue;
     font-weight: bold;
     text-transform: uppercase;
     color: white;
     font-size:10px;
     border: 1px solid blue;
     margin: 0 55px;
    
   }`