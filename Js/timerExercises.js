// var myfunc = function(a, x) {
//     return a * x;
//    };
//    var x = myfunc(2, 3);
//    var y = myfunc;
//    alert(x);
//    alert(y(2,3));

setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);

/*Write functions booyah1 and booyah2
so that in both cases below, an 
alert box comes up after 2 seconds that
says “BOOYAH!”*/

function booyah1(){
    alert("BOOYAH!");
}
function booyah2(){
   setTimeout(booyah3, 2000);
}
function booyah3(){
   alert("booya2");
}
