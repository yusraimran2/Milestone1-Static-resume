let toggleButton = document.querySelector(".skills");
let isShow = true;
function showHideSkills(){
    if(isShow){
        toggleButton.style.display = "none";
        isShow = false;
    }else{
        toggleButton.style.display = "block";
        isShow = true;
    }

}