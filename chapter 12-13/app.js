// Task 1
var x=prompt("Enter Any Character");
var input=x.charCodeAt(0);
if(input>=65 && input<=90){
    document.write("Character is Uppercase letter"+"</br></br></br>");
}
else if(input>=97 && input<=122){
    document.write("Character is Lowercase Letter"+"</br></br></br>");
}
else{
    document.write("Character is a Digit or Special Char"+"</br></br></br>");
}

// Task 2
var a=+prompt("Enter first number ");
var b=+prompt("Enter second number");
if(a>b)
{
 document.write("First Number "+a+" is greater than Second number "+b+"</br></br></br>");  
}
else if(b>a)
{
 document.write("Second Number "+b+" is greater than First number "+a+"</br></br></br>");  
}
else if(a==b)
{
 document.write("Firs number "+a+" & "+" Second number "+b+" are equal"+"</br></br></br>");  
}

// Task 3
var a=+prompt("Enter any number");
if(a<0)
{
    document.write("Number is negative"+"</br></br></br>");
}
else if(a>0)
{
    document.write("Number is positive"+"</br></br></br>");
}
else if(a==0)
{
    document.write("Number is 0"+"</br></br></br>");
}

// Task 4
var a=prompt("Enter any character");
if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"||a=="A"||a=="E"||a=="I"||a=="O"||a=="U")
{
  document.write("Vowel"+"</br></br></br>");  
}
else{
    document.write("False"+"</br></br></br>");
}

// Task5
var password=prompt("Enter your password");
var cnfrmpassword
if(password=="")
{
 document.write("Please enter your password"+"</br></br></br>");  
}
else if(password!="")
{
cnfrmpassword=prompt("Enter your password again");
if(password==cnfrmpassword)
{
 document.write("Correct! The password you entered matches the original password"+"</br></br></br>");   
}
else
{
 document.write("Incorrect password"+"</br></br></br>");   
}
}

// Task 6
var hour = 13; 
if (hour < 18) 
{
 greeting = "Good day";
}
 else 
 {
 greeting = "Good evening"; 
} 

// Task 7
var time=+prompt("Enter your time");
if(time>=0000 && time<1200)
{
document.write("Good morning"+"</br></br></br>");
}
else if(time>=1200 && time<1700)
 {
    document.write("Good afternoon"+"</br></br></br>");
 }
 else if(time>=1700 && time<2100)
 {
    document.write("Good evening"+"</br></br></br>");
 }
 else if(time>=2100 && time<2359)
 {
    document.write("Good night"+"</br></br></br>");
 }