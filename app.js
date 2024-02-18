let x;
let y;
let z;
function but7_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'7';
}
function but8_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'8';
}
function but9_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'9';
}
function but_div_click(){
    x=Number(document.getElementById("txt01").value);
    console.log(typeof x);
    document.getElementById("txt01").value='/'
    z=(document.getElementById("txt01").value);
    console.log(typeof z);
}

function but4_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'4';
}
function but5_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'5';
}
function but6_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'6';
}
function but_mu_click(){
    x=Number(document.getElementById("txt01").value);
    console.log(typeof x);
    document.getElementById("txt01").value='*'
    z=(document.getElementById("txt01").value);
    console.log(typeof z);
}

function but1_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'1';
}
function but2_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'2';
}
function but3_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'3';
    
}
function but0_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'0';
    
}

function but_dot_click(){
    document.getElementById("txt01").value=document.getElementById("txt01").value+'.';
    
}
function but_eq_click(){
    let y=Number(document.getElementById("txt01").value);
    console.log(typeof y);
    if(z=='+'){
        document.getElementById("txt01").value=x+y;
    }else if(z=='-'){
        document.getElementById("txt01").value=x-y;
    }else if(z=='/'){
        document.getElementById("txt01").value=x/y;
    }else if(z=='*'){
        document.getElementById("txt01").value=x*y;
    }
}
function but_min_click(){
    x=Number(document.getElementById("txt01").value);
    console.log(typeof x);
    document.getElementById("txt01").value='-'
    z=(document.getElementById("txt01").value);
    console.log(typeof z);
    document.getElementById("txt01").value="";
}
function but_pl_click(){
    x=Number(document.getElementById("txt01").value);
    console.log(typeof x);
    document.getElementById("txt01").value='+'
    z=(document.getElementById("txt01").value);
    console.log(typeof z);

}
function but_cl_click(){
    document.getElementById("txt01").value="";
    
}
