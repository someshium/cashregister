


function handleClick() {

    document.querySelector(".output").style.display = "contents";


    let shop=  document.getElementById("amount");
    
    let  given = document.getElementById("amount_given");
    
    let diff=0
    
    if(shop.value && given.value){
    
     diff = given.value - shop.value;
    console.log(diff)
    }
    
    let rem =0,x=0,y=0,z=0,z10=0,z5=0,z1=0;
    // number of 2000 rs notes
    if(diff >=2000){
    
    
     x= Math.floor(diff/2000);
    diff =  diff %2000;
    
    
    
    
    }
    
    // no of 500 rs notes
    if(diff >=500)
    {
    
     y = Math.floor(diff/ 500);
    diff = diff%500
    console.log(diff)
    
    
    }
    
    // no of 100 rs notes;
    
    if(diff >=100){
    
     z = Math.floor(diff / 100);
    diff = diff % 100;
    console.log(diff)
    
    }
    
    // no of 10 rs notes;
    if(diff >=10){
     z10  = Math.floor(diff/ 10);
    diff = diff % 10;
    console.log(diff)
    }
    
    // no of 5rs notes;
    if(diff >=10){
     z5 = Math.floor(diff / 5);
    diff = diff %5;
    console.log(diff)
    }
    
    // no of 1rs coin
    if(diff >= 1){
     z1 = diff
     
     
     
    }
    
   
    
    document.getElementById("two_thousand").innerHTML = x;
    document.getElementById("five_hundred").innerHTML = y;
    document.getElementById("hundred").innerHTML = z;
    document.getElementById("ten").innerHTML = z10;
    document.getElementById("five").innerHTML = z5;
    document.getElementById("one").innerHTML = z1;

    
    
    
    
    
    
    
    
    }
    