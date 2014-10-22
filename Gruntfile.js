module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'assets/styles.css': 'assets/styles.scss',
					'assets/grid.css': 'assets/grid.scss'
				}
			}
		},

		watch: {
			css: {
				files: ['assets/*.scss', 'assets/*.css', 'assets/*.scss', 'assets/*.css'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}

	});

	// Register your plugins here
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register your tasks here
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('dev', ['watch']);
};