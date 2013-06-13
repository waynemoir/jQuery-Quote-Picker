module.exports = function (grunt) {
	grunt.initConfig({

		clean: ['_site'],

		compass: {
			dist: {
				options: {
					sassDir: 'css',
					cssDir: 'css'
				}
			}
		},

		 watch: {
			files: './css/**/*.scss',
			tasks: ['compass'],
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['clean', 'compass', 'watch']);
};