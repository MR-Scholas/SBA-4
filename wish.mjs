import { app } from "./app.mjs"
import { gallery } from "./gallery.mjs"

export async function wish(galleryString)
{
    app.innerHTML=""
    app.style.fontFamily="HY"
    app.style.color="white"
    app.style.alignContent="normal"
    app.style.alignItems="normal"
    app.style.justifyContent="normal"
    const preResponse=await fetch("https://genshin.jmp.blue/characters")
    const preJsonData=await preResponse.json()
    
    let pullString=""
    if(galleryString===false)
    {
        let pull
        do
        {
            pull=Math.floor(Math.random()*preJsonData.length)
        } while(pull>=63 && pull<=67) //The Traveler can't be wished for in the original game
        pullString=preJsonData[pull]
    }
    else{pullString=galleryString}
    const response=await fetch(`https://genshin.jmp.blue/characters/${pullString}`)
    const jsonData=await response.json()
    
    const leftContainer=document.createElement("div")
    leftContainer.className="wishContainer"
    app.appendChild(leftContainer)
    const splash=document.createElement("img")
    splash.src=`https://genshin.jmp.blue/characters/${pullString}/gacha-splash`
    splash.addEventListener("error",()=>{splash.src=`https://genshin.jmp.blue/characters/${pullString}/card`})
    splash.style.maxHeight="100%"
    splash.style.height="auto"
    splash.style.width="auto"
    splash.style.objectFit="contain"
    splash.style.margin="auto"
    splash.style.display="block"
    leftContainer.appendChild(splash)

    const rightContainer=document.createElement("div")
    rightContainer.className="wishContainer"
    rightContainer.style.justifyContent="center"
    rightContainer.style.alignContent="flex-start"
    rightContainer.style.alignItems="flex-start"
    app.appendChild(rightContainer)

    const nameContainer=document.createElement("div")
    nameContainer.style.width="80%"
    nameContainer.style.height="10%"
    nameContainer.style.marginTop="15%"
    nameContainer.style.textAlign="right"
    nameContainer.innerHTML=
    `<p><h1>${jsonData.name}</h1></p><br>
    <p><h3>${jsonData.title}</h3></p>`
    rightContainer.appendChild(nameContainer)
    
    const tableContainer=document.createElement("div")
    tableContainer.style.width="100%"
    tableContainer.style.height="50%"
    tableContainer.style.display="flex"
    tableContainer.style.justifyContent="center"
    const wishTable=document.createElement("table")
    wishTable.style.width="80%"
    wishTable.style.textAlign="center"
    wishTable.style.backgroundColor="rgba(200,200,200,0.2)"
    const jsonKeys=Object.keys(jsonData)
    for(let x=2;x<10;x++)
    {
        let tableRow=document.createElement("tr")
        for(let y=0;y<2;y++)
        {
            let tableData=document.createElement("td")
            if(y===0){tableData.innerHTML=jsonKeys[x]}
            if(y===1){tableData.innerHTML=jsonData[jsonKeys[x]]}
            tableData.style.color="white"
            tableRow.appendChild(tableData)
        }
        wishTable.appendChild(tableRow)
    }
    tableContainer.appendChild(wishTable)
    rightContainer.appendChild(tableContainer)

    const buttonContainer=document.createElement("div")
    buttonContainer.style.height="20%"
    buttonContainer.style.width="100%"
    buttonContainer.style.display="flex"
    buttonContainer.style.justifyContent="center"
    buttonContainer.style.alignContent="center"
    buttonContainer.style.alignItems="center"
    rightContainer.appendChild(buttonContainer)
    const wishButton=document.createElement("button")
    wishButton.innerText="Wish"
    wishButton.addEventListener("click",function(){wish(false)})
    wishButton.style.width="30%"
    wishButton.style.height="20%"
    buttonContainer.appendChild(wishButton)
    const galleryButton=document.createElement("button")
    galleryButton.innerText="Gallery"
    galleryButton.addEventListener("click",function(){gallery()})
    galleryButton.style.width="30%"
    galleryButton.style.height="20%"
    buttonContainer.appendChild(galleryButton)
}