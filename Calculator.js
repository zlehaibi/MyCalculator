var memory_value = 0;
var mrc_check = false;

function myclick(a) {
    if(myform.display.value == "0")
    {
        myform.display.value = a;
    }
    else
    {
        myform.display.value += a;
    }
    mrc_check = false;
}
function equalto() {
    myform.display.value = eval(myform.display.value);
    memory_value = parseFloat(myform.display.value);
    mrc_check = false;
}
function clearto() {
    myform.display.value = "0";
    mrc_check = false;
}
function squarert() {
    myform.display.value = Math.pow(myform.display.value, 1 / 2);
    memory_value = parseFloat(myform.display.value);
    mrc_check = false;
}
function Mplus() {
    myform.display.value = memory_value + parseFloat(myform.display.value);
    memory_value = parseFloat(myform.display.value);
    mrc_check = false;
}

function Mminus() {
    myform.display.value = memory_value - parseFloat(myform.display.value);
    memory_value = parseFloat(myform.display.value);
    mrc_check = false;
}

function per() {
    myform.display.value += '%';
    mrc_check = false;
}

function mrc()
{
    if(mrc_check == false)
    {
        myform.display.value = memory_value;
        mrc_check = true;
    }
    else {
        memory_value = 0;
        myform.display.value = memory_value;
        mrc_check = false;
    }
}

function plusmin()
{
    if(myform.display.value[0] != '-')
    {
        myform.display.value = "-" + myform.display.value;
    }
    else if(myform.display.value[0] == '-')
    {
        myform.display.value = myform.display.value.substring(1, myform.display.value.length);
    }
}