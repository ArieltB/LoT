let tovari=[
    {
        image:"kartFORiT/Умные часы Haylou Smart Watch 2 LS02.jpg",
        name:"Умные часы HONOR Watch 4 ",
        articul:"12263787545653365",
        cost:175
    },
    {
        image:"kartFORiT/Watch_GT_4_46_Black_1.jpg",
        name:"Смарт-часы Huawei Watch GT 4 46 мм",
        articul:"18957887545653365",
        cost:175
    },
    {
        image:"kartFORiT/умные часы2.jpg",
        name:"Умные часы Xiaomi Watch S3 M2323W1",
        articul:"987235754357737373",
        cost:275
    },
    {
        image:"kartFORiT/телефон3.jpg",
        name:"Смартфон Xiaomi Redmi A2+ 3GB/64GB EU",
        articul:"34525786484774",
        cost:1250
    },
    {image:"kartFORiT/телефон2.jpg",
        name:"Смартфон Honor Magic6 Pro (BVL-N49) 12GB/512GB",
        articul:"23423946825",
        cost:1500
    },
    {image:"kartFORiT/zagruzhennoe-_10_.webp",
    name:"Смартфон Xiaomi Redmi 12 8/256Gb",
    articul:"679149635652692367",
    cost:1000
},
    {image:"kartFORiT/ноут3.jpg",
        name:"Игровой ноутбук Lenovo LOQ 15IRH8 82XVXFFE",
        articul:"12663336643646",
        cost:2500
    },
    {image:"kartFORiT/ноут2.jpg",
        name:"Ноутбук Lenovo IdeaPad Slim 3 16IAH8 83ES0011",
        articul:"1233567883625",
        cost:2560
    },
    {image:"kartFORiT/good_img_8a424a48-b541-11ea-80c8-005056840c70_600.jpg",
        name:"Ноутбук Apple MacBook Air 13 A2179 (Z0YJ000SZ)",
        articul:"1295756734574",
        cost:2000
    },
    {image:"kartFORiT/plan1.webp",
    name:"Планшет 1",
    articul:"123146631247",
    cost:1700
},

{image:"kartFORiT/plan2.webp",
name:"Планшет 2",
articul:"1231357623546",
cost:1800
},
{image:"kartFORiT/plan3.jpg",
name:"Планшет 3",
articul:"123234622524",
cost:1600
},


]

let cardName= document.getElementsByClassName("name");
let cardArtic=document.getElementsByClassName("artic");
let cardCost=document.getElementsByClassName("cost");
let cardButton=document.getElementsByClassName("AddButton");
let cardImage=document.getElementsByClassName("ima")
let cost=document.getElementById("cost")
let inputPol=document.getElementById("searchField");


for(let i=0;i<tovari.length;i++){
    let newDiv=document.createElement("div");
    newDiv.className="cartochka";
    document.getElementById("catalog").appendChild(newDiv);
    let newIma=document.createElement("img");
    newIma.className="ima";
    newIma.src=tovari[i].image
    newDiv.appendChild(newIma);
    let newH2=document.createElement("h2");
    newH2.className="name";
    newH2.innerHTML="Название: " + tovari[i].name
    newDiv.appendChild(newH2);
    let newH1=document.createElement("h2");
    newH1.className="artic";
    newH1.innerHTML="Артикул: " + tovari[i].articul
    newDiv.appendChild(newH1);
    let newP=document.createElement("p");
    newP.className="cost";
    newP.innerHTML="Цена: " + tovari[i].cost
    newDiv.appendChild(newP);
    let newButton=document.createElement("button")
    newButton.className="AddButton"
    newButton.innerHTML="Купить"
    newDiv.appendChild(newButton);
    newButton.setAttribute("onclick","addBasket("+tovari[i].articul+")");
}


function Searching(){
  
    if(inputPol.value==""){
        inputPol.placeholder="Введите данные"
    }
    else{
        let result=[];
        console.log(inputPol)
        document.getElementById("catalog").style.display="none";
        for(let i=0; i<tovari.length; i++){
            if(tovari[i].name.includes(inputPol.value)){
                console.log("jtgfe")
                result.push(tovari[i]);
                }
        }
        if(result.length==0){
            document.getElementById("textResult").innerHTML="Ничего не найдено"
        }
        else{
            for(let i=0;i<result.length;i++){
                let newDiv=document.createElement("div");
                newDiv.className="cartochka";
                document.getElementById("textResult").appendChild(newDiv);
                let newH2=document.createElement("h2");
                
                newH2.className="name";
                newH2.innerHTML=result[i].name;
                newDiv.appendChild(newH2);
                let newIma=document.createElement("img");
                newIma.className="ima";
                newIma.src=tovari[i].image
                newDiv.appendChild(newIma);
                let newH1=document.createElement("h2");
                newH1.className="artic";
                newH1.innerHTML="Артикул: " + tovari[i].articul
                newDiv.appendChild(newH1);
                let newP=document.createElement("p");
                newP.className="cost";
                newP.innerHTML="Цена: " + tovari[i].cost
                newDiv.appendChild(newP);
                let newButton=document.createElement("button")
                newButton.className="AddButton"
                newButton.innerHTML="Купить"
                newDiv.appendChild(newButton);
                newButton.setAttribute("onclick","addBasket("+tovari[i].articul+")");
                
                
            }
        }
    }
   
}
let basketTovar=[];
let summaCheck=0;
function addBasket(name){
   for(let i=0;i<tovari.length; i++){
    if(tovari[i].articul==name){
        basketTovar.push(tovari[i].name+"   "+ tovari[i].articul+"-----------"+tovari[i].cost)
        summaCheck=summaCheck+tovari[i].cost;
        document.getElementById("basketSumma").innerHTML=summaCheck;
     }
   }
}
function openBasket(){
    document.getElementById("spisokTovarov").innerHTML=" ";
    for(let i=0;i<basketTovar.length;i++){
        document.getElementById("spisokTovarov").innerHTML=document.getElementById("spisokTovarov").innerHTML+"<br>"+basketTovar[i];
    }
    document.getElementById("summaTovarov").innerHTML="<h>"+"<br>"+summaCheck+"p";
    document.getElementById("dialo").showModal();
}
