// const nick = new Date();

// alert(nick)
let total=0
let valeur=document.querySelector("span")
valeur.textContent=total
let form1=document.querySelector(".form1")
let number = JSON.parse(localStorage.getItem('montant')) || [];

form1.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    let montantDepot=parseInt(document.querySelector("form #montant").value)
    let provenance=document.querySelector("form #provenance").value
    // localStorage.setItem('montantDepot',montantDepot)
    // localStorage.setItem('provenance',provenance)
    
    let recharge=`
        <div>
            <h4>${"Depot"}</h4>
            <p>${"Somme:"} ${montantDepot} </p>
            <p> ${provenance} </p>
            <p>${Date()}</p>
        </div>
    `
    
    let historique=document.querySelector(".transaction")
    historique.innerHTML+=recharge
    let solde =document.querySelector("span")
    
  
    total=total+montantDepot
    
    solde.textContent=total

       
    // //     butrecharge.disabled = true

    let vide1 =document.querySelector('.form1 #montant')
    vide1.value=''
    let vide2 =document.querySelector('.form1 #provenance')
    vide2.value=''


})

let form2=document.querySelector(".form2")

form2.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    let montantRetrait=parseInt(document.querySelector("form #montantR").value)
    let provenance=document.querySelector("form #provenance").value
  
    total=total-montantRetrait
    

    if (total<0) {
        montantRetrait=total+montantRetrait
        total=0
       
    }
    let recharge=`
        <div>
            
            <h3>${"Retrait"}</h3>
            <p>${"Somme:"} ${montantRetrait} </p>
            <p> ${provenance} </p>
            <p>${Date()}</p>
        </div>
    `

    let historique=document.querySelector(".transaction")
    historique.innerHTML+=recharge
        

    let solde =document.querySelector("span")
  
    solde.textContent=total
    // let butretrait=document.querySelector("#butretrait")
    // if (montantRetrait === '') {
       
    //     butretrait.disabled = true
    // } 
    
    let effacer1 =document.querySelector("#montantR")
    effacer1.value=''
    let effacer2 =document.querySelector("#Utiliter")
    effacer2.value=''
   

})

let depot=document.querySelector("#depot")
let retrait=document.querySelector("#retrait")
depot.classList.add("orange")
depot.addEventListener("click",()=>{
    form1.classList.remove("form2")
    form2.classList.add("form2")
    depot.classList.add("orange")
    retrait.classList.remove("orange")
    let effacer1 =document.querySelector("#montantR")
    effacer1.value=''
    let effacer2 =document.querySelector("#Utiliter")
    effacer2.value=''
    
    
    
})
retrait.addEventListener("click",()=>{
    form2.classList.remove("form2")
    form1.classList.add("form2")
  
    retrait.classList.add("orange")
    depot.classList.remove("orange")
   
    let vide1 =document.querySelector('.form1 #montant')
    vide1.value=''
    let vide2 =document.querySelector('.form1 #provenance')
    vide2.value=''
})









