// your code here
let url = document.getElementById("url");
let submit = document.getElementById("button");
let name = document.getElementById("name");
let year = document.getElementById("year");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let NAME = name.value;
    let YEAR = year.value;
    if(NAME == "" && YEAR != ""){
        url.innerText="https://localhost:8080/?year="+`${YEAR}`;    
    }else if(NAME != "" && YEAR == ""){
        url.innerText="https://localhost:8080/?name="+`${NAME}`;
    }else{
        url.innerText="https://localhost:8080/?name="+`${NAME}`+"&year="+`${YEAR}`;
    }
});