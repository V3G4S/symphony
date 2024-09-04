let txt = "Gabrielli saiu do meu lugar, arrasou"
let letra = 'l'

console.log(txt)
for(let i = 0; i < txt.length; i++){
    if(txt[i] == 'l'){
        console.log(i)
    }
}
novo = txt.replace("arrasou", "amassou")
console.log(novo)

console.log(txt.includes('z')) //Descobre se a frase inclui ou não, o parâmetro
console.log(txt.indexOf("l")) //Mostra a posição do primeiro item do parâmetro
console.log(txt.lastIndexOf("l")) //Mostra a última posição do item do parâmetro
console.log(txt.concat(novo)) //Concatena com outra frase
console.log(txt.startsWith("G")) //Descobre se começa com o parâmetro
console.log(txt.substring(10, 36)) //Define uma parte de uma String