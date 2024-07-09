
jQuery(document).ready(function($) {
	var url = window.location.href;
	$('#ctrixlink').attr("href", getcitrixurl(url)) ;
	$('#androidlink').text(url) ;
   var osfound = getOS();
   if(osfound === "iOS"){
		$('#ios').css("display","block");
   }else if(osfound === "Android"){
		$('#android').css("display","block")
   }else{
		$('#pc').css("display","block")
   }
	
});


function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
}

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

var getcitrixurl = function(url){
	var l = getLocation(url);
	var ctxurl = "ctxmobilebrowsers://" + l.hostname + l.pathname + l.search;
	//console.log(ctxurl);
	return ctxurl;
}


