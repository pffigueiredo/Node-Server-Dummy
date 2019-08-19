onDOMContentLoaded = (function(){ 
    axios.get(`http://localhost:5000/api/champions`)
    .then((resp) => setJson(resp) );
})()

var setJson =  (data) =>{
    document.getElementById("json").innerHTML = JSON.stringify(data);
}