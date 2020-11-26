document.addEventListener('DOMContentLoaded', function(){
    
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        let box = document.getElementById("coloredBox");
        if(box.className == "notClicked"){
            box.className = "clicked";
        } else{
            box.className = "notClicked";
        }
    });
    
    var box = document.querySelector("#shapedBox");
    box.onclick = function(){
        box.style.borderRadius = "50px";
        box.style.left = "500px";
        box.style.backgroundColor = "purple";
    };
});

