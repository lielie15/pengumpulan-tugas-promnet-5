const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value);
    if (input.value.trim() === ""){
        errorMessage.textContent = "Field tidak boleh kosong";
        const list = document.getElementById("itemInput").classList;
        list.add("invalid");
        return;
    } else {
        errorMessage.textContent = "";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    input.value = "";
})