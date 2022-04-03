<!DOCTYPE html>
<html>
<head>
	<title>Rahul Shah</title>
	<link rel= "stylesheet" type = "text/css" href="CSS/portfolio.css">  
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
		<p class="h1">Hi, I am Rahul</p>
		</blockquote>
		<p class="text-center">Software Engineer, Leetcoder, Open Source Enthusiast</p>
	</figure>
	<div class= "container">
				<h1>Welcome!!!</h1>
				<p>My name is Rahul Shah.  I am an undergraduate student at New Jersey 
				Institute of Technology, where I am
				pursuing a Bachelor of Science in Computer Science degree.  I enjoy building elegant software with computer 
				programming and I am a strong believer in the power of automation and statistical 
				analysis that could be achieved through programming.  I have created this website to 
				feature some of my fun projects in this area of expertise.</p>
				<p>If you have any questions or any suggestions about movies, games, or just want to say a friendly
				"Hello!", you can reach me at <a href="mailto:rahulnshah24@gmail.com">rahulnshah24@gmail.com</a>.</p>
	</div>
	<div class="col-md-12 text-center">
		<button type="button" class="btn btn-dark">Show Resume</button>
	</div>
	<br>
	<div class="container">
		<div class="row md-5 g-4">
		</div>
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

<?php require("../partials/footer.php"); ?>
<script>
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "rahulnshah", { responsive: true, tooltips: true});
</script>
	<script src="scripts/showRes.js"></script>
</body>
</html>
