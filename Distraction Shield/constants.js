/* ---------- ----- background ----- ---------- */
var zeeguuExLink = "https://www.zeeguu.unibe.ch/practice/get-ex";

/* ---------- ----- BlockedSite ----- ---------- */
var FAVICONLINK = "https://www.google.com/s2/favicons?domain=";


/* ---------- ----- UserSettings, inject ----- ---------- */
var modes = {
    lazy: {
        label:"lazy",
        zeeguuText:"You are in lazy mode. Click <a id='originalDestination'>'Skip'</a> any time to continue browsing."
    },
    pro: {
        label: "pro",
        zeeguuText:"You are in pro mode. Complete the exercise and click the 'Take me away!' button when you are done to continue browsing."
    }
};

/* ---------- ----- BlockedSiteList ----- ---------- */
var newUrlNotUniqueError = "New blocked site item to be added was found to resolve to an already blacklisted website, " +
                           "please try a different url.\nDuplicate url: ";

/* ---------- ----- urlFormatter ----- ---------- */
var INVALID_URL_MESSAGE = "We unfortunately could not reach the site you are trying to block.\n" +
                          "Are you sure the url is correct? \n \n";
var FILE_NOT_FOUND = 404;
var SERVER_ERROR = 500;
var REQUEST_ABORTED = 0;
var SUCCESFUL_REQUEST = 200;
var REQUEST_COMPLETED = 4;

/* -------------------- Text Messages ----------------------- */
var zeeguuInfoText = "Hey, you tried to enter one of the sites you wanted to be protected from!";

/* -------------------- Keypress constants ----------------------- */
/* ---------- ----- optionsPage/htmlFunctionality ----- ---------- */
var KEY_DELETE = 46;
var KEY_ENTER  = 13;

/* -------------------- Number constants ----------------------- */
/* ---------- ----- turnoffSlider ----- ---------- */
var MAX_TURN_OFF_TIME = 480;

