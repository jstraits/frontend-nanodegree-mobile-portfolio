module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				src: 'js/perfmatters.js',
				dest: 'js/perfmatters.min.js'
			}
		},
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						width: 100,
					}],
				},
				files: [{
					expand: true,
					cwd: 'views/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images/'
				}]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			},
			dynamic2: {
				files: [{
					expand: true,
					cwd: 'dist/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		inlinecss: {
			main: {
				files: {
					'index.html': 'index.html'
				}
			}
		}


    });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-inline-css');

    grunt.registerTask('default', ['uglify', 'responsive_images', 'imagemin', 'cssmin', 'inlinecss']);

};