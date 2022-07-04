get_prev = function(){
    document.getElementById("spinner2").classList.remove('opacity-0');
    document.getElementById("first").textContent = "";
    document.getElementById("second").textContent = "";
    document.getElementById("third").textContent = "";

    fetch("http://localhost:5050/getFibonacciResults")
    .then(function(response) {
    return response.json();
    })
    .then(function (data) {
        data["results"] = data["results"].sort((a, b) => a.createdDate - b.createdDate);
        last_element = data["results"].length-1;
        document.getElementById("spinner2").classList.add('opacity-0');
        document.getElementById("first").textContent = "The Fibonacci of "+ data["results"][last_element]["number"] +" is "+ data["results"][last_element]["result"];
        document.getElementById("second").textContent = "The Fibonacci of "+ data["results"][last_element-1]["number"] +" is "+ data["results"][last_element-1]["result"];
        document.getElementById("third").textContent = "The Fibonacci of "+ data["results"][last_element-2]["number"] +" is "+ data["results"][last_element-2]["result"];

    });

}
z1 = function(x) {
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
z2 = function(x) {

    if (x < 2){
        return x;

    }else{
            return (z2(x-1) + z2(x-2));
    }


}
update = function(){
    var checkBox = document.getElementById("myCheck");
    document.getElementById("error_line").textContent = "";
    document.getElementById("error_line").classList.add('opacity-0');
    document.getElementById("x").style.color = "black";

    if (document.getElementById("x").value <= 50 && document.getElementById("x").value >= 0){
        if (checkBox.checked == true){
            z1("http://localhost:5050/fibonacci/"+document.getElementById("x").value.toString());
          } else {
            document.getElementById("y").textContent = z2(document.getElementById("x").value);
          }
    }else{
        document.getElementById("error_line").classList.remove('opacity-0');
        document.getElementById("x").style.color = "#D9534F";
        document.getElementById("error_line").textContent = "Can’t be larger than 50 or less than 0";

    }
    get_prev();
}

