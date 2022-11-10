
function drawComponents(){
    let data = JSON.parse(localStorage.getItem("items"));
    let list = document.querySelector("#ul");
    
    
    for(let item of data){
        
        if(item.registration_date.toString().includes('2022') && item.city_id == 2 )
        {
        list.innerHTML += `<li> <img src ="${item.img_src}" width ="40px" height ="40px"> ${item.title}
        <p>Address:${item.addresses}</p>
        <p>Phone Number:${item.phones}</p>
        <p>Instagram:${item.instagram}</p>
        </li>`;
        
    }
    }
}

async function loadData(){
    let response = await fetch("https://realibi.kz/courses");
    let body = await response.json();
     localStorage.setItem("items",JSON.stringify(body))   

    }
loadData().then(()=>drawComponents()) ;



