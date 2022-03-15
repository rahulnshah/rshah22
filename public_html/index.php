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
		<p class="text-center">Software Engineer, Leetcoder, Open Source Contributer</p>
	</figure>
	<div class= "container">
		<section id = "main">
				<h1>Welcome!</h1>
				<p>My name is Rahul Shah.  I am an undergraduate student at New Jersey 
				Institute of Technology, where I am
				pursuing a Bachelor of Science in Computer Science degree.  I enjoy building elegant software with computer 
				programming and I am a strong believer in the power of automation and statistical 
				analysis that could be achieved through programming.  I have created this website to 
				feature some of my fun projects in this area of expertise.</p>
				<p>If you have any questions or any suggestions about movies, games, or just want to say a friendly
				"Hello!", you can reach me at <a href="mailto:rahulnshah24@gmail.com" style="color:white; text-decoration: underline;">rahulnshah24@gmail.com</a>.</p>
		</section>
		<!-- <aside id= "sidebar">
			<img src="images/myPic.jpg" alt="Open Google Chrome to see my profile picture. Thank you">
		</aside> -->
	</div>
	<div class="col-md-12 text-center">
		<button type="button" class="btn btn-dark">Show Resume</button>
		<button type="button" class="btn btn-primary">Create Card</button>
	</div>
	<div class="container-fluid">
		<div class="row row-cols-1 row-cols-md-5 g-4">

		</div>
	</div>
		<header>
			
		</header>

		<section>

		</section>
		<!-- <footer id = "main-footer">
			<p class="text-center">Built by Rahul Shah<br><a href= "https://github.com/bchiang7/v4" class="text-decoration-none">Inspired by Brittany Chiang</a></p>
		</footer> -->
	<script>
		function getJSONString(json)
		{
			// let str = JSON.stringify(json);
			console.log("Hello");
		}
		function showResume()
		{
			const fetchPromise = fetch('json/rs_resume.json');
			fetchPromise
			.then( response => {
				if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
				}
				return response.json();
			})
			.then( json => {
				console.log("sending JSON...");
				getJSONString(json);
			})
			.catch( error => {
				console.log("error occured");
			});
		}
		$(document).ready(function(){
  			$(".btn-dark").click(function(){
				  showResume();
  			});

			$(".btn-primary").click(function(){
				// creates a bootstrap card 
				let myFlash = document.getElementsByClassName("row-cols-1")[0];
				let cardDiv = document.createElement("div");
				cardDiv.className = "card border-dark";
				let cardBody1 = document.createElement("div");
				let h5tag = document.createElement("h5");
				let para = document.createElement("p");
				h5tag.className = "card-title";
				para.className = "card-text";
				h5tag.innerText = "Title";
				para.innerText = "paragraph";
				cardBody1.className = "card-body text-dark";
				cardBody1.appendChild(h5tag);
				cardBody1.appendChild(para);
				cardDiv.appendChild(cardBody1);
				let colDiv = document.createElement("div");
				colDiv.className = "col";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);

  			});
		});
	</script>
</body>
</html>
