(function(e,t){var n=function(){function r(t,r){if(t=="dot"){r='<ol class="dots">';e.each(n.li,function(e){r+='<li class="'+(e==n.i?t+" active":t)+'">'+ ++e+"</li>"});r+="</ol>"}else{r='<div class="';r=r+t+'s">'+r+t+' prev">'+n.o.prev+"</div>"+r+t+' next">'+n.o.next+"</div></div>"}n.el.addClass("has-"+t+"s").append(r).find("."+t).click(function(){var t=e(this);t.hasClass("dot")?n.stop().to(t.index()):t.hasClass("prev")?n.prev():n.next()})}var n=this;n.o={speed:500,delay:3e3,init:0,pause:!t,loop:!t,keys:t,dots:t,arrows:t,prev:"&larr;",next:"&rarr;",fluid:t,starting:t,complete:t,items:">ul",item:">li",easing:"swing",autoplay:true};n.init=function(t,i){n.o=e.extend(n.o,i);n.el=t;n.ul=t.find(n.o.items);n.max=[t.outerWidth()|0,t.outerHeight()|0];n.li=n.ul.find(n.o.item).each(function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s});var i=n.o,s=n.ul,o=n.li,u=o.length;n.i=0;t.css({width:n.max[0],height:o.first().outerHeight(),overflow:"hidden"});s.css({position:"relative",left:0,width:u*100+"%"});o.css({"float":"left",width:n.max[0]+"px"});i.autoplay&&setTimeout(function(){if(i.delay|0){n.play();if(i.pause){t.on("mouseover mouseout",function(e){n.stop();e.type=="mouseout"&&n.play()})}}},i.init|0);if(i.keys){e(document).keydown(function(e){var t=e.which;if(t==37)n.prev();else if(t==39)n.next();else if(t==27)n.stop()})}i.dots&&r("dot");i.arrows&&r("arrow");if(i.fluid){e(window).resize(function(){n.r&&clearTimeout(n.r);n.r=setTimeout(function(){var e={height:o.eq(n.i).outerHeight()},r=t.outerWidth();s.css(e);e["width"]=Math.min(Math.round(r/t.parent().width()*100),100)+"%";t.css(e)},50)}).resize()}if(e.event.special["swipe"]||e.Event("swipe")){t.on("swipeleft swiperight swipeLeft swipeRight",function(e){e.type.toLowerCase()=="swipeleft"?n.next():n.prev()})}return n};n.to=function(r,i){if(n.t){n.stop();n.play()}var s=n.o,o=n.el,u=n.ul,a=n.li,l=n.i,c=a.eq(r);e.isFunction(s.starting)&&!i&&s.starting(o,a.eq(l));if((!c.length||r<0)&&s.loop==t)return;if(!c.length)r=0;if(r<0)r=a.length-1;c=a.eq(r);var h=i?5:s.speed|0,p=s.easing,d={height:c.outerHeight()};if(!u.queue("fx").length){o.find(".dot").eq(r).addClass("active").siblings().removeClass("active");o.animate(d,h,p)&&u.animate(e.extend({left:"-"+r+"00%"},d),h,p,function(t){n.i=r;e.isFunction(s.complete)&&!i&&s.complete(o,c)})}};n.play=function(){n.t=setInterval(function(){n.to(n.i+1)},n.o.delay|0)};n.stop=function(){n.t=clearInterval(n.t);return n};n.next=function(){return n.stop().to(n.i+1)};n.prev=function(){return n.stop().to(n.i-1)};};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this),u="unslider"+(r>1?"-"+ ++i:""),a=(new n).init(s,t);s.data(u,a).data("key",u)})};n.version="1.0.0"})(jQuery,false)
/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  $('.slider').unslider({
    delay: 3500, 
  });

}); /* end of as page load scripts */
