/* empty css                           */
function render$1({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Kadir Lofca's portfolio.">
        <meta name="keywords" content="kadir lofca, magnolia house, virtual reality, software engineering">
		<meta name="author" content="Kadir Lofca">
		<title>Kadir Lofca - Magnolia House</title>
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
								<img src="../assets/images/magnolia/magnolia_ss_0.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_1.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_2.jpg" >
							</div>
							<div>
									<img src="../assets/images/magnolia/magnolia_ss_3.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_4.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_5.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_6.jpg" >
							</div>
							<div>
								<img src="../assets/images/magnolia/magnolia_ss_7.jpg" >
							</div>
						</div>
						
						<p>I led development of the Magnolia House virtual reality arch-viz. Coming across many problems throughout the development, I gained valuable experience in software development and team organization. The project was a major success, many people praised the experience.</p>
						<br>
						<p>An early version of the project.</p>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/bI-NNR-QzFQ" title="Magnolia House demonstration." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<br><br>
						<p>The arch-viz being completely in VR, I programmed a teleportation system for the viewers to enjoy the house from all angles. With all the hardware limitations a <mark>Meta Quest 2</mark> brings, I optimized the experience to run smoothly and reduce motion sickness.</p>
						<br>
						<p>The final version of the project is being experienced by visitors of the Historic Magnolia House.</p>
						<br>
						<blockquote class="blockquote mt-3">
							<p>Walking around the hotel, you observe the mid-century modern furniture and décor. Jazz music plays from a room upstairs, its volume changing as you move closer or farther away. You peer off the porch at the Greensboro countryside, which looks quite different from the downtown neighborhood that surrounds the hotel today.</p>
							<footer class="blockquote-footer"><h6 class="font-family-tertiary font-small fw-normal uppercase"><a href="https://cas.uncg.edu/virtual-reality-brings-the-past-to-life-at-magnolia-house/" target="_blank" rel="noopener noreferrer" class="my-link-inline">Elizabeth Keri</a></h6></footer>
						</blockquote>
						<br>
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
render$1["astro:html"] = true;

const magnolia$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: render$1
}, Symbol.toStringTag, { value: 'Module' }));

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Kadir Lofca is a computer science student with experience in virtual reality and game development. This is his portfolio!">
        <meta name="keywords" content="kadir lofca, kadir, lofca, baturalp, portfolio">
		<meta name="author" content="Kadir Lofca">
		<title>Kadir Lofca</title>
		<link rel="stylesheet" href="./assets/style.css">

	</head>
	<body>
		<header>
			<div class="navbar">
				<div class="focus navbox">
					<div class="navlink"><a href="index.html">Kadir Lofca</a></div>

					<div class="margin-auto"></div>

					<div class="navlink"><a href="collection.html">Collection</a></div>
					<div class="navlink"><a href="assets/files/Kadir-Lofca-Resume.pdf" rel="noreferrer nofollow noopener" target="_blank">Resume</a></div>
					<!-- <div class="navlink"><a href="story.html">Story</a></div> -->
				</div>
			</div>
			<img id="header-wave" src="assets/images/wave.png">
		</header>

        <div class="hero">
            <div class="focus">
                <h3><a href="collection.html">↜COLLECTION</a></h3>
                <h2>PROJECT</h2>
                <h1>MAGNOLIA HOUSE</h1>
                <p>
                    The Magnolia House provided a place to stay for black Americans during segregation. Today, it stands as an
                    artifact of the past with visitors coming to see the lives of those who stayed there.
                </p>
                
                <div class="infocards">
                    <div>
                        <h3>PROJECT INFO</h3>
                        <ul>
                            <li>VR tour for the Meta Quest 2</li>
                            <li>Navigation with teleportation</li>
                            <li>Performance optimization</li>
                        </ul>
                    </div>
                    <div>
                        <h3>DEVELOPMENT INFO</h3>
                        <ul>
                            <li>My roles: Designer, Programmer</li>
                            <li>Team size: 2</li>
                            <li>Tools: C#, Unity, GitHub, Blender</li>
                            <li>Development time: 4 months</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3>MOTIVATION</h3>
                    <p>Magnolia House was my first professional experience. The job posting stated that the position was for graduate
                        students only, so I wasn't going to apply. My cousin encouraged me, telling me my skills were perfect for the job.
                        I applied and got the job!
                    </p>
                    <p>
                        I worked with my professor and a client to create this VR tour for people to see
                        the Magnolia House in the 1950's. Now, the tour is experienced and praised by visitors of the house.
                    </p>
                </div>

                <div class="infocards">
                    <div>
                        <h3>TUTORIAL</h3>
                        <p>
                            Once the user puts on the headset, they find themselves in the corridor of the house. A black stripe surrounding them leads their
                            eye towards the tutorial panel. From this panel, they learn how to teleport around the house. They push the controller stick to
                            target the teleportation ray, as they do that, the tutorial panel disappears and leaves the user to explore the house. The user targets
                            the ray, releases the stick, and teleports.
                        </p>
                    </div>
                    <img src="assets/images/magnolia_tutorialpanel.jpg">
                </div>


                <div class="infocards">
                    <img src="assets/images/magnolia_teleport.gif">
                    <div>
                        <h3>NAVIGATION</h3>
                        <p>
                            The user is able to explore both floors of the house by teleporting. I implemented a navmesh that appears when the user is targeting
                            the teleportation ray. I modeled the navmesh in Blender, I had full control over where the user could explore. Because of this, I was able to leave
                            some rooms empty and focus on making the explorable rooms look and feel better.
                        </p>
                    </div>
                </div>

                <div class="infocards">
                    <div>
                        <h3>LIGHTING & REFLECTIONS</h3>
                        <p>
                            I used Unity's lighting and reflection tools to create believable lighting. I positioned lights outside the house next to the windows to simulate
                            sunlight coming in. The sunlight from the windows are assisted with a little ambient lighting too.
                        </p>
                        <p>
                            The glasses and mirrors utilize the reflection probes I positioned inside each room.
                        </p>
                    </div>
                    <img src="assets/images/magnolia_lighting.gif">
                </div>

                <div class="infocards">
                    <img src="assets/images/magnolia_shader.gif">
                    <div>
                        <h3>SHADERS & MATERIALS</h3>
                        <p>
                            I created the materials and shaders myself using the shader graph tool. 
                        </p>
                        <ul>
                            <li>
                                Some materials have a noise texture to create imperfections on surfaces to increase believability.
                            </li>
                            <li>
                                Some materials have reflections that bounce light from the reflection probes.
                            </li>
                            <li>
                                I created a diverse set of materials. Materials are opaque, transparent, reflective/non-reflective, emissive/non-emissive.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="infocards">
                    <div>
                        <h3>OCCLUSION CULLING & MODEL OPTIMIZATION</h3>
                        <p>
                            The amount of lights and reflection probes I used was very taxing on the Meta Quest 2. The framerate was below the 90hz refresh
                            rate the display was capable of.
                        </p>
                        <p>
                            I optimized the performance by utilizing frustum and occlusion culling inside Unity. But that wasn't enough. The model which was provided
                            by my team wasn't optimized for a game engine. I used Blender to delete vertices that weren't going to be seen by the user.
                        </p>
                    </div>
                    <img src="assets/images/magnolia_missingNavmesh.jpg">
                    <img src="assets/images/magnolia_outside.gif">
                    <img src="assets/images/magnolia_culling.gif">
                </div>

                <div class="infocards">
                    <img src="assets/images/magnolia_bedroom.jpg">
                    <div>
                        <h3>RESULT</h3>
                        <p>
                            We finished the project and launched it on the clients Meta Quest 2 headsets. The visitors of the house responded positively. I learned a lot
                            about optimization and VR development. 4 months spent well!
                        </p>
                    </div>
                    <img src="assets/images/magnolia_fruit.jpg">
                    <img src="assets/images/magnolia_navmesh.gif">
                </div>
            </div>
        </div>

        <footer class="focus">
            <div class="conline"></div>
            <div class="conbar">
				<div>
					<a href="mailto:kadirlofca@outlook.com" rel="noreferrer nofollow noopener" target="_blank">kadirlofca@outlook.com</a>
					<a href="https://www.linkedin.com/in/kadirlofca/" rel="noreferrer nofollow noopener" target="_blank" >LinkedIn</a>
					<a href="https://github.com/kadirlofca" rel="noreferrer nofollow noopener" target="_blank">GitHub</a>
				</div>
				<div>
					<a href="index.html">Let's Meet</a>
					<a href="collection.html">Collection</a>
					<a href="assets/files/Kadir-Lofca-Resume.pdf" rel="noreferrer nofollow noopener" target="_blank">Resume</a>
				</div>
            </div>
        </footer>
	</body>

	<script type="text/javascript" src="assets/js/header.js"></script>
</html>`
	}
render["astro:html"] = true;

const magnolia = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: render
}, Symbol.toStringTag, { value: 'Module' }));

export { magnolia as a, magnolia$1 as m };
