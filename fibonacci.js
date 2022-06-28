z = function(x) {
    document.getElementById("y").textContent = "";
    document.getElementById("y").style.color = "black";
    document.getElementById("spinner").classList.remove('opacity-0');
    fetch(x)
        .then(function(response) {
        return response.json();
        })
        .then(function (data) {
            
            document.getElementById("spinner").classList.add('opacity-0');
            document.getElementById("y").textContent = data["result"];
        }).catch(err => {
            console.log(err); // Email is forbidden
            document.getElementById("spinner").classList.add('opacity-0');
            document.getElementById("y").textContent = "Server Error: 42 is the meaning of life";
            document.getElementById("y").style.color = "#D9534F";
        });


}
update = function(){
    document.getElementById("error_line").textContent = "";
    document.getElementById("error_line").classList.add('opacity-0');
    document.getElementById("x").style.color = "black";

    if (document.getElementById("x").value <= 50){
            z("http://localhost:5050/fibonacci/"+document.getElementById("x").value.toString());
    }else{
        document.getElementById("error_line").classList.remove('opacity-0');
        document.getElementById("x").style.color = "#D9534F";
        document.getElementById("error_line").textContent = "Can’t be larger than 50";

    }

}
