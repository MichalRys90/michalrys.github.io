//var CART_API = "http://localhost:8080/v1";
var CART_API = "https://ecommercee-54hf.onrender.com/v1";
var text = "";
var items = 0;
var textKonto = "<input type='text' id = usna class = 'log' placeholder = 'Username'><br><input type='text' id = fina class = 'log' placeholder = 'First name'><br><input type='text' id=lana class = 'log' placeholder = 'Last name'><br><input type='text' id=pass1 class = 'log' placeholder = 'Password'><input type='text' id=pass2 class = 'log' placeholder = 'Repeat password'><br><button id='crac' class='creacou'> Create Acoount! </button>";
var temp = "<p id='tempor'><br><br><br><br><br>The account has been created</p>";
var pizzeria = "<div id='pizzeria'><div id='stronaglowna' class='restaurant'>Strona główna</div><div id='pizzamenu' class='restaurant'>Menu</div><div id='pizzakontakt'class='restaurant'>Kontakt</div><div id='kosz'><img id='koszyk' src='zdjecia/Koszyk.jpg'/><div id='count'>"+items+"</div></div><div style='clear:both;'></div></div>";
var sg = "<div id='sg' class='men'>Witaj w Twoja Pizza - miejscu, gdzie twój smak i zadowolenie są naszym priorytetem!<br><br>Zanurz się w świat prawdziwej włoskiej kuchni i odkryj niezrównany smak naszych pysznych pizz, które są starannie przygotowywane z najwyższej jakości składników.<br><br>W naszej pizzerii dbamy o to, aby każdy kęs był prawdziwą ucztą dla Twoich kubków smakowych. Nasze menu oferuje szeroki wybór wyśmienitych pizz, z różnorodnymi sosami, aromatycznymi serami i świeżymi dodatkami, które spełnią wszystkie Twoje kulinarne marzenia.<br><br>Nie tylko gwarantujemy wyjątkowy smak, ale także szybką i wygodną obsługę, abyś mógł cieszyć się swoją ulubioną pizzą w każdym momencie.<br><br>Dołącz do nas już dziś i daj się ponieść wyjątkowemu smakowaniu w Twoja Pizza!</div>";
var kt ="<div id='kt' class='men'>Adres: Wymyslona 70 11-111 Wymysla<br>Telefon: 997 998 999<br>E-mail Wymyslony@wy.pl</div>"
var pizze = "<div id='pe' class='pizz'><img class='pizze' src='zdjecia/Margherita.jpg'><div class='sd'>Margherita<br>Skład: sos pomiodorowy, ser<br>Cena: 35zł<br><br><button id='button1' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Americana.jpg'><div class='sd'>Americana<br>Skład: sos pomiodorowy, ser, szynka, pieczarki, salami, papryka, kukurydza<br>Cena: 40zł<br><br><button id='button2' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Capriociosa.jpg'><div class='sd'>Capriociosa<br>Skład: sos pomiodorowy, ser, szynka, pieczarki<br>Cena: 38zł<br><br><button id='button3' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Carbonara.jpg'><div class='sd'>Carbonara<br>Skład: sos śmietanowy, ser, boczek, jajko<br>Cena: 40zł<br><br><button id='button4' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/CheesePizza.jpg'><div class='sd'>Cheese Pizza<br>Skład: sos pomiodorowy, ser mozarella, ser edamski, ser tylżycki, ser pleśniowy<br>Cena: 41zł<br><br><button id='button5' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Frutti di mare.jpg'><div class='sd'>Frutti di mare<br>Skład: sos pomiodorowy, ser mozarella, owoce morza, czosnek, natka pietruszki, oliwa Extra Vergine DOP<br>Cena: 51zł<br><br><button id='button6' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Hawai.jpg'><div class='sd'>Hawai<br>Skład: sos pomiodorowy, ser mozarella, szynka, ananas<br>Cena: 39zł<br><br><button id='button7' class='adPa'>Dodaj do koszyka</button></div></img><img class='pizze' src='zdjecia/pepperoni.jpg'><div class='sd'>Pepperoni<br>Skład: sos pomiodorowy, ser mozarella, pepperoni<br>Cena: 39zł<br><br><button id='button8' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Prosciutto.jpg'><div class='sd'>Prosciutto<br>Skład: sos z włoskich pomidorów Pelati, ser mozzarella, Prosciutto Crudo di Parma, rukola, pomidorki koktajlowe, ser parmezan<br>Cena: 45zł<br><br><button id='button9' class='adPa'>Dodaj do koszyka!</button></div></img><img class='pizze' src='zdjecia/Supreme.jpg'><div class='sd'>Supreme<br>Skład: Sos pomidorowy, Mozzarella, Pepperoni, Szynka, Wołowina, Wieprzowina, Zielona papryka, Oliwki czarne, Pieczarki, Cebula czerwona<br>Cena: 43zł<br><br><button id='button10' class='adPa'>Dodaj do koszyka!</button></div></img></div>";
var token;
var cartId;
var userId;
let isLoading = false;

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
		token = responseData;
		console.log(token);
        con.innerHTML = pizzeria;

		
    } catch (error) {
        console.error('Wystąpił problem z operacją fetch:', error.message);
        // Tutaj możesz obsłużyć błąd
    }
}


document.body.addEventListener("click", async function(e) {
    if (e.target.id == "logon") {
        var userna = login.value;
        var pass = passto.value;
        await Login(userna, pass);
        await id(userna);
        await cartIdd(userId);
    }
});
	
async function getUserId(username) {
    try {
        const response = await fetch(CART_API + "/users/userId?username=" + username, {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });

        if (!response.ok) {
            throw new Error('Błędna odpowiedź z serwera');
        }

        const useId = await response.text(); 

        return useId; 
    } catch (error) {
        console.error('Problem z operacją fetch', error);
        throw error;
    }
}


	async function id(username) {
		try {
			userId = await getUserId(username);
		} catch (error) {
			console.error('Problem z uzyskaniem userId', error);
		}
	}
	
	async function getcartId(uId) {
    try {
        const response = await fetch(CART_API + "/carts/emptyCart", {
            method: 'POST', 
            headers: {
                'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                userId: uId
            })
        });

        if (!response.ok) {
            throw new Error('Błędna odpowiedź z serwera');
        }
		
        const data = await response.json();
        const useId = data.id;
        console.log(useId);
        return useId; 
    } catch (error) {
        console.error('Problem z operacją fetch', error);
        throw error;
    }
}


	async function cartIdd(id) {
		try {
			cartId = await getcartId(id);
		} catch (error) {
			console.error('Problem z uzyskaniem cartId', error);
		}
	}

	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "stronaglowna") {
			    con.innerHTML = pizzeria + sg;
			const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
            tex.textContent = items;
			}				
		}
	});	
	
	document.body.addEventListener("click", function(e) {
		if(e.target.id == "pizzakontakt") {
			    con.innerHTML = pizzeria + kt;
			const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
            tex.textContent = items;
			}				
		}
	});	
	
	document.body.addEventListener("click", function(e) {
		if(e.target.id == "pizzamenu") {
			    con.innerHTML = pizzeria + pizze;
			const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
            tex.textContent = items;
			}
		}
		
	});	
	
	
		    async function addProductToCart(productId) {
			 try {
			const response = await fetch(CART_API + "/carts/addProducts/" + cartId + "/" + productId, {
				method: 'PUT',
				headers: {
                'Authorization': `Bearer ${token}` 
				}
			});
			
		    if (!response.ok) {
            throw new Error('Błędna odpowiedź z serwera');
			}
		} catch (error) {
        console.error('Problem z operacją fetch', error);
        throw error;
    }
}
		
document.body.addEventListener("click", function(e) {
    if (e.target.id == "button1") {
        addProductToCart(10);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button2") {
        addProductToCart(11);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button3") {
        addProductToCart(12);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button4") {
        addProductToCart(13);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button5") {
        addProductToCart(14);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button6") {
        addProductToCart(15);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button7") {
        addProductToCart(16);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button8") {
        addProductToCart(17);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button9") {
        addProductToCart(18);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});

document.body.addEventListener("click", function(e) {
    if (e.target.id == "button10") {
        addProductToCart(19);
        const tex = document.getElementById('count');
        if (tex) { 
            console.log(tex);
			items++;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje");
        }
    }
});


document.body.addEventListener("click", function(e) {
    if (e.target.id == "koszyk") {
        showCart();
    }
});


async function showCart() {
	console.log(cartId);
    try {
        
        const cartItems = document.getElementById("cart-items");
        if (cartItems) {
            cartItems.remove();
        }
	} catch (error) {
        console.error('Problem z cart-items', error);
        throw error;
	}
		
        const response = await fetch(CART_API + "/carts/cartItem/getCart/"  + cartId, {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            throw new Error('Błędna odpowiedź z serwera');
        }
		
        const list = await response.json();
        var suma = 0;
		list.sort((a, b) => a.productName.localeCompare(b.productName));
		
		hideElementById("pe");
		hideElementById("sg");
		hideElementById("kt");
		
        var cartDiv = document.createElement("div");
        cartDiv.setAttribute("id", "cart-items");
		
		var closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.classList.add("close-button");
        closeButton.setAttribute("id", "button-close");
        closeButton.addEventListener('click', closeCart);
        cartDiv.appendChild(closeButton);

        var summaryHeader = document.createElement("h2");
        summaryHeader.textContent = "Podsumowanie";
        cartDiv.appendChild(summaryHeader);

        for (let lis of list) {
		suma += lis.totalPrice;

		var itemDiv = document.createElement("div");
		itemDiv.classList.add("item");

		var productNameText = document.createTextNode(lis.productName);
		var quantityText = document.createTextNode(lis.quantity + "szt.");
		var totalPriceText = document.createTextNode(lis.totalPrice);

		var minusButton = document.createElement("button");
		minusButton.textContent = "-";
		minusButton.classList.add("minus-button");
		console.log(lis.product_id);
		minusButton.dataset.productId = lis.product_id; 
		minusButton.addEventListener('click', decreaseQuantity);	
    
		var plusButton = document.createElement("button");
		plusButton.textContent = "+";
		plusButton.classList.add("plus-button");
		plusButton.dataset.productId = lis.product_id; 
		console.log(lis.product_id);
		plusButton.addEventListener('click', increaseQuantity);

		itemDiv.appendChild(productNameText);
		itemDiv.appendChild(minusButton);
		itemDiv.appendChild(quantityText);
		itemDiv.appendChild(plusButton);
		itemDiv.appendChild(totalPriceText);

		cartDiv.appendChild(itemDiv);
	} 

        var totalCostText = document.createElement("p");
        totalCostText.textContent = "Koszt całkowity = " + suma;
        cartDiv.appendChild(totalCostText);

        var deliveryLabel = document.createElement("label");
        deliveryLabel.textContent = "Miejsce dostawy:";
        cartDiv.appendChild(deliveryLabel);

        var deliveryInput = document.createElement("input");
        deliveryInput.setAttribute("type", "text");
        cartDiv.appendChild(deliveryInput);

        var paymentForm = document.createElement("form");
        cartDiv.appendChild(paymentForm);

        var paymentLabel = document.createElement("label");
        paymentLabel.textContent = "Wybierz formę płatności:";
        paymentForm.appendChild(paymentLabel);

        var cashOption = document.createElement("input");
        cashOption.setAttribute("type", "radio");
        cashOption.setAttribute("name", "payment");
        cashOption.setAttribute("value", "cash");
        paymentForm.appendChild(cashOption);
        var cashLabel = document.createElement("label");
        cashLabel.textContent = "Gotówka";
        paymentForm.appendChild(cashLabel);

        var cardOption = document.createElement("input");
        cardOption.setAttribute("type", "radio");
        cardOption.setAttribute("name", "payment");
        cardOption.setAttribute("value", "card");
        paymentForm.appendChild(cardOption);
        var cardLabel = document.createElement("label");
        cardLabel.textContent = "Karta";
        paymentForm.appendChild(cardLabel);

        var orderButton = document.createElement("button");
		
        orderButton.textContent = "Zamawiam!";
		orderButton.setAttribute('id', 'zamawiam');
        cartDiv.appendChild(orderButton);

        var kosz = document.getElementById("kosz");
        kosz.insertAdjacentElement("afterend", cartDiv);
    } 

async function decreaseQuantity(event) {
    const productId = event.target.dataset.productId;
        try {

        const response = await fetch(CART_API + "/carts/"  + cartId + "/" + productId, {
            method: 'DELETE', 
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            throw new Error('Błędna odpowiedź z serwera');
        }
		
		showCart();
		
		const tex = document.getElementById('count');
		if (tex) { 
            console.log(tex);
			items--;
            tex.textContent = items;
        } else {
            console.log("Element 'count' nie istnieje"); 		
		} 
		}catch (error) {
        console.error('Problem z operacją fetch', error);
        throw error;
    }
}

function increaseQuantity(event) {
    const productId = event.target.dataset.productId;
    addProductToCart(productId)
        .then(showCart)
        .then(() => {
            const tex = document.getElementById('count');
            if (tex) {
                console.log(tex);
                items++;
                tex.textContent = items;
            } else {
                console.log("Element 'count' nie istnieje");
            }
        })
        .catch(error => {
            console.error('Problem z operacją fetch', error);
        });
}

function closeCart() {
    var cartDiv = document.getElementById("cart-items");
    if (cartDiv) {
        cartDiv.remove();
		var menu = document.getElementById("pe");
		showElementById("pe");
		showElementById("sg");
		showElementById("kt");
    }
}


function hideElementById(elementId) {
    var element = document.getElementById(elementId);
    if (element && window.getComputedStyle(element).display !== "none") {
        element.style.display = "none";
    }
}

function showElementById(elementId) {
    var element = document.getElementById(elementId);
    if (element && window.getComputedStyle(element).display === "none") {
        element.style.display = "";
    }
}

async function createOrder() {
    try {
        const response = await fetch(CART_API + "/carts/createOrder/" + cartId, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Odpowiedź nie prawidłowa');
        }

		cartIdd(userId);
		    const tex = document.getElementById('count');
            if (tex) {
                items = 0;
                tex.textContent = items;
            } else {
                console.log("Element 'count' nie istnieje");
            }
			
		var cartDiv = document.getElementById("cart-items");
        cartDiv.innerHTML = "Your order has been placed";
		
    } catch (error) {
        console.error('Wystąpił problem z operacją fetch:', error.message);
        // Tutaj możesz obsłużyć błąd
    }
}


document.body.addEventListener("click", function(e) {
    if (e.target.id == "zamawiam") {
		createOrder();
    }
});