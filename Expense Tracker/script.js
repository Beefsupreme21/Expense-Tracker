// const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");


function addExpense() {
    let name = document.getElementById('name-area').value;
    let date = document.getElementById('date-area').value;
    let amount = document.getElementById('amount-area').value;
    if (name == "" || date == "" || amount == "") {
      alert ("Please fill out all boxes")
    }
    else {
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    let nameCell = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    nameCell.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
    cell4.innerHTML = '<button class="deleteBtn">Delete</button>';
    document.getElementById('name-area').value = '';
    document.getElementById('date-area').value = '';
    document.getElementById('amount-area').value = '';
}}

tableEl.addEventListener("click", onDeleteRow);

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}


function name()
   {  
   document.getElementById('elementid').value = "";
   }