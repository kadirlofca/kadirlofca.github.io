/* empty css                           */
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
		<link rel="stylesheet" href="./assets/cards.css">
	</head>
	<body>
		<header class="clickfall">
			<div class="navbar">
				<div class="focus navbox">
					<div class="navlink"><a href="index.html">Kadir Lofca</a></div>
				
					<div class="margin-auto"></div>
	
					<div class="navlink selected"><a href="collection.html">Collection</a></div>
					<div class="navlink"><a href="assets/files/Kadir-Lofca-Resume.pdf" rel="noreferrer nofollow noopener" target="_blank">Resume</a></div>
					<!-- <div class="navlink"><a href="story.html">Story</a></div> -->
				</div>
			</div>
			<img id="header-wave" src="assets/images/wave.png" class="clickfall">
		</header>

        <div class="hero">
            <div class="focus">
                <h2>COLLECTION</h2>
                <h1>BEHOLD! MY STUFF</h1>
                <p>Click on a card to see it in detail.</p>

                <br>

                <div class="cards">
                    <a href="timeperception.html" class="card" data-tilt> 
                        <img src="assets/images/timeperception_realvsvr.gif">
                        <div>
                            <h3>TIME PERCEPTION VR</h3>
                            <p>Research on how people perceive time in VR.</p>
                            <p>C#, R, Unity, RStudio, GitLab, Blender</p>
                        </div>              
                    </a>

                    <a href="magnolia.html" class="card" data-tilt> 
                        <img src="assets/images/magnolia_solarium.gif">
                        <div>
                            <h3>MAGNOLIA HOUSE VR</h3>
                            <p>VR tour/archviz of the historic house.</p>
                            <p>C#, Unity, GitHub, Blender</p>
                        </div>              
                    </a>


                    <a href="slicedice.html" class="card" data-tilt> 
                        <img src="assets/images/slicedice_combat.gif">
                        <div>
                            <h3>SLICE & DICE</h3>
                            <p>Throw the dice and damage the orcs by the number you get!</p>
                            <p>C#, Unity, Plastic SCM, Blender, Affinity Designer</p>
                        </div>              
                    </a>

                    <a onclick="kroger()" class="card" data-tilt>
                        <img id="kroger" src="assets/images/kroger_0.jpg">
                        <div>
                            <h3>KROGER.JS</h3>
                            <p>Kroger??? How did he get here???</p>
                            <p><br><br></p>
                        </div>                
                    </a>
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
	<script type="text/javascript" src="assets/js/card.js"></script>
	<script type="text/javascript" src="assets/js/kroger.js"></script>
</html>
`
	}
render["astro:html"] = true;

export { render as default };
