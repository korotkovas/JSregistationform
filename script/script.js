function validate () {
	console.log ("Submit nuspaustas");
	// rodo tai ka ivedem i username
	let un = document.getElementById("userUsername").value;
	console.log(un);
	// tikrina ar ivsesta nuo 5 iki 12 skaiciu, maziau ar daugiau klaida.
	if (un.length <5 || un.length >12) {
		console.log ("Klaida, per trumpas");
		return;
	}
	// tikrina ar yra skaiciusf
	let found = false;
	for (let i = 0; i < un.length; i++){
		console.log(un[i]);
		if (un[i]>="0" && un[i]<="9") {
			found=true;
			break;
		}
	}
	if (!found) {
		console.log("Klaida,nera skaicius");
		return;
	}
	// passworda tikrina
	let up = document.getElementById("userPassword").value;
	console.log(up);
	if (up.length <5 || up.length >12) {
		console.log("Klaida passworde");
		return;
	}
		found = false;
		for (let i = 0; i < up.length; i++) {
			// tikrina ar yra simbolis
			if (
				up[i] == "!" || up[i] == "," || up[i] == "?" || up[i] == "," || up[i] == "[" || up[i] == "]" ||
				up[i] == "{" || up[i] == "}" || up[i] == "/" || up[i] == "*") {
				found=true;
				break;
			}
		}
	if (!found) {
	console.log("Klaida,nera simbolio");
	return;

	}

	//tikrina varda
	let na = document.getElementById("userName").value;
	console.log(na);
	let r2 = /^[A-Z][a-zA-Z]+$/;
	if (r2.test(na)) {
		console.log("Is didziosios")
	} else {
		console.log("Is mazosios")
	}
	// tikrina ar zip code yra
	let zp = document.getElementById("userZip").value;
	console.log(zp);
	let r3 = /^[0-9]*$/;
	if (r3.test(zp)) {
		console.log("Tik skaiciai")
	} else {
		console.log("Klaida, reikai tik skaiciu")
	}
	//maila tikrina
	let em = document.getElementById("userEmail").value;
	console.log(em);
	let r4 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (r4.test(em)) {
		console.log("Geras mailas")
	} else {
		console.log("Blogas mailas")
	}

	let Male=document.getElementById("genderMale").value;
	let Female=document.getElementById("genderFemale").value;
	if (Male || Female) {
		console.log("Lytis pasirinkt");
	}

	let English=document.getElementById("langEng").value;
	let Other=document.getElementById("langOther").value;
	if (English || Other) {
		console.log("Kalba pasirinkta");
	}

}