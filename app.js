function add(){
    var val = 0, b = 0;
    val = f.ddd.value;
    b = val.charAt(val.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        f.ddd.value = val.substring(0, val.length-1);
        f.ddd.value += '+';
    }
    else{
        f.ddd.value += '+';
    }
}

function sub(){
    var val = 0, b = 0;
    val = f.ddd.value;
    b = val.charAt(val.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        f.ddd.value = val.substring(0, val.length-1);
        f.ddd.value += '-';
    }
    else{
        f.ddd.value += '-';
    }
}

function divide(){
    var val = 0, b = 0;
    val = f.ddd.value;
    b = val.charAt(val.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        f.ddd.value = val.substring(0, val.length-1);
        f.ddd.value += '/';
    }
    else{
        f.ddd.value += '/';
    }
}

function mul(){
    var val = 0, b = 0;
    val = f.ddd.value;
    b = val.charAt(val.length-1);
    if(b == '+' || b == '-' || b == '/' || b == '*'){
        f.ddd.value = val.substring(0, val.length-1);
        f.ddd.value += '*';
    }
    else{
        f.ddd.value += '*';
    }
}