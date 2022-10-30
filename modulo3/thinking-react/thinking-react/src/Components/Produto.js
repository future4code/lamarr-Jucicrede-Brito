import React from "react";
import {FormNovoProduto, InputProdutos, BottaoProdutos} from "../Style"

const Produto = (props) => {
    const componentsDados=props.myDados.map((item,index)=>{
        return <li key={index}>{item.text}</li>
    })

    return(
        <FormNovoProduto>
            {componentsDados}
            <InputProdutos placeholder="NovoProduto"/>
            <BottaoProdutos>Adicionar ao Carinho</BottaoProdutos>
        </FormNovoProduto>

    )

}

export default Produto;