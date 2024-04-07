async function apiTest() 
{
    const app=document.getElementById("app")
    const response=await fetch("https://genshin.jmp.blue/")
    const jsonData=await response.json()
    app.innerText=JSON.stringify(jsonData)
}
apiTest()