var LIBRARY_API = "https://library-zyxt.onrender.com";
//var LIBRARY_API = "http://localhost:8080/";
var allBooks;
var title;
const table1 = [];
var nickNameToHire;

library.addEventListener("click", function() {
	con.innerHTML = libraryTekst;
});

var text = "";

async function getAllBooks() {
  const response = await fetch(LIBRARY_API + "/book");
  
  allBooks = await response.json();
  var ul = document.createElement("ul");
  for (a of allBooks) {
	  var li =document.createElement("li");
	  const response1 = await fetch(LIBRARY_API + "/title/" + a.titleId);
	  title = await response1.json();
		text = text + "Title - " + title.title + "<br><br>Author - " + title.author + "<br><br>Publication year - " + title.publicationYear + "<br><br>Status - " + a.status + "<br><br>";
		li.innerHTML = text;
		ul.appendChild(li);
		text = "";
  }
  
  con.innerHTML = libraryTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.appendChild(ul);
  
  return text;
}

async function getFreeBooks() {
  const response = await fetch(LIBRARY_API + "/book");
  
  allBooks = await response.json();
  var ul = document.createElement("ul");
  var i = 0;
  for (let a of allBooks) {
	  var li =document.createElement("li");
	  var inputs = document.createElement("input");
	  inputs.setAttribute('type', 'text');
	  inputs.placeholder="Type nickname to rent a book";
	  var button = document.createElement("button");
	  button.setAttribute('class', 'hire');
	  button.textContent = "Hire!";
	  const response1 = await fetch(LIBRARY_API + "/title/" + a.titleId);
	  title = await response1.json();
	  if (a.status == "AVAILABLE") {
		i++;
		table1.push(a.id);
		button.setAttribute('id', 'button' + i);
		inputs.setAttribute('id', 'input' +i);
		text = text + "Title - " + title.title + "<br><br>Author - " + title.author + "<br><br>Publication year - " + title.publicationYear + "<br><br>Status - " + a.status + "<br><br>";
		li.innerHTML = text;
		li.appendChild(inputs);
		li.appendChild(button);
		ul.appendChild(li);
		text = "";
		
            button.addEventListener('click', function() {
                var inputId = this.id.replace('button', 'input');
                var input = document.getElementById(inputId);
                if (input) {
                    var nickname = input.value;
                    hire(a.id, nickname);
					setTimeout(getFreeBooks, 1000);
                } else {
                    console.error('Input not found!');
                }
            });
	  }
  }
  
  con.innerHTML = libraryTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.appendChild(ul);
  
  return text;
}

async function hire(booksId, readerNickname) {
	const response = await fetch(LIBRARY_API + "/reader/readId?nickname="  + readerNickname);
	id = await response.json();
	const response1 = await fetch(LIBRARY_API + "/hire/rent?bookId="+booksId+"&readerId="+id, {
  method: 'POST',
});
};

	document.body.addEventListener("click", function(e) {
		
		if(e.target.id == "allBooks") {
				getAllBooks();
		}
});

	document.body.addEventListener("click", function(e) {
		
		if(e.target.id == "freebooks") {
				getFreeBooks();
		}
});

	document.querySelectorAll('hire').forEach((el, i) => {
		el.addEventListener('click', () => alert(`cliked ${i+1}`))
	})


async function addReader(name, lastname, nickname) {
			const response = await fetch(LIBRARY_API + "/reader", {
				method: 'POST',
			headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
body: `{
   "name" : ${name},
   "lastName" : ${lastname},
   "nickName" : ${nickname}
  }`,
});
  nameu.value="";
  lastnameu.value="";
  nicknameu.value="";
}

	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "reader") {
			    var nam = '"' + nameu.value + '"';
			    var lastnam = '"' + lastnameu.value + '"';
			    var nicknam = '"' + nicknameu.value + '"';
				addReader(nam, lastnam, nicknam);
		}
	});
	
async function getUserId(nickname) {
	const response = await fetch(LIBRARY_API + "/reader/readId?nickname="  + nickname);
	var id = await response.json();
	return id;
}

async function getAllHiresForUser(id) {
	    const response = await fetch(LIBRARY_API + "/hire/user?readerId=" + id);
		const list = await response.json();
		return list;
};

		
		async function getUserHires() {
			var ul = document.createElement("ul");
			var nickname = returnhire.value;
			if (nickname != "") {
				nickNameToHire = nickname;
			}
			const response = await fetch(LIBRARY_API + "/reader/readId?nickname="  + nickNameToHire);
	        var id = await response.json();
			const response1 = await fetch(LIBRARY_API + "/hire/user?readerId=" + id);
			let list = await response1.json();
			var i = 0;
			for (li of list) {
				var x = li.id;
				const response = await fetch(LIBRARY_API + "/book/" +li.bookId);
				book = await response.json();
				if (book.status == "RENTED" && li.returned == null) {
				i++;
				var li =document.createElement("li");
				var button = document.createElement("button");
				button.setAttribute('class', 'hire');
				button.textContent = "Return book!";
				const response2 = await fetch(LIBRARY_API + "/title/" + book.titleId);
				title = await response2.json();
				ul.appendChild(li);
				button.setAttribute('id', x);
				text = text + "Title - " + title.title + "<br><br>Author - " + title.author + "<br><br>Publication year - " + title.publicationYear + "<br><br>Status - " + book.status + "<br><br>";
				li.innerHTML = text;
				li.appendChild(button);
				ul.appendChild(li);
				text = "";
				
				button.addEventListener('click', function() {
					var buttonId = this.id.replace('button');
					var button = document.getElementById(buttonId);
					if (button) {
                    var buttonIds = button.id;
					ret(buttonIds);
					setTimeout(getUserHires, 1000);
                } else {
                    console.error('Input not found!');
                }
				});
			}
		}
		con.innerHTML = libraryTekst;
		con.innerHTML += "<br>";
		con.innerHTML += "<br>";
		con.innerHTML += "<br>";
		con.appendChild(ul);
	}
		
	    async function ret(li) {
			const response = await fetch(LIBRARY_API + "/hire/return?hireId=" + li, {
				method: 'PUT'
				});
		}
		
	document.body.addEventListener("click", function(e) {
		if(e.target.id == "showrent") {
			getUserHires();
		}
	});
	
		 async function howManyAvailable(li) {
			const response2 = await fetch(LIBRARY_API + "/book/howManyFree?title=" + li)
			const howManyFree = await response2.json();
			con.innerHTML = libraryTekst;
			con.innerHTML += "<br>";
			con.innerHTML += "<br>";
			con.innerHTML += "Free books with title " + li + " is " + howManyFree;
		return howManyFree;
}

	document.body.addEventListener("click", function(e) {
		if(e.target.id == "showHowManyFree") {
			var go = howManyFree.value;
			howManyAvailable(go);
		}
	});
	
async function addTitle(title, author, publicationYear) {
    try {
        const response = await fetch(LIBRARY_API + "/title", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                publicationYear: publicationYear
            })
        });

        const responseData = await response.json();
        const id = responseData.id;

        if (id) {
            console.log("ID dodanego tytułu:", id);
            addBook(id);
        } else {
            throw new Error('Odpowiedź serwera nie zawiera ID.');
        }

    } catch (error) {
        console.error('Wystąpił błąd:', error);
        // Obsługa błędu (opcjonalna)
    }
	titleBook.value = "";
	authorBook.value = "";
	publicationYearBook.value = "";
}

   async function addBook(titleId) {
			const response = await fetch(LIBRARY_API + "/book", {
			method: 'POST',
			headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: `{
		"titleId" : ${titleId}
		}`,
	});
}

	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "addBook") {
			    var title1 = titleBook.value;
			    var author1 = authorBook.value;
			    var publicationYear1 = publicationYearBook.value;
				addTitle(title1, author1, publicationYear1);
		}
	});

    
			
			
		