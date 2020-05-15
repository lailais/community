const ua = navigator.userAgent;
const isWindowsPhone = /(?:Windows Phone)/.test(ua);
const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
const isAndroid = /(?:Android)/.test(ua);
const isFireFox = /(?:Firefox)/.test(ua);
const isTablet =
    /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
const isPhone = /(?:iPhone)/.test(ua);
const isAppUa = ua.includes("XOXO/TheBumpApp");

$.isTablet = isTablet;
$.isMobile = isPhone || isAndroid || isSymbian;
$.device = $.isMobile ? "mobile" : "desktop";
$.deviceType = $.isTablet ? "tablet web" : $.isMobile ? "mobile web" : "desktop web";
$.isInApp = isAppUa && $.isMobile;
$.requestUrl = window.location.href;
