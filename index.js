let submitBtn = document.getElementById("submit");
let name_input = document.getElementById("nameI");
let mail_input = document.getElementById("mailI");
let extra_input = document.getElementById("extraI");
let grade_input = document.getElementById("gradeI");
let DoB_input = document.getElementById("date");
let Achievements_input = document.getElementById("AchievementsI");
let radio = document.getElementById("radio");
let radio2 = document.getElementById("radio2");


submitBtn.onclick = function(){
    if(name_input.value == ""){
        name_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }
    if(!mail_input.value.includes("@")){
        mail_input.value = "";
        mail_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }
    if(extra_input.value == ""){
        extra_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }
    if(grade_input.value == ""){
        grade_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }

    if(Achievements_input.value == ""){
        Achievements_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }
    if(DoB_input.value == ""){
        DoB_input.style.backgroundColor = "rgba(233, 172, 252, 0.502)";
    }
    if(!radio.checked && !radio2.checked){
        
        document.getElementById("label").textContent = "*Turn Notifications On*";
        document.getElementById("label2").textContent = "*Turn Notifications Off*";
    }
    


    if(name_input.value != "" && mail_input.value.includes("@") && extra_input.value != ""){
        alert(`Name: ` + name_input.value);
        alert(`Mail: `+mail_input.value);
        alert(`Message: `+extra_input.value);
    }
}
grade_input.onchange = function(){
    if(grade_input.value < 1){
        grade_input.value = 12;
    }
    if(grade_input.value > 12){
        grade_input.value = 1;
    }
}