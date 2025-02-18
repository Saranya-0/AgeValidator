function checkAge(){
    let age = document.getElementById("ageInput").value;
    let result = document.getElementById("result");

    if(age === ""){
        result.textContent="Please enter a valid age";
       
    }
    else{
        age = parseInt(age);
            if (age < 0) {
                result.textContent = "Age cannot be negative.";
               
            } else if (age <= 12) {
                result.textContent = "You are classified as: Child.";
               
            } else if (age <= 19) {
                result.textContent = "You are classified as: Teenager.";
               
            } else if (age <= 59) {
                result.textContent = "You are classified as: Adult.";
               
            } else {
                result.textContent = "You are classified as: Senior.";
               
            }

    }
}
