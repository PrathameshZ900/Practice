
let api = "https:sdadadadad//reqres.in/api/useasdr";

function fetch1(api){

    fetch(api)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((error)=>console.log("ok this is error",error))
}
fetch1(api);