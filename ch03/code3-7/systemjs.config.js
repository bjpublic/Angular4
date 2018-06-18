(function (global) {

  global.System.config({

    // 로드해야 하는 모듈을 실제로 로드할 경로 및 파일을 설정한다.
    map: {
      '@angular/animations':
        'node_modules/@angular/animations/bundles/animations.umd.js',
      '@angular/core':
        'node_modules/@angular/core/bundles/core.umd.js',
      '@angular/common':
        'node_modules/@angular/common/bundles/common.umd.js',
      '@angular/compiler':
        'node_modules/@angular/compiler/bundles/compiler.umd.js',
      '@angular/forms':
        'node_modules/@angular/forms/bundles/forms.umd.js',
      '@angular/http': 
        'node_modules/@angular/http/bundles/http.umd.js',
      '@angular/platform-browser':
        'node_modules/@angular/platform-browser/bundles/' + 
        'platform-browser.umd.js',
      '@angular/platform-browser-dynamic':
        'node_modules/@angular/platform-browser-dynamic/bundles/' + 
        'platform-browser-dynamic.umd.js',
      '@angular/router':
        'npm:@angular/router/bundles/router.umd.js',

      'rxjs': 'node_modules/rxjs',

      'app': 'dist', // app 모듈을 로드할 경로
    },

    // 로드하는 모듈의 확장자가 없을 경우 기본 확장자와 모듈의 메인 파일
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

  //가장 첫번째 모듈을 로드
  global.System.import('app').
    catch( function(err){ console.error(err); } );

})(this);
