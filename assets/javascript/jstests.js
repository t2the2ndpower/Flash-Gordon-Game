// in class daily challenge 2/20/19


// my non working solution

/*function isGreater = ( x , y) {
    if (x > y) {
        
        console.log ("X is Greater.  X = " + x);
}
    else {
        console.log ("Y is Greater.  Y = " + y);

}

}

isGreater(4,8); */


// the correct solution


/* function isGreater = (x,y) {
    if (x > y) {
        
        return x;
}
    else {
        return y;

}

}


isGreater(4,8);
alert (isGreater(35,4));
*/

var targetDiv = document.getElementById("empty-div");

targetDiv.textContent = "Hello Cats!";

var newDiv = document.createElement("div");

newDiv.textContent = "It's nice to see you!";

targetDiv.appendChild(newDiv);

newDiv.setAttribute("class", "fancy");


// $("#empty-div").html("<h1>Hello Everyone</h1>");
