let fetch_btn = document.getElementById("fetch");

fetch_btn.addEventListener("click", fetchdata)
async function fetchdata(){
    try {
        let res = await fetch("http://localhost:3000/students")
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}