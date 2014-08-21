'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					cleancss: true
				},
				files: {
					"webroot/css/style.css": "webroot/css/src/style.less"
				}
			}
		},
		watch: {
			scripts: {
				files: ['webroot/css/src/*.less'],
				tasks: ['less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
