const addBtn = document.getElementById("addButton")
const input = document.getElementById("product")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addItem()
})

addBtn.addEventListener("click", (event) => {
    const li = document.createElement('li');
    li.textContent = input.value;


    li.addEventListener('click', () => {
        li.remove();
    });

   
    list.appendChild(li);

   
    input.value = '';
})