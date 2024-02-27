/* empty css                           */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Kadir Lofca's portfolio.">
        <meta name="keywords" content="kadir lofca, kadir, lofca, baturalp">
		<title>Kadir Lofca - Template</title>
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
								<img src="../assets/images/magnolia/magnolia_ss_0.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_1.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_2.jpg">
							</div>
							<div>
									<img src="../assets/images/magnolia/magnolia_ss_3.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_4.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_5.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_6.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_7.jpg">
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_8.jpg">
							</div>
						</div>
						
						<p>I led development of the Magnolia House virtual reality arch-viz. Coming across many problems throughout the development, I gained valuable experience in software development and team organization. The project was a major success, many people praised the experience.</p>

						<blockquote class="blockquote mt-3">
							<p>Walking around the hotel, you observe the mid-century modern furniture and décor. Jazz music plays from a room upstairs, its volume changing as you move closer or farther away. You peer off the porch at the Greensboro countryside, which looks quite different from the downtown neighborhood that surrounds the hotel today.</p>
							<footer class="blockquote-footer"><h6 class="font-family-tertiary font-small fw-normal uppercase"><a href="https://cas.uncg.edu/virtual-reality-brings-the-past-to-life-at-magnolia-house/" class="text-gradient-6">Elizabeth Keri</a></h6></footer>
						</blockquote>

						<p>The arch-viz being completely in VR, I programmed a teleportation system for the viewers to enjoy the house from all angles. With all the hardware limitations a <mark>Meta Quest 2</mark> brings, I optimized the experience to run smoothly and reduce motion sickness.</p>
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
