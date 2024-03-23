//var API_NBP_SORTNAME = "https://b32cc1be-6932-4ae5-9066-8955a434a4b3-00-3gqi336hb2y7f.worf.replit.dev/v1/nbp";
var API_NBP_SORTNAME = "https://nbp-simple-poject-1.onrender.com/v1/nbp";
var request = new Request(API_NBP_SORTNAME);
var myList = document.querySelector("u1");
var nbps;

var text = "";

async function sortByName() {
  const response = await fetch(API_NBP_SORTNAME + "/sortByName");
  nbps = await response.json();
  for (n of nbps) {
	  text = text + "ID - " + n.id + "   Name -   " + n.name + "   Posting Date -   " + n.postingDate + "  USD cost -   " + n.costUsd + "  PLN cost   " + n.costPln + "<br>";
	  console.log(n);
  }
  console.log(text);
  console.log(nbps);
  
  con.innerHTML = nbpTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += text;
  text = "";
  
  return text;
}

async function sortByDate() {
  const response = await fetch(API_NBP_SORTNAME + "/sortByDate");
  nbps = await response.json();
    for (n of nbps) {
	  text = text + "ID - " + n.id + "   Name -   " + n.name + "   Posting Date -   " + n.postingDate + "  USD cost -   " + n.costUsd + "  PLN cost   " + n.costPln + "<br>";
	  console.log(n);
  }
  console.log(text);
  console.log(nbps);
  
  con.innerHTML = nbpTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += text;
  text = "";

  console.log(nbps);
  return nbps;
}

async function getByAny(any) {
  const response = await fetch(API_NBP_SORTNAME + "/getByAny?any=" + any);
  nbps = await response.json();
   for (n of nbps) {
	  text = text + "ID - " + n.id + "   Name -   " + n.name + "   Posting Date -   " + n.postingDate + "  USD cost -   " + n.costUsd + "  PLN cost   " + n.costPln + "<br>";
	  console.log(n);
  }
  console.log(text);
  console.log(nbps);
  
  con.innerHTML = nbpTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += text;
  text = "";

  console.log(nbps);
  return nbps;
}

async function postItem(na, date, cost) {
	const response = await fetch(API_NBP_SORTNAME, {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: `{
   "name" : ${na},
   "postingDate" : ${date},
   "costUsd" : ${cost}
  }`,
});

response.json().then(data => {
  console.log(JSON.stringify(data));
});
}

async function getByDate(date) {
  const response = await fetch(API_NBP_SORTNAME + "/getByDate?date=" + date);
  nbps = await response.json();
   for (n of nbps) {
	  text = text + "ID - " + n.id + "   Name -   " + n.name + "   Posting Date -   " + n.postingDate + "  USD cost -   " + n.costUsd + "  PLN cost   " + n.costPln + "<br>";
	  console.log(n);
  }
  console.log(text);
  console.log(nbps);
  
  con.innerHTML = nbpTekst;
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += "<br>";
  con.innerHTML += text;
  text = "";

  console.log(nbps);
  return nbps;
}

nbp.addEventListener("click",function(){ 
	con.innerHTML = nbpTekst;
	var sn = document.getElementById("sortname");
	var sd = document.getElementById("sortdate");
	var gd = document.getElementById("getbydate");
	var ga = document.getElementById("getbyany");
});

	document.body.addEventListener("click", function(e) {
		
		if(e.target.id == "sortname") {
				sortByName();
		}
	});
	
	document.body.addEventListener("click", function(e) {
		
		if(e.target.id == "sortdate") {
				sortByDate();
		}
	});
	
	document.body.addEventListener("click", function(e) {
		
		if(e.target.id == "getbydate") {
			    var date = data.value;
				getByDate(date);
		}
	});
	
	document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "getbyany") {
			    var any = anystring.value;
				getByAny(any);
		}
	});
	
		document.body.addEventListener("click", function(e) {
	
		if(e.target.id == "postnbp") {
			    var na = '"' + itemname.value + '"';
				console.log(na);
			    var date = '"' + postingdate.value + '"';
				console.log(date);
			    var cost = usdcost.value;
				console.log(cost);
				postItem(na, date, cost);
		}
	});