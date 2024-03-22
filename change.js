var strona = document.getElementById('strona');
var o = document.getElementById('o');
var projekty = document.getElementById('projekty');
var kontakt = document.getElementById('kontakt');
var strona1 = document.getElementById('strona1');
var o1 = document.getElementById("o1");
var projekty1 = document.getElementById('projekty1');
var kontakt1 = document.getElementById('kontakt1');
var library = document.getElementById('library');
var nbp = document.getElementById('nbp');
var cart = document.getElementById('cart');
var con = document.getElementById("content");
var sn = document.getElementById("sortname");
var sd = document.getElementById("sortdate");
var gd = document.getElementById("getbydate");
var ga = document.getElementById("getbyany");
var n = document.getElementById("itemname");
var pd = document.getElementById("postingdate");
var uc = document.getElementById("usdcost");
var showingRent = document.getElementById("showrent");
var returnBook = document.getElementById("returnhire");

var ja = "Jestem absolwentem studiów z zakresu finansów i rachunkowości, poszukującym nowych wyzwań jako junior Java Developer. Moje doświadczenie zawodowe obejmuje wiele lat pracy w obszarze wsparcia IT oraz jako administrator serwera Linux. Podczas mojej drogi zawodowej zdobyłem solidną wiedzę z zakresu administracji systemów oraz rozwiązywania problemów związanych z infrastrukturą IT.<br><br><br> Zdecydowałem się rozszerzyć swoje umiejętności poprzez naukę front-endu, aby lepiej zrozumieć kompleksowość tworzenia aplikacji webowych. Moja pasja do kodowania i ciągłe dążenie do rozwoju sprawiają, że jestem gotowy na nowe wyzwania jako programista Java. Jestem zdeterminowany, aby przynieść wartość mojemu zespołowi poprzez zaangażowanie, zdolności analityczne i dążenie do doskonałości w każdym zadaniu, które podejmuję.<br><br><br> Jestem entuzjastycznie nastawiony do możliwości pracy w inspirującym środowisku, gdzie będę mógł wykorzystać swoje dotychczasowe doświadczenie, rozwijać się jako programista oraz przyczyniać się do sukcesu projektów. Jestem gotowy na nowe wyzwania i nie mogę się doczekać możliwości pracy z zespołem, który podziela moje pasje i wartości.";
var stronaGlowna = "Witaj na mojej stronie! Jestem początkującym programistą Java, który z pasją tworzy aplikacje internetowe. Na tej stronie prezentuję swoje projekty, z których jestem dumny. Choć dopiero zaczynam swoją przygodę z programowaniem, to bardzo się staram, aby każdy mój projekt był lepszy od poprzedniego. Zapraszam do zapoznania się z moimi pracami. Jeśli potrzebujesz kogoś, kto podejmie się nowych wyzwań i z pasją podejdzie do Twojego projektu, to jestem do Twojej dyspozycji! Dzięki za odwiedzenie mojej strony!";
var dane = "email - mrys@tgo.pl<br>telefon - 604756957";
var projek = "W tym wątku chciałbym podzielić się kilkoma z moich projektów napisanych w języku Java. Przedstawione aplikacje są efektem mojej pasji do programowania oraz ciągłego rozwoju w tej dziedzinie. Mam nadzieję, że znajdziecie tutaj coś interesującego i inspirującego. Zapraszam do zapoznania się z moimi projektami!<br><br><br>Wybierz projekt z listy po lewej";
var nbpTekst = "Projekt ten ma imitować wystawianie faktur, podajemy nazwę zakupionego towaru, datę wystawienia faktury oraz kwotę w dolarach jaką musieliśmy za dany towar zapłacić. Program za pomocą API NBP przeliczy tę kwotę na złotówki kursem z dnia jaki podaliśmy. API wystawia również endpointy za pomocą których możemy pobrać wszystkie faktury posortowane po nazwie przedmiotu bądź dacie, a także potrafi wyszukać wszystkie towary po określonej dacie bądź po fragmencie nazwy.<br><br><br> <button id='sortname' class='click'> Sort by name </button> <button id='sortdate' class='click'> Sort by Date </button> <br> <input type='text' id = 'data' class = 'click1' placeholder = '2024-01-01'> <button id='getbydate' class='click'> Get by date </button>  <br> <input type='text' id = 'anystring' class = 'click1' placeholder = 'any string'> <button id='getbyany' class='click'> Get by any String </button><br><br><br> Dodaj Przedmiot! <br><input type='text' id = 'itemname' class = 'click1' placeholder = 'Name'> <input type='text' id = 'postingdate' class = 'click1' placeholder = 'Posting date format yyyy-mm-dd'> <input type='text' id = 'usdcost' class = 'click1' placeholder = 'Cost USD'> <br><br> <button id='postnbp' class='click'> Add item! </button>";
var libraryTekst = "Projekt imituje wypożyczalnię książek, API wystawia 25 endpointów jednak frontend skorzysta tylko z kliku. API pozwoli dodać książkę oraz czytelnika, wylistować wszystkie książki, wylistować wszystkie dostępne książki, a także będzie możliwość wypożyczenia oraz zwrócenia książki.<br><br><br> <button id='allBooks' class='click'> Get all books </button> <button id='freebooks' class='click'> Get free books </button><br><input type='text' id = 'returnhire' class = 'click1' placeholder = 'Nickname'><button id='showrent' class='click'> Show your rented books </button><br><input type='text' id = 'howManyFree' class = 'click1' placeholder = 'Type Title'><button id='showHowManyFree' class='click'> How many Available </button><br><br><br>Dodaj użytkownika!<br><input type='text' id = 'nameu' class = 'click1' placeholder = 'Name'> <input type='text' id = 'lastnameu' class = 'click1' placeholder = 'Last name'> <input type='text' id = 'nicknameu' class = 'click1' placeholder = 'Nickname must be unique'><br><br> <button id='reader' class='click'> Add reader! </button><br><br><br>Dodaj książkę!<br><input type='text' id = 'titleBook' class = 'click1' placeholder = 'Title'> <input type='text' id = 'authorBook' class = 'click1' placeholder = 'Author'> <input type='text' id = 'publicationYearBook' class = 'click1' placeholder = 'Publication year yyyy-mm-dd'><br><br> <button id='addBook' class='click'> Add book! </button>"
var cartText = "W projekcie tym uznałem, że na podstawie API stworzę koszyk dla obsługi pizzerii. Użytkownik będzie mógł dodawać produkty do koszyka by na końcu złożyć zamówienie. Wymagane będzie jednak wcześniejsze zalogowanie się na stronie by stworzyć unikalny Bearer token (token wygasa po godzinie). Mam nadzieję, że projekt się spodoba :-)<br><br><br><input type='text' id = 'login' class = 'log' placeholder = 'Login'><br><input type='text' id = 'passto' class = 'log' placeholder = 'Password'><br><button id='logon' class='trylog'> Log in! </button><br><button id='create' class='createa'> Create acoount</button>"


o1.addEventListener("click",function(){ 
	con.innerHTML = ja;
		if (nbp.style.display == "block") 
	nbp.style.display = "none";
	
		if (cart.style.display == "block") 
	cart.style.display = "none";
	
		if (library.style.display == "block") 
	library.style.display = "none";
	
		if (kontakt1.style.display == "none") 
	kontakt1.style.display = "block";
});

o.addEventListener("click",function(){ 
	con.innerHTML = ja;
});

strona.addEventListener("click",function(){ 
	con.innerHTML = stronaGlowna;
});

strona1.addEventListener("click",function(){ 
	con.innerHTML = stronaGlowna;
		if (nbp.style.display == "block") 
	nbp.style.display = "none";
	
		if (cart.style.display == "block") 
	cart.style.display = "none";
	
		if (library.style.display == "block") 
	library.style.display = "none";
	
		if (kontakt1.style.display == "none") 
	kontakt1.style.display = "block";
});

kontakt.addEventListener("click",function(){ 
	con.innerHTML = dane;
});

kontakt1.addEventListener("click",function(){ 
	con.innerHTML = dane;
});

projekty.addEventListener("click",function(){ 
	con.innerHTML = projek;
});

//nbp.addEventListener("click",function(){ 
//	con.innerHTML = ja;
//});

projekty1.addEventListener("click",function(e){ 
	con.innerHTML = projek;
	
	if (e.target != this) return;
	
	if (nbp.style.display == "block") {
	nbp.style.display = "none";
	} else {
		nbp.style.display = "block";
	}
	
		if (cart.style.display == "block") {
	cart.style.display = "none";
	} else {
		cart.style.display = "block";
	}
	
		if (library.style.display == "block") {
	library.style.display = "none";
	} else {
		library.style.display = "block";
	}
	
		if (kontakt1.style.display == "none") {
	kontakt1.style.display = "block";
	} else {
		kontakt1.style.display = "none";
	}
});
