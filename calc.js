var input_val=document.getElementById('inpValue');
var subInput_val = document.getElementById('subInputVal');
var his_center = document.getElementById('his_center');

function getVal(val)
{
    if(input_val.value === '0')
    { 
        input_val.value = val;
    }
    else
    {
        input_val.value += val;
    }
}

function clearAll()
{
    input_val.value = "0";
    subInput_val.value = "";
}

function removeLastDigit()
{
    if(input_val.value.length > 1)
    {
        input_val.value = input_val.value.slice(0, -1);
    }
    else
    {
        input_val.value = input_val.value.slice(0, -1);
        input_val.value = "0";
    }
}

function solve()
{
    var equ = input_val.value;
    subInput_val.value = equ + " =";
    var ans = eval(equ);
    input_val.value = ans;

}

function showHistory()
{
    var equ = subInput_val.value;
    var ans = input_val.value;
    historyBox.innerHTML += `<div class="his">
                            <p><b>${equ}</b>
                            <b>${ans}</b></p>
                        </div>`;
    

}

var flag = true;
function toggleHistory()
{
    if(flag)
    {   
        historyBox.style.visibility = "visible";
    }
    else{
        historyBox.style.visibility = "hidden"; 
    }
    flag = !flag; 
}


function clearHistory()
{
    var choice = confirm("are you sure you want to delete history ?");
    if(choice)
        document.getElementById('historyBox').innerHTML="";
}