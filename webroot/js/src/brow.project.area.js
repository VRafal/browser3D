/**
* @author: Rafał Bernaczek ak. VRB
* @date: Date: 2.07.2014
*/

"use strict";

var BROW;
(function(BROW) {
	/**
	 * Projects area
	 */
	BROW.ProjectAreaView = function(env) {
		var env = env;
		var projects = [];
		var vortex = [];

		this.addProjectView = function(projectView) {
			projects.push(projectView);
		}

		this.create = function() {
			vortexEstimation();
			// console.log(getVortexPosition(30));

			for (var q = 0; q < projects.length; q++) {
				projects[q].create(getVortexPosition(q));
			}
		}

		/**
		 * <pre>
		 * Vortex:
		 *
		 * -3  |30|31|32|33|34|35|36|65|
		 * -2  |29|12|13|14|15|16|37|66|
		 * -1  |28|11| 2| 3| 4|17|38|67|
		 *  0  |27|10| 1| 0| 5|18|39|68|
		 *  1  |26| 9| 8| 7| 6|19|40|69|
		 *  2  |25|24|23|22|21|20|41|70|
		 *  3  |48|47|46|45|44|43|42|71|
		 *  4        |77|76|75|74|73|72|
		 *
		 *      -3|-2|-1| 0| 1| 2| 3| 4
		 *
		 * Vektor:
		 * 0 <
		 * 1 ^
		 * 2 >
		 * 3 v
		 * </pre>
		 */
		var vortexEstimation = function() {
			var x = 0, y = 0, vektor = 0;
			var xMin = 0, xMax = 0, yMin = 0, yMax = 0;

			for (var q = 0; q < projects.length; q++) {
				vortex.push({
					x: x,
					y: y
				});

				switch (vektor) {
					case 0:
						x--;
						if (x < xMin) {
							xMin = x;
							vektor++;
						}
						break;
					case 1:
						y--;
						if (y < yMin) {
							yMin = y;
							vektor++;
						}
						break;
					case 2:
						x++;
						if (x > xMax) {
							xMax = x;
							vektor++;
						}
						break;
					case 3:
						y++;
						if (y > yMax) {
							yMax = y;
							vektor = 0;
						}
						break;
				}
			}
		};

		var getVortexPosition = function(no, referencePoint) {
			if (referencePoint == undefined) referencePoint = {
				x: 0,
				y: 0
			};
			return {
				x: referencePoint.x + (vortex[no].x * (BROW.params.projectItemSize + BROW.params.projectItemMargin)),
				y: referencePoint.y + (vortex[no].y * (BROW.params.projectItemSize + BROW.params.projectItemMargin))
			}
		};
	};

})(BROW || (BROW = {}));