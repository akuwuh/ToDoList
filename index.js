let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

console.log(inputEl.value)

inputBtn.addEventListener("click", function() {

    var regEx = /^[0-9a-zA-Z]+$/;

    if (inputEl.value.match(regEx)) {
        myLeads.push(inputEl.value)
        renderLeads()
        inputEl.value = " "
    } else {
        return
    }
})

deleteBtn.addEventListener("click", function() {
    myLeads = []
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target = '_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + " " + "</a></li>"
        listItems += `
            <li id="btn${i}">
                <button class="tick-btn" id="toggle-button"onclick="strikethrough(${i},btn${i})">
                    ${i}
                </button>
                ${myLeads[i]}


            </li>`
    }

    ulEl.innerHTML = listItems
}

function strikethrough(num, ele) {
    ele.style = "text-decoration:line-through";
    //setTimeout(ele.remove(), 1000);
    //myLeads.splice(num);

}

