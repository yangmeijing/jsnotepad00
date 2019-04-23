/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
                configFile: '.eslintrc.json'
          
      },
        target: ['*/*.js']
        
    },
  csslint: {
    options: {
              csslintrc: '.csslintrc'
          
    },
        src: '*/*.css'
        
  },
  htmlhint: {
    options: {
              htmlhintrc: '.htmlhintrc'
          
    },
          src: '*/*.html'
                
  },
    
  htmlmin: {
  options: {
          collapseWhitespace: true,
                  preserveLineBreaks: false
                        
  },
  index:{
  files: {
        'dist/dlg-about/index.html': './dlg-about/index.html',
        'dist/dlg-search/index.html': './dlg-search/index.html',
        'dist/dlg-font/index.html': './dlg-font/index.html',
        'dist/list/index.html': './list/index.html',
        'dist/dlg-goto/index.html': './dlg-goto/index.html',
        'dist/dlg-replace/index.html': './dlg-replace/index.html',
        'dist/index.html':'./index.html'


                        
  }
  }    
  },
  cssmin: {
        'dist/dlg-about/dlg-about.css': './dlg-about/dlg-about.css',
        'dist/dlg-search/dlg-search.css': './dlg-search/dlg-search.css',
        'dist/dlg-font/dlg-font.css': './dlg-font/dlg-font.css',
        'dist/list/list.css': './list/list.css',
        'dist/dlg-goto/dlg-goto.css': './dlg-goto/dlg.css',
        'dist/dlg-replace/dlg-replace.css': './dlg-replace/dlg-replace.css',


                        

  },
  uglify: {
  release:{
  files: {
        'dist/dlg-about/dlg-about.js': './dlg-about/dlg-about.js',
        'dist/dlg-search/dlg-search.js': './dlg-search/dlg-search.js',
        'dist/dlg-font/dlg-font.js': './dlg-font/dlg-font.js',
        'dist/list/list.js': './list/list.js',
        'dist/dlg-goto/dlg-goto.js': './dlg-goto/dlg.js',
        'dist/dlg-replace/dlg-replace.js': './dlg-replace/dlg-replace.js',


  }
        
  }
  }



  });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);

};
