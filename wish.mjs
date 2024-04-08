import { app } from "./app.mjs"

const characterList=await fetch("https://genshin.jmp.blue/characters")


export async function firstWish()
{
    app.style.backgroundColor="white"
    app.innerHTML=""
    const response=await fetch("https://genshin.jmp.blue/characters")
    const jsonData=await response.json()
    let pull=math.floor(math.random()*jsonData.length)

}