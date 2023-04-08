
let fetchData = async () => {
    let res = await fetch("https://www.boredapi.com/api/activity")
    let data = await res.json()
    console.log(data)
    document.getElementById("tagline").innerHTML = data.activity
    document.getElementById("type").innerHTML = data.type
    document.getElementById("idNumber").innerHTML = data.key
    document.getElementById("price").innerHTML = data.price
    document.getElementById("access").innerHTML = data.accessibility
}



document.getElementById("get-data").addEventListener("click", fetchData)
window.addEventListener("load", fetchData)





