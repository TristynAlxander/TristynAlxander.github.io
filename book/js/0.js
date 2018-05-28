function detect_code(e) {
    if(e.keyCode == 13){
        var code = document.getElementById("search_bar").value;
        window.top.location.replace("#"+code);
        }
    }