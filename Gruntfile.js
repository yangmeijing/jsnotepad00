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
      expand:true;
      src:['*.html','*-*/*.html','list/*.html'],
      dest:'dist/'                        
    }
  }    
  },
  cssmin: {
  files:{
      expand:true,
      src:['*-*/*.css','list/*.css'],
      dest:'dist/'
                                           
  }
  },
  uglify: {
  release:{
  files: {
    'dist/dlg-about/dlg-about.js':'./dlg-about/dlg-about.js',
    'dist/dlg-search/dlg-search.js':'./dlg-search/dlg-search.js',
    'dist/dlg-font/dlg-font.js':'./dlg-font/dlg-font.js',
    'dist/dlg-goto/dlg-goto.js':'./dlg-goto/dlg-goto.js',
    'dist/dlg-replace/dlg-replace.js':'./dlg-replace/dlg-replace.js',
    'dist/list/list.js':'./list/list.js',


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
