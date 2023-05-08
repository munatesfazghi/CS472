    let txt = document.getElementById("txtarea");
        function biggerFont(){
            let size = parseInt(txt.style.fontSize);
            size += 2;
            txt.style.fontSize = size + "pt";
    }
    function setIntr(){
         setInterval(biggerFont, 500);
    }

    window.onload= function(){
         const btn= document.getElementById("btn");
         btn.onclick =  setIntr;
    }
//window.onload= document.getElementById("txtarea").innerHTML = "Sample1" + "\n" +"Sample2" ;

txt.innerHTML = "                   Sample1" + "\n" +"                   Sample2" 

    function checkBox(){
        const myCheckBox = document.getElementById("check");
            if (myCheckBox.checked){
                txt.style.fontWeight = "bold";
                txt.style.color = "green";
                txt.style.textDecoration ="underline"
                document.body.style.backgroundImage = "url('/CS472/images/hundred-dollar-bill.jpg')";
            }else{
                txt.style.fontWeight = "normal";
                txt.style.color ="black";
                txt.style.textDecoration = "none";
                document.body.style.backgroundImage = '';
                }

}
