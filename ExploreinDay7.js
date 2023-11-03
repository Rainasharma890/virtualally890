async function fetchData(){
    console.log("async function executed")
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("aync function complete",data)
}