export const app=document.getElementById("app")
import { wish } from "./wish.mjs"

const paimonContainer=document.createElement("div")
paimonContainer.style.display="flex"
paimonContainer.style.border="solid 1px white"
paimonContainer.style.height="10%"
paimonContainer.style.width="25%"
app.appendChild(paimonContainer)
const paimon=document.createElement("img")
paimon.src="paimon.png"
paimon.style.borderRight="solid 1px white"
paimon.style.height="100%"
paimonContainer.appendChild(paimon)
const paimonText=document.createElement("div")
paimonText.style.color="white"
paimonText.style.margin="auto"
paimonText.innerText+="Welcome, Traveler! Make a wish to begin!"
paimonContainer.appendChild(paimonText)

const starterButtonContainer=document.createElement("div")
starterButtonContainer.style.width="100%"
starterButtonContainer.style.height="5%"
starterButtonContainer.style.margin="2%"
starterButtonContainer.style.textAlign="center"
app.appendChild(starterButtonContainer)
const starterButton=document.createElement("button")
starterButton.innerText="Wish"
starterButton.addEventListener("click",function(){wish(false)})
starterButton.style.width="10%"
starterButton.style.height="100%"
starterButtonContainer.appendChild(starterButton)