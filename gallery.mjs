import { app } from "./app.mjs"
import { wish } from "./wish.mjs"

export async function gallery()
{
    app.innerHTML=""
    app.style.fontFamily="HY"
    app.style.color="white"
    app.style.alignContent="normal"
    app.style.alignItems="normal"
    app.style.justifyContent="normal"
    const preResponse=await fetch("https://genshin.jmp.blue/characters")
    const preJsonData=await preResponse.json()
}