
z = function(x) {

    fetch(x)
        .then(function(response) {
        return response.json();
        })
        .then(function (data) {
            document.getElementById("y").textContent = data["result"];

        });


}
update = function(){
    z("http://localhost:5050/fibonacci/"+document.getElementById("x").value.toString());

}

