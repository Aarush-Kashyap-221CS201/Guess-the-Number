const check = () =>{
    if (x.value==count){ ans.textContent="CORRECT!"; setTimeout(function(){reset();},2000); }
    else{
        tries--;
        if (tries<0){ ans.textContent="THE CORRECT NUMBER WAS "+count+"\nBETTER LUCK NEXT TIME!"; setTimeout(function(){reset();},4000); }
        else{
            if (x.value>count) ans.textContent="You are higher";
            else ans.textContent="You are lower";
            s.innerText="Extra Attempts: "+tries+"/5";
        }
    }
}

const reset = () =>{
    tries=5;
    count=Math.floor(Math.random()*10)+1;
    x.value="";
    ans.textContent="";
    s.innerText="Extra Attempts: 5/5";
}

let count=Math.floor(Math.random()*10)+1;
let tries=5;
let x=document.getElementById("input");
let s=document.getElementById("tries");
let ans=document.getElementById("msg");