document.getElementById("x").textContent = "2";

z = function() {
    const x = document.getElementById("x").textContent;
    a = 0;
    b = 1;
    if (x<=1){
        document.getElementById("y").textContent = x;

    }
    if (x>1) {
        for (i = 0;i<x-2;i++){
            c=a+b;
            a=b;
            b=c;
        }
        document.getElementById("y").textContent = b;

    }


}
z();