let heading = document.getElementById('heading');
let ul = document.getElementById('ulbox');
let btn = document.getElementById('btn');

btn.addEventListener('click', add);
function add() {
    if (heading.value === '') {
        document.getElementById('errormsg').textContent = "please enter the text!!";
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = heading.value;
        ulbox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        document.getElementById('errormsg').textContent = '';
    }
    heading.value = '';
    save();
};

heading.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        add();
    }
    save();
});

ulbox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("list");
        save();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save() {
    localStorage.setItem("data", ulbox.innerHTML);
}
function show() {
    ulbox.innerHTML = localStorage.getItem("data");
}
show();


