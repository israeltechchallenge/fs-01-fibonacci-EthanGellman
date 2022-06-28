
z = function(x) {

    if (x < 2){
        return x;

    }else{
            return (z(x-1) + z(x-2));
    }


}
update = function(){

    document.getElementById("y").textContent = z(document.getElementById("x").value);
}
