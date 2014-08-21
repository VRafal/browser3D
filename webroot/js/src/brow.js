/**
* @author: Rafał Bernaczek ak. VRB
* @date: Date: 2.07.2014
*/

"use strict";

var BROW;
(function(BROW, $) {
	BROW.params = {
		develop: true,
		idCanvas: 'renderCanvas',

		projectItemSize: 5,
		projectItemMargin: .5
	};

	BROW.data = {
		projects: [{
			id: 111,
			name: 'Testowy',
			img: '/images/test2.jpg'
		}, {
			id: 222,
			name: 'Testowy',
			img: '/images/test_image.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: '/images/test2.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: '/images/test_image.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: '/images/test2.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: '/images/test_image.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: '/images/test_image.jpg'
		}, {
			id: 222,
			name: 'Testowy',
			img: '/images/test_image.jpg'
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 222,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}, {
			id: 333,
			name: 'Testowy',
			img: ''
		}]
	};

	BROW.Environment = function(idCanvas) {
		this.idCanvas = idCanvas;
		this.canvas = document.getElementById(this.idCanvas);
		this.engine = new BABYLON.Engine(this.canvas, true);
		this.scene = new BABYLON.Scene(this.engine);

		this.runRenderLoop = function() {
			var scene = this.scene;
			this.engine.runRenderLoop(function() {
				scene.render();
			});
		};
	};

	BROW.Camera = function(env) {
		var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, BABYLON.Vector3.Zero(), env.scene);
		camera.setPosition(new BABYLON.Vector3(0, 0, -30));
		camera.attachControl(env.canvas, false);
	};

	BROW.Lights = function(env) {
		var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), env.scene);
	};

	/**
	 * Init
	 */
	BROW.init = function() {
		if (BROW.data.projects.length == 0) {
			console.log('No projects');
			return;
		}

		var env = new BROW.Environment(BROW.params.idCanvas);
		var world = new BROW.World(env);
		var camera = new BROW.Camera(env);
		var lights = new BROW.Lights(env);

		var projectArea = new BROW.ProjectAreaView(env);

		for ( var no in BROW.data.projects) {
			var project = new BROW.Project(BROW.data.projects[no], no);
			var projectView = new BROW.ProjectView(project, env);
			projectArea.addProjectView(projectView);
		}

		projectArea.create();

		env.runRenderLoop();

		// Test event
//		var ee = new BROW.Event('kielbasa', {
//			name: 'cos'
//		});
//		console.log(ee);

	}
})(BROW || (BROW = {}), jQuery);