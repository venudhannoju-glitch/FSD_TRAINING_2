arr=[1,2,3,4,5]
console.log(...arr)

function localstore()
{
    localStorage.setItem("arr1",JSON.stringify(arr))
    localStorage.setItem("name","John")
    localStorage.setItem("age",30)
    localStorage.setItem("city","New York")
    console.log("Data stored in localStorage")
    console.log("arr1:", localStorage.getItem("arr1"))
    console.log("name:", localStorage.getItem("name"))
    console.log("age:", localStorage.getItem("age"))
    console.log("city:", localStorage.getItem("city"))
}
document.getElementById("clickbtn").addEventListener("click",localstore)