let eName = document.getElementById("name");
let prof = document.getElementById("profession");
let age = document.getElementById("age");

let addUser = document.querySelector("button");
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let msg = document.querySelector(".msg");

let employeeArr = [];
let count = 1;

function addUserFun(){

	let eNameValue = eName.value;
	let profValue = prof.value;
	let ageValue = Number(age.value);

	if (eNameValue == "" || profValue == "" || ageValue < 18) {
		error.style.display = "block";
		success.style.display = "none";
	}
	else {
		let employeeObj = {
		id : count++,
		name: eNameValue,
		profession: profValue,
		age: ageValue
	    };

		employeeArr.push(employeeObj);
		error.style.display = "none";
		success.style.display = "block";
		msg.style.display = "none";
		
		let addedEmployees = document.createElement("div");
		addedEmployees.className = "added-employees";
		document.body.appendChild(addedEmployees);
		addedEmployees.innerHTML ='<span class="info">'+ employeeObj.id +'.\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'Name: '+ employeeObj.name + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'Profession: ' + employeeObj.profession +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'Age: ' + employeeObj.age + '</span><button class="del-btn">Delete User</button>';
		addedEmployees.style.display = "flex";
	}
}

addUser.addEventListener("click", addUserFun);



