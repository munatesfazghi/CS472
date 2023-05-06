document.getElementById("txtarea").innerHTML=localStorage.getItem("tasks");
function addTask(){
   let task = document.getElementById("task-id").value;
   document.getElementById("txtarea").innerHTML += task + "\n"
   document.getElementById("task-id").value = ""
   localStorage.setItem("tasks", document.getElementById("txtarea").value)
}
    function clearTask(){
      document.getElementById("txtarea").value = "";
     
        
    }

