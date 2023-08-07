function getRadioValue(){
    
    let radioBtn = document.getElementsByName('select');

    for(var i = 0; i < radioBtn.length; i++){

        if(radioBtn[i].checked == true && radioBtn[i].value == 1){
            document.getElementById("check1").style.display = "block"
            document.getElementById('first').style.backgroundColor = "#F4FBF9"
        }
        
        else if(radioBtn[i].checked == false && radioBtn[i].value == 1){
            document.getElementById("check1").style.display = "none"
            document.getElementById('first').style.backgroundColor = ""
        }

        if(radioBtn[i].checked == true && radioBtn[i].value == 2){
            document.getElementById("check2").style.display = "block"
            document.getElementById('second').style.backgroundColor = "#F4FBF9"
        }

        else if(radioBtn[i].checked == false && radioBtn[i].value == 2){
            document.getElementById("check2").style.display = "none"
            document.getElementById('second').style.backgroundColor = ""
        }

        if(radioBtn[i].checked == true && radioBtn[i].value == 3){
            document.getElementById("check3").style.display = "block"
            document.getElementById('third').style.backgroundColor = "#F4FBF9"
        }

        else if(radioBtn[i].checked == false && radioBtn[i].value == 3){
            document.getElementById("check3").style.display = "none"
            document.getElementById('third').style.backgroundColor = ""
        }
    }
}

