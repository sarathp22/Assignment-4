// problem 1

var a1=[];
var x1=0;

// function fun1()
// {
    
    
//     document.getElementById("out1").innerHTML="<label>Enter Elements</label><input type='number' id='input1'><button onclick='fun12()'>Submit</button> ";
    
// }
function fun11()
    {
        // var in11=Number(document.getElementById("in1").value);
        a1[x1]=document.getElementById("in1").value;
        // document.getElementById("input1").innerHTML="<input type='number' id='input1'>";
        document.getElementById("out11").innerHTML="<input type='number' id='in1'>";
        // console.log(in11);
        x1++;
        document.getElementById("out1").innerHTML="";

    }
    function fun12()
    {
        var n1=a1.length;
        // console.log(a1);
        var count=0;
        for(var i=a1[0];i>=1;i--)
        {
            if(a1[0]%i==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            document.getElementById("out1").innerHTML="First Element " + a1[0] + " is a prime number";
        }
        else{
            document.getElementById("out1").innerHTML="First Element " + a1[0] + " is not a prime number";
            }
            x1=0;
            console.log(a1);
            for(var i=0;i<n1;i++)
        {
            a1.pop();
        }
    }

// problem 2

var a2=[];
var x2=0;
function fun2()
{
    a2[x2]=document.getElementById("in2").value;
    x2++;
    document.getElementById("out22").innerHTML="<input type='text' id='in2'>";
}
function fun21()
{
    
    var x21=a2.length;
    var count21=0;
    var count22=0;
    var value2;
    for(var i=0;i<x21;i++)
    {
        count21=0;
            for(var j=0;j<x21;j++)
            {
                if(a2[i]==a2[j])
                {
                    count21++;
                }
            }
            if(count21>count22)
            {
                
                count22=count21;
                value2=a2[i];
                
            }
           
    }
    console.log(count22);
    if(count22 >= 2)
    {
    document.getElementById("out2").innerHTML="Most Freequent Item is " + value2 + " " + count22 + " times" ;
    }
    else
    {
        document.getElementById("out2").innerHTML="No freequent items";
    }   
    document.getElementById("out22").innerHTML="<input type='text' name='' id='in2'>";
    x2=0;
    console.log(a2);
    for(var j=0;j<x21;j++)
            {
                // a2[j]="\0";
                a2.pop();
            }
            
}

// problem 3

function fun3()
{
    var a3=document.getElementById("in3").value;
    var b3="";
    var n3=a3.length;
    for(var i=0; i<n3;i++)
    {
        if(a3[i]==a3[i].toLowerCase())
        {
            b3=b3+a3[i].toUpperCase();
        }
        else
        {
            b3=b3+a3[i].toLowerCase();
        }
    }
    document.getElementById("out3").innerHTML=b3;
    document.getElementById("out31").innerHTML="<input type='text' name='' id='in3'>";
}

// problem 4
// array elements entering

var x4=0;
var a4=[];
function fun41()
{
    a4[x4]=document.getElementById("in4").value;
    x4++;
    document.getElementById("out41").innerHTML="<input type='number' id='in4'></input>";

}
function fun42()
{
        var c4=0;
        console.log(a4);
        var b4=a4.length;
        for(var i=0;i<b4;i++)
        {
            c4=c4+(a4[i]*a4[i]);
        }
        document.getElementById("out4").innerHTML="Sum of Square of Elements of the array is " + c4; 
        x4=0;
        for(var i=0;i<b4;i++)
        {
            a4.pop();
        }
}

// problem 5

function fun5()
{
    var a5="";
    for(var i=0;i<=15;i++)
    {
        if(i%2==0)
        {
            a5=a5 + i + " is Even Number" + "<br>";
        }
        else
        {
            a5=a5 + i + " is Odd Number" + "<br>";
        }
    }
    document.getElementById("out5").innerHTML=a5;
}

// problem 6

function fun6()
{
    var a6=document.getElementById("in6").value;
    var b6;
    if(a6.length>6)
    {
        b6=a6.slice(0,6);
        document.getElementById("out6").innerHTML="Input truncated due to large size greater than 6: " + b6;
    }
    else
    {
        document.getElementById("out6").innerHTML="Input has length less than or equal to 6 : " + a6;
    }
    document.getElementById("out61").innerHTML="<input type='text' name='' id='in6'>";
}

// problem 7

function findLarge()
{
    var a7=document.getElementById("in71").value;
    var b7=document.getElementById("in72").value;
    if(Number(a7)>Number(b7))
    {
        document.getElementById("out7").innerHTML="Largest Number: " + a7;
    }
    else
    {
        document.getElementById("out7").innerHTML="Largest Number: " + b7;
    }
    document.getElementById("out71").innerHTML="<input type='number' name='' id='in71'>";
    document.getElementById("out72").innerHTML="<input type='number' name='' id='in72'>";
}

// problem 8

var x8=0;
var b8=[];
function fun81()
{
b8[x8]=document.getElementById("inp8").value;
document.getElementById("out81").innerHTML="<input type='text' name='' id='inp8'>";
x8++;
}
function fun82()
{
    var n8=b8.length;
    for(input in b8)
    {
        b8=b8.sort();
        console.log(input);
    }
    
    document.getElementById("out8").innerHTML="Array Objects after sorting: " + b8;
    var x8=0;
    for(var i=0;i<n8;i++)
    {
        b8.pop();
    }
}

// problem 9

function fun9()
{
var in9 = "JavaScript";
var a9="";
var out91="";
var out92="";
var out93="";

for (a9 of in9) 
{
    out92=out92 + a9;

    out91=out92 + "<br>";
    out93=out93 + out91;
    // document.write(out91);
    
}
document.getElementById("out9").innerHTML=out93;
}

// problem 10

function fun10()
{
    var a10=parseInt(document.getElementById("in10").value);
    if(a10!="")
    {
    var o10="";
    for(var i=0;i<a10;i++)
    {
        for(var j=0;j<i+1;j++)
        {
            o10=o10 + ' *' ;
        }
        o10=o10 + '<br>';
    }
    document.getElementById("out10").innerHTML=o10;
    console.log(o10);
    }
    else
    {
        document.getElementById("out10").innerHTML="Hai";
        console.log(a10);
        // document.getElementById("out10").style="color:red;";
    }
}