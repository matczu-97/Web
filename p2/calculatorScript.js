
let equationToSolve="";

// not implemented all function
function FunctionalMessageNoReady()
{
    alert("Not implemented funtion");
}

// concatenating string to evaluate later
function createEquation(char)
{
    equationToSolve +=char;
    update(equationToSolve);
    console.log(equationToSolve);
}

// delete equation
function deleteAll()
{
    equationToSolve="";
    update("0");
}

// try to solve equation if it in mathmaticlly correct
function solveEquation()
{
    try
    {  
        equationToSolve =  eval(equationToSolve)
        update(equationToSolve);
    }catch(error)
    {
        alert("calculation error check equation");
    }
}


function removeOneChar()
{
    equationToSolve = equationToSolve.slice(0, -1);
    update(equationToSolve);
}

// use function to wrap the getElement for shorter calling and depricated future effects 
function update(char)
{
    document.getElementById("monitor").innerHTML = char;
}

// calculate the factorial imidiatelly according to the last number the was entered
// ==================
// go backwards until reaching first math sign. and than calculate the !n 
// than slicing the original equation
//==================
function factorial()
{
    let equation = equationToSolve
    try{
    var length = equationToSolve.length
    i=equation.length-1 
    // backward loop
    while(i >= 0 && !isNaN(Number(equation[i])))
    {
        i--;
    }
    // calculating the fuctorial 
    i++;
    number = eval(equation.slice(i,length))
    number =  fuctorial_calc(number)

    // creating the new equation
    equationToSolve = equationToSolve.slice(0,i) + `${number}` 
    
    // update screen for the user
    update(equationToSolve)
    }catch(error)
    {
        alert("not the right order")
    }
    
}

function fuctorial_calc(n)
{
    return n == 0 || n == 1 ? n : n*fuctorial_calc(n-1)
}