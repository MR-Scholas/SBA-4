import { app } from "./app.mjs"
import { wish } from "./wish.mjs"

export async function gallery()
{
    app.innerHTML=""
    app.style.fontFamily="HY"
    app.style.color="white"
    app.style.alignContent="center"
    app.style.alignItems="center"
    app.style.justifyContent="center"
    
    const galleryContainer=document.createElement("div")
    galleryContainer.style.height="80%"
    galleryContainer.style.width="80%"
    galleryContainer.style.border="solid white 5px"
    galleryContainer.style.display="flex"
    galleryContainer.style.alignContent="space-around"
    galleryContainer.style.alignItems="space-around"
    galleryContainer.style.justifyContent="space-around"
    galleryContainer.style.flexWrap="wrap"
    galleryContainer.style.padding="2%"
    app.appendChild(galleryContainer)

    const response=await fetch("https://genshin.jmp.blue/characters")
    const jsonData=await response.json()
    
    for(let x=0;x<jsonData.length;x++)
    {
        if(x<63||x>67)
        {
            let currentString=jsonData[x]
            let imgContainer=document.createElement("div")
            imgContainer.style.height="10vh"
            imgContainer.style.width="10vh"
            imgContainer.style.border="solid white 1px"
            imgContainer.addEventListener("click",function(){wish(`${currentString}`)})
            imgContainer.style.cursor="pointer"
            galleryContainer.appendChild(imgContainer)
            let img=document.createElement("img")
            img.style.height="100%"
            img.style.width="100%"
            img.style.margin="auto"
            img.style.display="block"
            img.style.objectFit="contain"
            img.src=`https://genshin.jmp.blue/characters/${currentString}/icon-big`
            imgContainer.appendChild(img)
        }
    }
}