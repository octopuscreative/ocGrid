module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			build: {
				cwd: 'src',
				src: ['index.html'],
				dest: 'dist',
				expand: true
			}
		},

		clean: {
			build: {
				src: ['dist']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: 'src/stylesheets',
					src: ['**/*.scss'],
					dest: 'dist',
					ext: '.css'
				}]
			}
		},

		watch: {
			stylesheets: {
				files: ['src/stylesheets/*.scss'],
				tasks: ['stylesheets'],
				options: {
					spawn: false
				}
			}
		}
	});

	// Register your plugins here
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register your tasks here
	grunt.registerTask('stylesheets', ['sass']);
	grunt.registerTask('build', ['clean', 'copy', 'stylesheets']);
	grunt.registerTask('default', ['build', 'watch']);
};