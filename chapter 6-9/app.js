// Task 1
var a=10;
document.write("Result:</br>");
document.write("The value of a is :"+a+"</br></br>");
document.write("..............................</br></br>");
document.write("The value of ++a is :"+ ++a+"</br>");
document.write("Now the value of a is:"+a+"</br></br>");
document.write("The value of a++ is :"+ a++ +"</br>");
document.write("Now the value of a is:"+a+"</br></br>");
document.write("The value of --a is :"+ --a+"</br>");
document.write("Now the value of a is:"+a+"</br></br>");
document.write("The value of a-- is :"+ a-- +"</br>");
document.write("Now the value of a is:"+a+"</br></br></br>");

// Task 2
var a=2,b=1;
var result=--a - --b + ++b + b--;
//           1 -   0 +  1  + 1=3
// --a The value that store in a will be decrement and change it to 1
// --a - --b The value of a after changes it to 1 subtract from 0 0 comes by decrement of b 
// --a - --b + ++b 1 subtract from 0 = 1 and then add it into 1= 2 
// --a - --b + ++b +b-- after getting 2 add it into 1 =3 final answer we get and be value changes to 0 after decrement
document.write("a is :"+a+"</br>");
document.write("b is :"+b+"</br>");
document.write("result is :"+result+"</br></br></br>");

// Task 3
var name=prompt("Enter Your Name");
document.write("Welcome "+name+"</br></br></br>");

// Task 4
var num=+prompt("Enter a number to generate table");
if(num!=0)
{
    document.write("Table of "+num+"</br>");
    document.write(num+"x"+"1="+num*1+"</br>");
    document.write(num+"x"+"2="+num*2+"</br>");
    document.write(num+"x"+"3="+num*3+"</br>");
    document.write(num+"x"+"4="+num*4+"</br>");
    document.write(num+"x"+"5="+num*5+"</br>");
    document.write(num+"x"+"6="+num*6+"</br>");
    document.write(num+"x"+"7="+num*7+"</br>");
    document.write(num+"x"+"8="+num*8+"</br>");
    document.write(num+"x"+"9="+num*9+"</br>");
    document.write(num+"x"+"10="+num*10+"</br></br></br>");
}
else if(num==0) {
    document.write("Table of "+5+"</br>");
    document.write(5+"x"+"1="+5*1+"</br>");
    document.write(5+"x"+"2="+5*2+"</br>");
    document.write(5+"x"+"3="+5*3+"</br>");
    document.write(5+"x"+"4="+5*4+"</br>");
    document.write(5+"x"+"5="+5*5+"</br>");
    document.write(5+"x"+"6="+5*6+"</br>");
    document.write(5+"x"+"7="+5*7+"</br>");
    document.write(5+"x"+"8="+5*8+"</br>");
    document.write(5+"x"+"9="+5*9+"</br>");
    document.write(5+"x"+"10="+5*10+"</br></br></br>");
}

// Task 6
var firstSubject=prompt("Enter first subject name");
var secondSubject=prompt("Enter second subject name");
var thirdSubject=prompt("Enter third subject name");
var totalMarks=100;
var obtaindMarksFS=+prompt("Enter Obtained marks for subject "+firstSubject);
var obtaindMarksSS=+prompt("Enter Obtained marks for subject "+secondSubject);
var obtaindMarksTS=+prompt("Enter Obtained marks for subject "+thirdSubject);
var percentageFS=((obtaindMarksFS/totalMarks)*100);
var percentageSS=((obtaindMarksSS/totalMarks)*100);
var percentageTS=((obtaindMarksTS/totalMarks)*100);
var totalMarksThreeSubjects=300;
var totalObtainedMarksThreeSubjects=obtaindMarksFS+obtaindMarksSS+obtaindMarksTS;
var totalPercentageThreeSubjects=((totalObtainedMarksThreeSubjects/totalMarksThreeSubjects)*100);
document.write
("<table>"+
"<tr>"+ 
"<th>Subject</th>"+ 
"<th>Total Marks</th>"+
"<th>Obtained Marks</th>"+
"<th>Percentage</th>"+
"</tr>"+  
"<tr>"+
"<td>"+firstSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageFS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td>"+secondSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageSS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td>"+thirdSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageTS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td colspan=1>"+"</td>"+
"<td>"+"<strong>"+totalMarksThreeSubjects+"</strong>"+"</td>"+
"<td>"+"<strong>"+totalObtainedMarksThreeSubjects+"</strong>"+"</td>"+
"<td>"+"<strong>"+totalPercentageThreeSubjects+"</strong>"+"</td>"+
"</tr>"+
"</table>");
e