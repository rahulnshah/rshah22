<!DOCTYPE html>
<html>
<head>
	<title>Rahul Shah</title>
	<?php require("../partials/iconTag.php"); ?>
	<link rel= "stylesheet" type = "text/css" href="CSS/portfolio.css">  
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism.min.css"/>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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
		<p class="h1">Hi. I'm Rahul</p>
		</blockquote>
		<p class="text-center">Software Engineer, Leetcoder, Open Source Enthusiast</p>
		<h3 class="text-center">🚀</h3>
	</figure>
	<div class= "container">
				<h1>Welcome!</h1>
				<p>My name is Rahul.  I am an undergraduate student at New Jersey Institute of Technology, where I am
				pursuing a Bachelor of Science in Computer Science degree.  I enjoy building elegant software through 
				programming.  Web Development, Decentralized Applications (DApps), and Internet of Things (IoT) are things that excite me the most in the realm of Computer Science.  On this homepage, you can find links to my personal
				projects and blog posts.</p>
				<p>If you have any questions or any suggestions about movies, games, or just want to say a friendly
				"Hello!", you can reach me at <a class="text-decoration-none" href="mailto:rahulnshah24@gmail.com">rahulnshah24@gmail.com</a>.</p>
	</div>
	<div class="col-md-12 text-center">
		<button type="button" class="btn btn-dark">Show Resume</button>
	</div>
	<br>
	<div class="container">
		<p id="demo"></p>
		<!-- <div class="row md-5 g-4">
		</div> -->
	</div>
	<br>
	<!--github contribution chart-->
	<!-- Include the library. -->
<script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>

<!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
<link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"/>
<!-- Prepare a container for your calendar. -->
<div class="container">
	<div class="calendar">
		<!-- Loading stuff -->
		Loading the data just for you.
	</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js"></script>
<br>
<div class= "container">
	<h3 class="text-center">Data Structures I Used</h3>
	<ul class="list-unstyled">
		<ul>
			<li><h4>Map</h4></li>
			<pre>
				<code class="language-javascript">
					const showThem = function(key, json){...};
					const showSkills = function(key, json){...};
					const showBasics = 	function(key, json){...};
					const map1 = new Map();
					//store the functions as value and property as key
					for (const property in json) {
						...
					}
					//loop the map and call each key's function and call each function 
					for (const property in json) {
						map1.get(property)(property,json);
					}
				</code>
			</pre>
			<li><h4>Array</h4></li>
			<pre>
				<code class="language-javascript">
					//put all prop. from json into allKeys in order
					const allKeys = []; 
					for (const property in json){
						allKeys.push(property);
					}
				</code>
			</pre>
			<li><h4>Stack</h4></li>
			<pre>
				<code class="language-javascript">
					//fill in innerHTML here 
					document.querySelector("#demo").innerText = "Loaded";
					while(allKeys.length !== 0)
					{
						//pop from allKeys - Last In First Out behavior shown here 
						document.querySelector("#demo").innerText += "..." + allKeys.pop();
					}
					//Loaded...languages......basics
				</code>
			</pre>
			<li><h4>Circular Doubly Linked List</h4></li>
			<pre>
				<code class="language-javascript">
				const listHead = dummyCard;
				/*
				another object called curr also references dummyCard; 
				it will moving forward; can set it to reference listHead and it 
				would mean the same thing
				*/
				let curr = dummyCard;
				/*
				loop data; data is JSON that is returned from calling the GitHub REST api endpoint; 
				data is an array of JS objects. Each JS object stores details about
				every repository in key-value pairs
				*/
				for (let repo of data) {
					let name = repo.name;
					let description = repo.description;
					let url = repo.html_url;
					//create a GitHubRepository object 
					let aRepo = new GitHubRepository(name,description,url);
					aRepo.setPreviousRepository(curr);
					//curr refers to the dummy Card, which always present before loop runs
					curr.setNextRepository(aRepo);
					//move curr to reference the next GitHubRepository object in list
					curr = curr.getNextRepository();
				}
				//close the circular doubly linked list
				curr.setNextRepository(listHead);
				listHead.setPreviousRepository(curr);
				</code>
			</pre>
		</ul>
	</ul>
</div>
<?php require("../partials/footer.php"); ?>
<script>
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "rahulnshah", { responsive: true, tooltips: true});
</script>
	<script src="scripts/showRes.js"></script>
</body>
</html>
