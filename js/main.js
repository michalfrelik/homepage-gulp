!function(n){var c={};function e(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=c,e.d=function(n,c,t){e.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,c){if(1&c&&(n=e(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var r in n)e.d(t,r,function(c){return n[c]}.bind(null,r));return t},e.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(c,"a",c),c},e.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconsole.log('Siema');\r\nconst name = 'Michał Frelik';\r\nconst age = 26;\r\nconsole.log(name);\r\nconsole.log(age);\r\nconsole.log(`Nazywam się ${name} i mam ${age}  lat`);\r\n\r\nconst welcome = (name, age) => {\r\n\tconsole.log(`Witaj ${name}, masz ${age} lat!`);\r\n};\r\n\r\nwelcome(name, age);\r\nwelcome('Michał Ferlik', 26);\r\n\r\n\r\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js');\r\n\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n\tconst navigationList = document.querySelector('.navigation__list--js');\r\n\tnavigationList.classList.toggle('navigation__list--visible');\r\n\tnavigationSwitcher.innerHTML = 'XXX';\r\n});\r\n\r\n\r\n\r\nconst button = document.querySelector('.header__button--js');\r\nconsole.log(button);\r\n\r\nbutton.addEventListener('click', (e) => {\r\n\tconst header = document.querySelector('.header__title--js')\r\n\theader.innerHTML = '!! Pierwszy button !!';\r\n\theader.classList.toggle('header__title--red');\r\n\tif (header.classList.contains('header__title--red')) {\r\n\t\tconsole.log('jest klasa');\r\n\t} else {\r\n\t\tconsole.log('brak klasy');\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSyxTQUFTLElBQUk7O0FBRTdDO0FBQ0Esc0JBQXNCLEtBQUssU0FBUyxJQUFJO0FBQ3hDOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuY29uc29sZS5sb2coJ1NpZW1hJyk7XHJcbmNvbnN0IG5hbWUgPSAnTWljaGHFgiBGcmVsaWsnO1xyXG5jb25zdCBhZ2UgPSAyNjtcclxuY29uc29sZS5sb2cobmFtZSk7XHJcbmNvbnNvbGUubG9nKGFnZSk7XHJcbmNvbnNvbGUubG9nKGBOYXp5d2FtIHNpxJkgJHtuYW1lfSBpIG1hbSAke2FnZX0gIGxhdGApO1xyXG5cclxuY29uc3Qgd2VsY29tZSA9IChuYW1lLCBhZ2UpID0+IHtcclxuXHRjb25zb2xlLmxvZyhgV2l0YWogJHtuYW1lfSwgbWFzeiAke2FnZX0gbGF0IWApO1xyXG59O1xyXG5cclxud2VsY29tZShuYW1lLCBhZ2UpO1xyXG53ZWxjb21lKCdNaWNoYcWCIEZlcmxpaycsIDI2KTtcclxuXHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fc3dpdGNoZXItLWpzJyk7XHJcblxyXG5uYXZpZ2F0aW9uU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QtLWpzJyk7XHJcblx0bmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xyXG5cdG5hdmlnYXRpb25Td2l0Y2hlci5pbm5lckhUTUwgPSAnWFhYJztcclxufSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1dHRvbi0tanMnKTtcclxuY29uc29sZS5sb2coYnV0dG9uKTtcclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUtLWpzJylcclxuXHRoZWFkZXIuaW5uZXJIVE1MID0gJyEhIFBpZXJ3c3p5IGJ1dHRvbiAhISc7XHJcblx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fdGl0bGUtLXJlZCcpO1xyXG5cdGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX3RpdGxlLS1yZWQnKSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2plc3Qga2xhc2EnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coJ2JyYWsga2xhc3knKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);