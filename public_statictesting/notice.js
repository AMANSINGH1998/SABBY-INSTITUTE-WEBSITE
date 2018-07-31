window.onload= function(){
    let input=document.getElementById("input11")
    let btn=document.getElementById("btn")
    console.log(input);
    btn.onclick=function()
    {
       
       if(input.value==="sabbysir")
       {
            console.log("reached ")    
        location.replace("http://127.0.0.1:5500/notices.html")    
       }
    else
    {
        alert("NOT AUTHORIZED")
    }

}
}
