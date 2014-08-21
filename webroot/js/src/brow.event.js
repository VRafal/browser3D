/**
* @author: Rafał Bernaczek ak. VRB
* @date: Date: 2.07.2014
*/

var BROW;
(function(BROW) {
	BROW.Event = function(eventName, obj) {
		this.SCENE_CLICK = 'scenClick';

		this.eventName = eventName;
		this.obj = obj;
	};
})(BROW || (BROW = {}));