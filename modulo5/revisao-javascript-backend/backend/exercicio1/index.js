const converterTemperatura = (temperatura, escala) =>{
    let resultado;
    let autenticacao;
    let calculo = 0;
    escala === "F" ? calculo = Number(temperatura) * 1.8 + 32 :
    escala === "K" ? calculo = Number(temperatura) + 273.15 : {};
    if( escala === "F" && typeof temperatura !== "string"){
        return resultado = `${temperatura}° Celsius é equivalente a ${calculo.toFixed(2)}`
    } else if ( escala === "K"){
       return resultado = `${temperatura}° Celsius é equivalente a ${calculo} Kelvin.`
    } else{
        return resultado = `Erro.Parâmetro inválido (${autenticacao}).`
    }

  return resultado
}

console.log(converterTemperatura(100,"K"));
