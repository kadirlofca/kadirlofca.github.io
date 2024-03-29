/* empty css                           */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Kadir Lofca's portfolio.">
        <meta name="keywords" content="kadir lofca, hack nc 2022, hackathon, godot, game development">
		<meta name="author" content="Kadir Lofca">
		<title>Kadir Lofca - Godot Workshop</title>
		<!-- Favicon -->
        <link href="../assets/images/favicon.png" rel="shortcut icon">
		<!-- CSS -->
		<link href="../assets/plugins/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="../assets/plugins/owl-carousel/owl.carousel.min.css" rel="stylesheet">
		<link href="../assets/plugins/owl-carousel/owl.theme.default.min.css" rel="stylesheet">
		<link href="../assets/css/theme.css" rel="stylesheet">
		<!-- Fonts/Icons -->
		<link href="../assets/plugins/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
	</head>
	<body data-preloader="1">

		<!-- Blog Post section -->
		<div class="section">
			<div class="my-container-short">
				<h4 class="mb-5 text-center my-link-inline"><a href="../index.html">Back</a></h4>
			</div>

			<div class="container">
				<div class="row g-4">
					<div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
						<div class="owl-carousel owl-nav-overlay owl-dots-overlay mb-4" data-owl-items="1" data-owl-nav="true" data-owl-autoplay="true">
							<div>
								<img src="../assets/images/godot-workshop/godot-workshop_0.jpg" >
							</div>
							<div>
								<img src="../assets/images/godot-workshop/godot-workshop_1.jpg" >
							</div>
							<div>
								<img src="../assets/images/godot-workshop/godot-workshop_2.jpg" >
							</div>
							<div>
								<img src="../assets/images/godot-workshop/godot-workshop_4.jpg" >
							</div>
						</div>
						<p>I created a videogame in Godot using visual scripting to showcase programming concepts and the game development process. Initially, my idea was to use <mark>Unreal Engine blueprints</mark>, as I was experienced with it. I had to switch the project to Godot because I needed a lightweight game engine that could run on any hardware.</p>

						<br>
						<img src="../assets/images/godot-workshop/godot-workshop_3.jpg" >
<br>
						<br>
						<p>I designed and programmed a game where the player rotates a moving spaceship to avoid collisions. The goal is to survive as much as you can, the UI on the screen indicates how much time you have survived. And to make the game interesting, the spaceship increases it's speed over time.</p>
						<br>
						<p>The project introduces concepts such as frame rate delta and physics, collision detection, player input, and UI. The game is programmed using visual scripting only.</p>
						<br>
						<a href="https://github.com/kadirlofca/hacknc22-godotgame" target="_blank" rel="noopener noreferrer" class="text-gradient-6">Project GitHub page.</a>
						<br>
						<br>
						<p>Developed on <mark>Godot</mark> using <mark>visual scripting</mark>.</p>

					</div>
				</div><!-- end row -->
			</div><!-- end container -->
		</div>
		<!-- end Blog Post section -->

		<footer>
			<div class="section my-footer-gradient">
				<div class="container">
					<div class="row g-4 align-items-center">
						<div class="col-12 col-md-6 text-center text-md-start">
							<a href="#" onclick="copyToClipboard(); return false;" class="mt-2" value="kadirlofca@outlook.com" id="copyToClipboard">kadirlofca@outlook.com</a>
							<span class="tooltiptext"></span>
						</div>
						<div class="col-12 col-md-6 text-center text-md-end">
							<ul class="list-inline">
								<li><a href="https://github.com/kadirlofca" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a></li>
								<li><a href="https://twitter.com/KadirLofca" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a></li>
								<li><a href="https://www.linkedin.com/in/kadir-lofca-6b4070169/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></li>
								<li><a href="https://www.youtube.com/@happeDev" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a></li>
							</ul>
						</div>
					</div><!-- end row -->
				</div><!-- end container -->
			</div>
		</footer>

		<!-- ***** JAVASCRIPTS ***** -->
		<script src="../assets/plugins/jquery.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
		<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
		<script src="../assets/plugins/plugins.js"></script>
		<script src="../assets/js/functions.js"></script>
	</body>
</html>`
	}
render["astro:html"] = true;

export { render as default };
