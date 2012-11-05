/* jSticky Plugin
 * =============
 * Author: Andrew Henderson (@AndrewHenderson)
 * Date: 9/7/2012
 * Update: 11/4/2012
 * Website: http://github.com/andrewhenderson/jsticky/
 * Description: A jQuery plugin that keeps select DOM element(s)
 * in view while scrolling the page.
 */
;(function(e){e.fn.sticky=function(t){function i(){return typeof r.zIndex=="number"?!0:!1}function o(){return 0<e(r.stopper).length||typeof r.stopper=="number"?!0:!1}var n={topSpacing:0,zIndex:"",stopper:".sticky-stopper"},r=e.extend({},n,t),s=i(),u=o();return this.each(function(){function h(){var r=c.scrollTop();if(u&&typeof l=="string")var h=e(l).offset().top,p=h-n-i;else if(u&&typeof l=="number")var p=l;if(a<r){t.after(f).css({position:"fixed",top:i}),s&&t.css({zIndex:o});if(u&&p<r){var d=p-r+i;t.css({top:d})}}else t.css({position:"static",top:""}),f.remove()}var t=e(this),n=t.outerHeight(),i=r.topSpacing,o=r.zIndex,a=t.offset().top-i,f=t.clone().css("visibility","hidden").addClass("sticky-placeholder"),l=r.stopper,c=e(window);c.bind("scroll",h)})}})(jQuery)