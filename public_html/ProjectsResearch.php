<!DOCTYPE html>
<html>
<head>
	<title>Rahul Shah</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<!-- <link rel= "stylesheet" type = "text/css" href="CSS/style.css">  -->
</head>
<body>
	<!-- <header id= "main-header">
		<div class= "container" >
			<h1>Projects</h1>
		</div>
	</header> -->
	<?php require("../partials/nav.php"); ?>
	<figure class="text-center">
		<blockquote class="blockquote">
			<p class="h1">A Few of My Creations</p>
		</blockquote>
	</figure>
<div class="container-fluid">
	<div class="row row-cols-1 row-cols-md-5 g-4">
		<div class="col">
            <div class="card bg-light">
				<img src="images/Openpyxl Mockup.png" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Automation With Openpyxl</h5>
					<p class="card-text">A Python script that uses OOP principles to plot data onto a specific chart.  Built with the Openpyxl library.</p>
				</div>
				<div class="card-body">
				<a href="https://github.com/rshah33/dataRepresentationsWithPython.git" class="btn btn-primary">Open in GitHub</a>
					<!-- <a href="#" class="card-link">Another link</a> -->
				</div>
			</div>
		</div>

		<div class="col">
            <div class="card bg-light">
				<img src="images/ShoppingList Mockup.png" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Shopping List</h5>
					<p class="card-text">A simple GUI app that keeps track of various items in a shopping list.  User can also email the list to its recipient with the click of a button.</p>
				</div>
				<div class="card-body">
				<a href="https://github.com/rshah33/shoppingList.git" class="btn btn-primary">Open in GitHub</a>
					<!-- <a href="#" class="card-link">Another link</a> -->
				</div>   
            </div>
		</div>

		<div class="col">
            <div class="card bg-light">
			<img src="images/Playlist Mockup.png" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">Sounds Playlist</h5>
				<p class="card-text">A GUI app with playable sounds, built with Tkinter and Python.</p>
			</div>
			<div class="card-body">
			<a href="https://github.com/rshah33/soundsPlaylist.git" class="btn btn-primary">Open in GitHub</a>
				<!-- <a href="#" class="card-link">Another link</a> -->
			</div>
        </div>
	</div>
</div>
<?php require("../partials/footer.php"); ?>
</body>

</html>
