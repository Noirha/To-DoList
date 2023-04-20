let continer = document.getElementById("continer");
let input = document.getElementsByTagName("input")[0]

let button = document.getElementsByTagName("button")[0]

let inputs = document.getElementById("inputs")

button.addEventListener("click", function () {
    if (input.value.length === 0) {
        alert("pleas Enter Your Task")
    } else {
        inputs.innerHTML += `
            <div id="min-head"><div id="flex"> <span id="btn"></span>
            <p id="pa">${document.querySelector("input").value}</p></div><i id="close" class="fa-solid fa-close"></i></div>
                `
    }

    input.value = "";

    let pa = document.querySelectorAll("p")

    pa.forEach(item => {
        item.addEventListener("click", (eo) => {
            eo.target.classList.toggle("line")



            if (eo.target.classList.contains("line")) {
                item.style.textDecoration = "line-through"
                let u = eo.target.parentElement.getElementsByTagName("span")[0]
                u.innerHTML = `<i  class="fa-solid fa-check"></i>`
                u.style.backgroundColor = "orangered"
            } else {
                item.style.textDecoration = "none"
                let u = eo.target.parentElement.getElementsByTagName("span")[0]
                u.style.background = "none"
            }

        })
    })

    let plus = document.querySelectorAll("#close");
    plus.forEach(item => {
        item.addEventListener("click", (eo) => {
            let e = eo.target.parentElement;
            e.remove()
        })
    })
})