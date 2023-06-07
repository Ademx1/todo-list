"use strict";

let list = [];
let listUl = document.getElementById("list");

function todo() {
  let inp = document.getElementById("inp");

  if (inp.value.trim() === "") {
    Swal.fire('No data available. Please try again!')

    return;
  }

  if (list.includes(inp.value)) {
  Swal.fire('This item already exists. Please try again!')

  return;
}

  list.push(inp.value);
  inp.value = "";
  display();
  
}

function Delete(ind) {
  list.splice(ind, 1);
    display();
}

function display() {
  let data = "";

  for (let i = 0; i < list.length; i++) {
    data += ` <li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button> </li>`;
  }

  listUl.innerHTML = data;
}
