/**
* @author: Rafał Bernaczek ak. VRB
* @date: Date: 2.07.2014
*/

"use strict";

var BROW;
(function(BROW) {
	/**
	 * Project
	 */
	BROW.Project = function(projectProperties, no) {
		this.name = projectProperties.name;
		this.id = projectProperties.id;
		this.img = projectProperties.img;
		this.no = no;
	};

	/**
	 * Project view
	 */
	BROW.ProjectView = function(_project, env) {
		var project = _project;
		var env = env;
		var mash, position;

		/**
		 * Create
		 */
		this.create = function(_position) {
			position = _position;
			// console.log(position);
			mash = BABYLON.Mesh.CreateBox("Box", BROW.params.projectItemSize, env.scene);
			// name, height, diameterTop, diameterBottom, tessellation (highly detailed or not), scene, updatable
			// mash = BABYLON.Mesh.CreateCylinder("cylinder" + this.id, 0.2, BROW.params.projectItemSize, BROW.params.projectItemSize - 0.2, 6, env.scene, false);
			// mash.rotation.x = Math.PI / 2;
			mash.scaling.z = 0.1;
			mash.position = new BABYLON.Vector3(position.x, position.y, 0);
			mash.checkCollisions = true;

			if (project.img) {
				var material = new BABYLON.StandardMaterial("projectTexture" + this.id, env.scene);
				material.diffuseTexture = new BABYLON.Texture(project.img, env.scene);
				material.diffuseTexture.uScale = 1;
				material.diffuseTexture.vScale = 1;
				mash.material = material;
			}

			 mash.actionManager = new BABYLON.ActionManager(env.scene);
			 mash.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, clickAction));
		};

		var clickAction = function() {
			particleCreate();
		};

		/**
		 * Particle
		 */
		var particleCreate = function() {
			var particleSystem = new BABYLON.ParticleSystem("particles", 60, env.scene);
			particleSystem.particleTexture = new BABYLON.Texture("/images/flare.png", env.scene); // Definiuje fakturę związaną z każdej cząstki
			particleSystem.particleTexture.uScale = 0.1;
			particleSystem.particleTexture.vScale = 0.11;
			particleSystem.minAngularSpeed = -0.5; // Zakres prędkości obrotowych kątowych każdej cząstce
			particleSystem.maxAngularSpeed = 0.5;
			particleSystem.minSize = 0.1; // Zakres rozmiarów każdej cząstki
			particleSystem.maxSize = 2;
			particleSystem.minLifeTime = 0.5; // Zakres wcieleń dla każdej cząstki
			particleSystem.maxLifeTime = 2.0;
			particleSystem.minEmitPower = 8; // Zakres uprawnień do emisji (prędkość emisji) każdej cząstki
			particleSystem.maxEmitPower = 10.0;
			particleSystem.emitter = new BABYLON.Vector3(position.x, position.y, BROW.params.projectItemSize / -2 + 0.2); // Vector3 do określenia położenia układu cząstek. Można również zastosować siatkę o w tym przypadku układ cząstek użyje położenie siatki
			particleSystem.emitRate = 500; // Ile cząstki są uruchamiane w każdej klatce
			particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
			particleSystem.minEmitBox = new BABYLON.Vector3(BROW.params.projectItemSize / -2, BROW.params.projectItemSize / -2, 0);
			particleSystem.maxEmitBox = new BABYLON.Vector3(BROW.params.projectItemSize / 2, BROW.params.projectItemSize / 2, 0);
			particleSystem.direction1 = new BABYLON.Vector3(-2, -1, -1); // Zakres kierunków każdej cząstki
			particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
			particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1); // Gama kolorów dla każdej cząstki
			particleSystem.color2 = new BABYLON.Color4(0, 1, 1, 1);
			particleSystem.gravity = new BABYLON.Vector3(0, 0, -20);
			particleSystem.disposeOnStop = true;
			particleSystem.targetStopDuration = 2; // Zatrzymuje system cząstek po określonym czasie trwania
			particleSystem.start();
		};

	};
})(BROW || (BROW = {}));