/* empty css                           */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Kadir Lofca's portfolio.">
        <meta name="keywords" content="kadir lofca, time perception, IEEE VR, study, research, virtual reality">
		<meta name="author" content="Kadir Lofca">
		<title>Kadir Lofca - Touch VR</title>
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
								<img src="../assets/images/qc/qc-1.png">
							</div>
							<div>
								<img src="../assets/images/qc/qc-2.png">
							</div>
						</div>
						
						<p>I developed a Unity Package (a plugin) that handles character movement states such as walking, falling, jumping, etc. I implemented a state machine that checks conditions determined by the developer to decide the movement mode.</p>
						<br>
						<p>To make the process of creating character movement more fun, I also included various movement logic, such as walking, wall running etc. Many physics forces such as gravity and drag are also implemented. The package is a a plug-and-play experience, simply calling these included functions in the physics update will handle the character movement.</p>
						<br>						
						<p><a href="https://youtu.be/AWanXyoGAEc" target="_blank" rel="noopener noreferrer" class="text-gradient-6">Demonstration of the project in my YouTube channel.</a></p>
						<br>

						Control the character yourself! (Hit ESC to gain back mouse control.)
						<iframe mozallowfullscreen="true" allow="autoplay; fullscreen"  src="../assets/qc-game/index.html" style="border:0px #000000 none;" name="Quick Character Showcase" scrolling="no" msallowfullscreen="true" allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="0" marginheight="px" marginwidth="320px" height="540px" width="960px"></iframe>
						<p>Developed on <mark>Unity Engine</mark> using <mark>C#</mark>.</p>
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
