
let spieler = [
    {
    name : "Benziam",
    vorname: "Karim",
    email : " benzema-9@realmadrid.com"
    },
    {
    name : "Bale",
    vorname: "Garith",
    email : "bale@hospital.golf"
    },{
        name : "ali",
        vorname: "Alkhiame",
        email : "jane@doe.org"
        },{
            name : "crap",
            vorname: "capry",
            email : "kr@bar.com"
            }
   ];
   let x=0;
let button=document.getElementById("btn");
button.addEventListener("click", ()=>{
    btn.style.display = 'none';
if(x==0){
    x++;
    let table =document.createElement("table");
    let tr=document.createElement("tr");
    table.append(tr);
    let td = document.createElement("td");
    td.append("name"+" ");
    tr.append(td);
    td.append("vorname"+" ");
    tr.append(td);
    td.append("Email"+" ");
    tr.append(td);
     
for(let j = 0;j<spieler.length;j++){
   
    let tr=document.createElement("tr");
    table.append(tr);
    let td = document.createElement("td");
    
    td.append(spieler[j].name+" ");
    td.append(spieler[j].vorname+" ");
    td.append(spieler[j].email+"");
    
    tr.append(td);
    var lm = document.createElement('input');
lm.type = "button";

lm.value = "add";
lm.addEventListener('click', function() {
    creatAList(j);
});
td.appendChild(lm);
var lm1 = document.createElement('input');
lm1.type = "button";

lm1.value = "delet";
lm1.addEventListener('click', function() {
    deletAList(j);
});
td.appendChild(lm1);
}
console.log(table);
let tablediv=document.getElementById("tablediv");
tablediv.append(table);

}
});

let dings=[];
let count=0;
let cars = [];
function creatAList(k){
 
 
    if(dings[k]==spieler[k]){
        return;
    }else{
     
        dings[k]=spieler[k].name+" "+spieler[k].vorname ;
       
        console.log(dings);
        return ll(k);
 
}
 
}



function ll(m){
    document.getElementById("list").innerHTML="<ul>";
    for(let i =0;i<dings.length;i++){
        if(dings[i]=="")continue;
        document.getElementById("list").innerHTML+="<li>";
    document.getElementById("list").innerHTML+=dings[i];
    document.getElementById("list").innerHTML+="</li>";
}
    document.getElementById("list").innerHTML+="</ul>";
}
function deletAList(j){
 
    console.log(dings);
    dings[j]=""; 
    document.getElementById("list").innerHTML="<ul>";
    for(let i =0;i<dings.length;i++){
        if(dings[i]=="")continue;
        document.getElementById("list").innerHTML+="<li>"+dings[i]+"</li>";
     
    
}
    document.getElementById("list").innerHTML+="</ul>";
}