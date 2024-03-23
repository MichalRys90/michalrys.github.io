var CART_API = "https://ecommercee-54hf.onrender.com/v1";
var text = "";
var textKonto = "<input type='text' id = usna class = 'log' placeholder = 'Username'><br><input type='text' id = fina class = 'log' placeholder = 'First name'><br><input type='text' id=lana class = 'log' placeholder = 'Last name'><br><input type='text' id=pass1 class = 'log' placeholder = 'Password'><input type='text' id=pass2 class = 'log' placeholder = 'Repeat password'><br><button id='crac' class='creacou'> Create Acoount! </button>";
var temp = "<p id='tempor'><br><br><br><br><br>The account has been created</p>";
var pizzeria = "<div id='pizzeria'><div id='stronaglowna' class='restaurant'>Strona główna</div><div id='pizzamenu' class='restaurant'>Menu</div><div id='pizzakontakt'class='restaurant'>Kontakt</div><div style='clear:both;'></div></div>";
var token;


cart.addEventListener("click", function() {
	con.innerHTML = cartText;
});

	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "create") {
			    con.innerHTML = textKonto;
		}
	});
	
	
	async function createAccount(username, firstname, lasname, password1, password2) {
	if (password1 == password2) {
		try {
			const response = await fetch(CART_API + "/users/CreateUser", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					firstName: firstname,
					lastName: lasname,
					password: password1
				})
			});

			const responseData = await response.json();

			if (responseData) {
				setTimeout(() => {
					con.innerHTML = cartText;
				}, "2000");
				console.log("Dodano użytkownika");
				con.innerHTML = temp;
			} else {
				throw new Error('Coś poszło nie tak');
			}
		} catch (error) {
			console.error('Wystąpił błąd:', error);
			// Obsługa błędu (opcjonalna)
		} 
	} else {
		con.innerHTML = "Podane hasła różnią się od siebie, spróbuj ponownie<br><br><br>" + textKonto;
		}
} 

	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "crac") {
			    var userna = usna.value;
			    var firstna = fina.value;
			    var lastna = lana.value;
			    var pas1 = pass1.value;
			    var pas2 = pass2.value;
				createAccount(userna, firstna, lastna, pas1, pas2)
		}
	});
	
	
	async function Login(username, password) {

    try {
        const response = await fetch(CART_API + "/users/login?username=" + username + "&password=" + password, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Odpowiedź nie prawidłowa');
        }

        const responseData = await response.text();
        console.log('Response data:', responseData);
		token = responseData;
        con.innerHTML = pizzeria;

		
    } catch (error) {
        console.error('Wystąpił problem z operacją fetch:', error.message);
        // Tutaj możesz obsłużyć błąd
    }
}


	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "logon") {
			    var userna = login.value;
			    var pass = passto.value;
				Login(userna, pass)
		}
	});
