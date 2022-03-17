<!DOCTYPE html>
<html>
<head>
	<title>Rahul Shah</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<!-- <link rel= "stylesheet" type = "text/css" href="CSS/style.css">  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
	<!-- <header id= "main-header">
		<div class= "container" >
			<h1>Home</h1>
		</div>
	</header> -->
	<!--add require statement -->
	<?php require("../partials/nav.php"); ?>
	<figure class="text-center">
		<blockquote class="blockquote">
		<p class="h1">Hi, I am Rahul</p>
		</blockquote>
		<p class="text-center">Software Engineer, Leetcoder, Open Source Enthusiast</p>
	</figure>
	<div class= "container">
				<h1>Welcome!</h1>
				<p>My name is Rahul Shah.  I am an undergraduate student at New Jersey 
				Institute of Technology, where I am
				pursuing a Bachelor of Science in Computer Science degree.  I enjoy building elegant software with computer 
				programming and I am a strong believer in the power of automation and statistical 
				analysis that could be achieved through programming.  I have created this website to 
				feature some of my fun projects in this area of expertise.</p>
				<p>If you have any questions or any suggestions about movies, games, or just want to say a friendly
				"Hello!", you can reach me at <a href="mailto:rahulnshah24@gmail.com" style="color:white; text-decoration: underline;">rahulnshah24@gmail.com</a>.</p>
	</div>
	<div class="col-md-12 text-center">
		<button type="button" class="btn btn-dark">Show Resume</button>
	</div>
	<br>
	<div class="container">
		<div class="row row-cols-1 row-cols-md-5 g-4">
		</div>
	</div>
	<script>
		function showBasics(key, json)
		{
			//make a bootstrap card here, and for card text, just sepearte each key-val pair with \n in the p element
			let myFlash = document.getElementsByClassName("row-cols-1")[0];
				let cardDiv = document.createElement("div");
				cardDiv.className = "card border-dark";
				let cardBody1 = document.createElement("div");
				let h5tag = document.createElement("h5");
				let para = document.createElement("p");
				h5tag.className = "card-title";
				para.className = "card-text";
				h5tag.innerText = key;
				let arr = Object.keys(json[key]);
				let emptyStr = "";
				//run a for loop hrere 
				for(let i = 0; i < arr.length; i++)
				{
					emptyStr = emptyStr + arr[i] + ": " + json[key][arr[i]] + "\n";
				}
				para.innerText = emptyStr;
				cardBody1.className = "card-body text-dark";
				cardBody1.appendChild(h5tag);
				cardBody1.appendChild(para);
				cardDiv.appendChild(cardBody1);
				let colDiv = document.createElement("div");
				colDiv.className = "col";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function showSkills(key, json)
		{        
				let myFlash = document.getElementsByClassName("row-cols-1")[0];
				let cardDiv = document.createElement("div");
				cardDiv.className = "card border-dark";
				let cardBody1 = document.createElement("div");
				let h5tag = document.createElement("h5");
				let para = document.createElement("p");
				h5tag.className = "card-title";
				para.className = "card-text";
				//decided the inner text for each para and h5 tag, and the headerDiv text 
				h5tag.innerText = key;
				para.innerText = json[key].join(", ");
				cardBody1.className = "card-body text-dark";
				cardBody1.appendChild(h5tag);
				cardBody1.appendChild(para);
				cardDiv.appendChild(cardBody1);
				let colDiv = document.createElement("div");
				colDiv.className = "col";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function showThem(key, json)
		{
			//you have a list of objects
			let myFlash = document.getElementsByClassName("row-cols-1")[0]; 
			let cardDiv = document.createElement("div");
				cardDiv.className = "card border-dark";
				let cardBody1 = document.createElement("div");
				let h5tag = document.createElement("h5");
				h5tag.className = "card-title";
				h5tag.innerText = key;
				cardBody1.className = "card-body text-dark";
				cardBody1.appendChild(h5tag);
				for(let i = 0; i < json[key].length; i++)
				{
					let emptyStr = "";
					let arr = Object.keys(json[key][i]);
					let para = document.createElement("p");
					para.className = "card-text";
					for(let j = 0; j < arr.length; j++)
					{
						let attachStr = Array.isArray(json[key][i][arr[j]]) ? json[key][i][arr[j]].join(" | ") : json[key][i][arr[j]];
						emptyStr = emptyStr + arr[j] + ": " + attachStr + "\n";
					}
					para.innerText = emptyStr; 
					cardBody1.appendChild(para);
				}
				cardDiv.appendChild(cardBody1);
				let colDiv = document.createElement("div");
				colDiv.className = "col";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function populateResume(json)
		{
			showThem("education",json);
			showThem("experience",json);
			showBasics("basics",json);
			showSkills("skills", json);
			showThem("profiles", json);
			showThem("languages",json);
			showThem("awards", json);
		}
		function showResume(btn)
		{
			//btn.disabled = true;
			//remove the event lister off of btn, this functon is alread y called so it will procedd as is 
			btn.removeEventListener("click", showResume);
			btn.addEventListener("click",function()
				{
					document.querySelector(".row-cols-1").hidden = false;
				});
			//make two more btns appear here 
			const fetchPromise = fetch('json/rs_resume.json');
			fetchPromise
			.then( response => {
				if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
				}
				console.log("response status", response.status);
				return response.json();
			})
			.then( json => {
				console.log("json received!");
				populateResume(json);
				//create a hide and unhide butn 
				let hideButton = document.createElement("button");
				//let unhideButton = document.createElement("button");
				hideButton.innerText = "Hide Resume";
				hideButton.type = "button";
				// unhideButton.type = "button";
				// unhideButton.innerText = "Unhide Resume";
				hideButton.className = "btn btn-danger";
				//unhideButton.className = "btn btn-primary";
				//append both two 
				let btnDiv = document.querySelector(".col-md-12");
				btnDiv.appendChild(hideButton);
				// btnDiv.appendChild(unhideButton);
				//add event listeners 
				hideButton.addEventListener("click",function()
				{
					document.querySelector(".row-cols-1").hidden = true;
				});
				// unhideButton.addEventListener("click",function()
				// {
				// 	document.querySelector(".row-cols-1").hidden = false;
				// });
			})
			.catch( error => {
				console.log(error);
			});
		}
		$(document).ready(function(){
  			$(".btn-dark").click(function(){
				  showResume(this);
  			});
		});
	</script>
</body>
</html>
