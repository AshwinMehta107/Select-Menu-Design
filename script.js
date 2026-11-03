var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");


selectField.onclick = function(){
    list.classList.toggle("hide");
    selectField.classList.toggle("open");
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.add("hide");
        selectField.classList.remove("open");
    }
}
