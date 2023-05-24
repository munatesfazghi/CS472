$(function() {
    const searchBtn = $("#search-btn");
    const inputTerm = $("#input-term");
  
    searchBtn.click(function(){
      const word = inputTerm.val();
      console.log(word);
      fetch(`http://localhost:3000/word?word=${word}`)
        .then(resp => resp.json())
        .then(printData)
        .catch(error => console.error(error));
    });
  });



  function printData(data) {
    const listdata = document.getElementById("list");

    // Clear the existing inner HTML
    listdata.innerHTML = '';

    for (const item of data) {
        const listElement = document.createElement('li');
        listElement.innerHTML += '<span class="wordtype">' + item.wordtype + '</span>::' + item.definition;
        listdata.appendChild(listElement);
    }
}

function errorFunction(error) {
    alert(error.responseText);
};
  