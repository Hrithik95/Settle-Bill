let total=0;
let cash=0;
let card=0;

function totalBill(value){
    total = +value;
    console.log(total);    
}

function updateCard(value){
    if(value>total){
        document.getElementById("total").value = 0
        alert("enter value less than total bill")
    }
    else{
        cash = value
        card = +(total-cash);
        document.getElementById('card').value = card;  
    }    
}

function updateCash(value){
    if(value>total){
        document.getElementById("total").value = 0;
        alert("enter value less than total bill")
    }
    else{
        card = value
        cash = +(total-card);
        document.getElementById('cash').value = cash;   
    }
}

function handleSubmit(){
    document.getElementById('successPrompt').innerText = `Cash Paid = ${cash} \n Amount paid online = ${card}`
}

function handleReset(){
    document.getElementById('total').value =0;
    document.getElementById('cash').value =0;
    document.getElementById('card').value = 0;
    document.getElementById('successPrompt').innerText =''
}
