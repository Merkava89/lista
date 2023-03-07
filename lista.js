const list = [];
function add() {
    if (document.getElementById("kauf").value == 0) {
        alert("please add an item");
    } else 
    {const item = document.getElementById("kauf").value;
    list.push(item);
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = item;}
}
