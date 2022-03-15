<!DOCTYPE html>
<html>
<head>
	<title>Rahul Shah</title>
	<link rel= "stylesheet" type = "text/css" href="CSS/style.css"> 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
	<header id= "main-header">
		<div class= "container" >
			<h1>Home</h1>
		</div>
	</header>
	<!--add require statement -->
	<?php require("../partials/nav.php"); ?>
	<section id = "showcase">
		<div class = "container">
			<h1>HI, I'M RAHUL</h1>
			<p style="color:white;" ><a href = "https://github.com/rahulnshah" target="_blank" style="color:white; text-decoration: none;">GitHub</a> | 
			<a href = "http://linkedin.com/in/rahulnshah" target="_blank" style="color:white; text-decoration: none;">LinkedIn</a></p>
		</div>
		
	</section>
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
		<aside id= "sidebar">
			<img src="images/myPic.jpg" alt="Open Google Chrome to see my profile picture. Thank you">
		</aside>
	</div>
		<button id="showResumeBtn">Show Resume</button>
		<header>
			<h1>Hello</h1>
		</header>

		<section>

		</section>
	<script>
		function getJSONString(json)
		{
			let str = JSON.stringify(json);
			console.log(str);
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
  			$("#showResumeBtn").click(function(){
				  showResume();
  			});
		});
	</script>

	<footer id = "main-footer">
		<p>Built by Rahul Shah<br><a href= "https://github.com/bchiang7/v4" style="color:white; text-decoration: none">Inspired by Brittany Chiang</a></p>
	</footer>
</body>
</html>
