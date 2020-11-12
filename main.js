'use strict';

var myImage = new Array(	
  "img/header_image1.jpg",
  "img/header_image2.jpg",		
  "img/header_image3.jpg",		
  "img/header_image4.jpg",	
  );	


  var myNowCnt = -1;		
  var myflg = 0;	
  function myChange(){	

    myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;	
  	
    myflg = (myflg==0) ? 1 : 0;				
 		
    if (myflg == 0){
      document.getElementById("header_img").src = myImage[myNowCnt];		
      document.getElementById("header_img").className = "p-header__imageSecond";		
      document.getElementById("header_imgSecond").className = "p-header__image";	
    }else{

      document.getElementById("header_imgSecond").src = myImage[myNowCnt];		
      document.getElementById("header_img").className = "p-header__image";
      document.getElementById("header_imgSecond").className = "p-header__imageSecond";		
     
    }
    setTimeout( "myChange()" , 5000 );		
  }	
  myChange(); 

  class MobileMenu {
    constructor(){
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.list = document.querySelector('.mobile-menu__main');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
      }
      _getEventType() {
          return window.ontouchstart ? 'touchstart' : 'click';
      }
      _toggle() {
        this.DOM.container.classList.toggle('menu-open');
      }

      _addEvent() {
          this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
          this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
          this.DOM.list.addEventListener(this.eventType, this._toggle.bind(this));
      }
}
new MobileMenu();