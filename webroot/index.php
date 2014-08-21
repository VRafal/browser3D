<!DOCTYPE HTML>
<html class="no-js">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Browser</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="/css/normalize.css">
	<link rel="stylesheet" href="/css/fonts.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/print.css">
	<script src="/js/vendor/modernizr-2.7.1.min.js"></script>
</head>

<body>
	<!--[if lt IE 8]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->

	<div id="container">
		<div class="wraper">
			<h1>Browser <span>3D</span></h1>
			<h4>Author: <span>Rafał Bernaczek ak. VRB</span></h4>
		</div>
		<div class="bigWraper">
			<canvas id="renderCanvas"></canvas>
		</div>
	</div>


	<script src="/js/vendor/jquery-1.11.0.min.js"></script>
	<script src="/js/vendor/babylon.1.12.js"></script>

	<script src="/js/src/brow.project.js"></script>
	<script src="/js/src/brow.project.area.js"></script>
	<script src="/js/src/brow.world.js"></script>
	<script src="/js/src/brow.event.js"></script>
	<script src="/js/src/brow.event.dispatcher.js"></script>
	<script src="/js/src/brow.js"></script>
	<script>
		BROW.init();
	</script>
</body>
</html>