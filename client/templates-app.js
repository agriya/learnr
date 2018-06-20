angular.module('templates-app', ['themes/learnr/views/common/404.tpl.html', 'themes/learnr/views/common/footer.tpl.html', 'themes/learnr/views/common/header.tpl.html', 'themes/learnr/views/contactUs/contactUs.tpl.html', 'themes/learnr/views/courses/addCourse.tpl.html', 'themes/learnr/views/courses/courses.tpl.html', 'themes/learnr/views/courses/directives/amountDisplay.tpl.html', 'themes/learnr/views/courses/directives/courseCategory.tpl.html', 'themes/learnr/views/courses/directives/homeCourse.tpl.html', 'themes/learnr/views/courses/directives/manageCourseNavbar.tpl.html', 'themes/learnr/views/courses/directives/onlineLessons.tpl.html', 'themes/learnr/views/courses/directives/paymentButtons.tpl.html', 'themes/learnr/views/courses/learnCourse.tpl.html', 'themes/learnr/views/courses/learning.tpl.html', 'themes/learnr/views/courses/manageCourse.tpl.html', 'themes/learnr/views/courses/manageCourseBasics.tpl.html', 'themes/learnr/views/courses/manageCourseCurriculum.tpl.html', 'themes/learnr/views/courses/manageCourseDangeZone.tpl.html', 'themes/learnr/views/courses/manageCourseFeedback.tpl.html', 'themes/learnr/views/courses/manageCourseGoals.tpl.html', 'themes/learnr/views/courses/manageCourseHelp.tpl.html', 'themes/learnr/views/courses/manageCourseImage.tpl.html', 'themes/learnr/views/courses/manageCoursePrice.tpl.html', 'themes/learnr/views/courses/manageCoursePromoVideo.tpl.html', 'themes/learnr/views/courses/manageCourseSummary.tpl.html', 'themes/learnr/views/courses/search.tpl.html', 'themes/learnr/views/courses/teaching.tpl.html', 'themes/learnr/views/courses/viewCourse.tpl.html', 'themes/learnr/views/courses/wishlist.tpl.html', 'themes/learnr/views/home/home.tpl.html', 'themes/learnr/views/pages/pages.tpl.html', 'themes/learnr/views/users/activation.tpl.html', 'themes/learnr/views/users/change_password.tpl.html', 'themes/learnr/views/users/directives/profileImage.tpl.html', 'themes/learnr/views/users/directives/profileName.tpl.html', 'themes/learnr/views/users/forgot_password.tpl.html', 'themes/learnr/views/users/login.tpl.html', 'themes/learnr/views/users/logout.tpl.html', 'themes/learnr/views/users/signup.tpl.html', 'themes/learnr/views/users/subscribe_plans.tpl.html', 'themes/learnr/views/users/user_profile.tpl.html']);

angular.module("themes/learnr/views/common/404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/common/404.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"well-lg\"></div>\n" +
    "	<div class=\"well-sm navbar-btn list-group-item-heading\"></div>\n" +
    "	<div class=\"tex-center\">	\n" +
    "		<h3>404 Page Not Found</h3>\n" +
    "	</div>	\n" +
    "</div>\n" +
    "");
}]);

angular.module("themes/learnr/views/common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/common/footer.tpl.html",
    "<footer id=\"footer\" class=\"footer\" itemscope itemtype=\"http://schema.org/WPFooter\">\n" +
    "    <!--footer section start-->\n" +
    "    <div class=\"section jumbotron well-sm list-group-item-text\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-3\">\n" +
    "            <h6 class=\"h5 text-muted initialism\">{{'Company'|translate}}</h6>\n" +
    "            <div class=\"navbar-btn clearfix\"></div>\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/about\" title=\"{{'About'|translate}}\">{{'About'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/people\" title=\"{{'People'|translate}}\" class=\"list-group-item-heading\">{{'People'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/leadership\" title=\"{{'Leadership'|translate}}\" class=\"list-group-item-heading\">{{'Leadership'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/careers\" title=\"{{'Careers'|translate}}\" class=\"list-group-item-heading\">{{'Careers'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/contactus\" title=\"{{'Contact Us'|translate}}\" class=\"list-group-item-heading\">{{'Contact Us'|translate}}</a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-3\">\n" +
    "            <h6 class=\"h5 text-muted initialism\">{{'Community'|translate}}</h6>\n" +
    "            <div class=\"navbar-btn clearfix\"></div>\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/partners\" title=\"{{'Partners'|translate}}\" class=\"list-group-item-heading\">{{'Partners'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/community\" title=\"{{'Community'|translate}}\" class=\"list-group-item-heading\">{{'Community'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/programs\" title=\"{{'Programs'|translate}}\" \n" +
    "				class=\"list-group-item-heading\">{{'Programs'|translate}}</a></li>\n" +
    "              <li><a href=\"#!/page/developers\" title=\"{{'Developers'|translate}}\" class=\"list-group-item-heading\">{{'Developers'|translate}}</a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-3\">\n" +
    "            <h6 class=\"h5 text-muted initialism\">{{'More'|translate}}</h6>\n" +
    "            <div class=\"navbar-btn clearfix\"></div>\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/terms\" title=\"{{'Terms'|translate}}\" \n" +
    "				class=\"list-group-item-heading\">{{'Terms'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/privacy-policy\" title=\"{{'Privacy Policy'|translate}}\" \n" +
    "				class=\"list-group-item-heading\">{{'Privacy Policy'|translate}}</a></li>\n" +
    "            \n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/press\" title=\"{{'Press'|translate}}\" \n" +
    "				class=\"list-group-item-heading\">{{'Press'|translate}}</a></li>\n" +
    "              <li class=\"list-group-item-heading\"><a href=\"#!/page/help\" title=\"{{'Help'|translate}}\" class=\"list-group-item-heading\">{{'Help'|translate}}</a></li>\n" +
    "			  <li oc-lazy-load=\"$root.loadTranslations\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Translations') > -1\"><div ng-translate-language-select ></div></li>\n" +
    "              \n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-3\">\n" +
    "		  <div class=\"row\">\n" +
    "				<h6 class=\"h5 text-muted initialism list-group-item-text\"> {{'Follow us on'|translate}} </h6>\n" +
    "				<ul class=\"list-inline\">\n" +
    "				  <li ng-show=\"$root.settings['social_networks.facebook']\"><a href=\"{{$root.settings['social_networks.facebook']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.twitter']\"><a href=\"{{$root.settings['social_networks.twitter']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.linkedin']\"><a href=\"{{$root.settings['social_networks.linkedin']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.foursquare']\"><a href=\"{{$root.settings['social_networks.foursquare']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-foursquare fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.pinterest']\"><a href=\"{{$root.settings['social_networks.pinterest']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-pinterest fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.flickr']\"><a href=\"{{$root.settings['social_networks.flickr']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-flickr fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.instagram']\"><a href=\"{{$root.settings['social_networks.instagram']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-instagram fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.tumblr']\"><a href=\"{{$root.settings['social_networks.tumblr']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-tumblr fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.vimeo']\"><a href=\"{{$root.settings['social_networks.vimeo']}}\" target=\"_blank\" class=\"text-muted\"> <span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-vimeo-square fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.youtube']\"><a href=\"{{$root.settings['social_networks.youtube']}}\" target=\"_blank\" class=\"text-muted\"> <span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-youtube-play fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				  <li ng-show=\"$root.settings['social_networks.google_plus']\"><a href=\"{{$root.settings['social_networks.google_plus']}}\" target=\"_blank\"  class=\"text-muted\"> <span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-google fa-stack-1x fa-inverse\"></i></span></a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "		<div class=\"col-xs-12 navbar-btn list-group-item-text\">\n" +
    "			<span class=\"navbar-btn\">© {{cdate | date:'yyyy'}} <a href=\"#!\" title=\"{{$root.settings['site.name']}}\" class=\"text-muted\">{{$root.settings['site.name']}}</a>, {{'All rights reserved.'|translate}} <a href=\"http://learnr.demo.agriya.com/\" target=\"_blank\" title=\"{{'Powered by Learnr'| translate}}\"><img src=\"assets/img/learnr.png\" alt=\"[Image: {{'Powered by Learnr'| translate}}]\" title=\"{{'Powered by Learnr'| translate}}\"></a> ,{{' v'|translate}}{{$root.settings['site.version']}} {{'made in '|translate}}&nbsp;<a href=\"http://www.agriya.com/\" target=\"_blank\" title=\"{{'Agriya Web Development'| translate}}\"><img src=\"assets/img/powered-by-agriya.png\" alt=\"[Image: {{'Agriya Web Development'| translate}}]\" title=\"{{'Agriya Web Development'| translate}}\"></a>  <a href=\"http://www.cssilize.com/\" target=\"_blank\"title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\"> <img src=\"assets/img/cssilize.png\" alt=\"[Image: {{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}]\" title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\"> </a></span>\n" +
    "			</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("themes/learnr/views/common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/common/header.tpl.html",
    "<header id=\"header\" class=\"navbar navbar-fixed-top navbar-inverse list-group-item-text\">\n" +
    "	<!-- If user not logged in -->\n" +
    "    <div class=\"bg-primary\" ng-show=\"!isAuth\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "			<div class=\"navbar-header navbar-btn list-group-item-heading\">\n" +
    "			  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> \n" +
    "			  <span class=\"sr-only\">{{'Toggle Navigation'|translate}}</span>\n" +
    "			  <span class=\"icon-bar\"></span> \n" +
    "			  <span class=\"icon-bar\"></span> \n" +
    "			  <span class=\"icon-bar\"></span> </button>\n" +
    "			  <h1 class=\"clearfix navbar-btn\">\n" +
    "			  <a href=\"#!/\" title=\"{{$root.settings['site.name']}}\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"></a></h1>\n" +
    "			</div>\n" +
    "			<nav class=\"collapse navbar-collapse navbar-right\">\n" +
    "			  <ul class=\"nav navbar-nav text-center\">\n" +
    "				<li ng-show=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><a href=\"#!users/login\" title=\"{{'Become an Instructor'|translate}}\">\n" +
    "				<span class=\"fa-inverse\"><strong>{{'Become an Instructor'|translate}}</strong></span></a></li>\n" +
    "				<li><a  href=\"#!/courses/search\" title=\"{{'Catalog'|translate}}\">\n" +
    "			    <span class=\"fa-inverse\"><strong>{{'Catalog'|translate}}</strong></span></a></li>\n" +
    "				<li><a  ng-href=\"#!/users/login\" title=\"{{'Sign In'| translate}}\" ><span class=\"fa-inverse\"><strong>{{'Sign In'| translate}}</strong></span></a></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\"><a ng-href=\"#!/users/signup\" title=\"{{'Sign Up'| translate}}\"><span class=\"fa-inverse\"><strong>{{'Sign Up'| translate}}</strong></span></a></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#!/subscribe/plans\" title=\"{{'Pricing'| translate}}\"><span class=\"fa-inverse\"><strong>{{'Pricing'| translate}}</strong></span></a></li>\n" +
    "			  </ul>\n" +
    "			</nav>\n" +
    "		</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "	<!-- If user logged in -->\n" +
    "	<div class=\"bg-primary\" ng-show=\"isAuth\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header navbar-btn list-group-item-heading\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> \n" +
    "		  <span class=\"sr-only\">{{'Toggle Navigation'|translate}}</span>\n" +
    "		  <span class=\"icon-bar\"></span> \n" +
    "		  <span class=\"icon-bar\"></span> \n" +
    "		  <span class=\"icon-bar\"></span> </button>\n" +
    "          <h1 class=\"clearfix navbar-btn\"><a  href=\"#!/courses/search\" title=\"{{$root.settings['site.name']}}\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"></a></h1>\n" +
    "        </div>\n" +
    "        <nav class=\"collapse navbar-collapse navbar-right\">\n" +
    "          <ul class=\"nav navbar-nav\">			\n" +
    "			<li ng-show=\"$root.auth.providertype === 'admin'\" ><a href=\"ag-admin\" title=\"{{'Admin Dashboard'|translate}}\">\n" +
    "			<span class=\"fa-inverse\"><strong>{{'Admin Dashboard'|translate}}</strong></span></a></li>\n" +
    "			<li ng-show=\"model.userDetails.is_teacher === 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/my-courses/teaching\" title=\"{{'Instructor Dashboard'|translate}}\">\n" +
    "			<span class=\"fa-inverse\"><strong>{{'Instructor Dashboard'|translate}}</strong></span></a></li>\n" +
    "			<li ng-show=\"model.userDetails.is_teacher !== 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/courses/add\"  title=\"{{'Become an Instructor'|translate}}\">\n" +
    "			<span class=\"fa-inverse\"><strong>{{'Become an Instructor'|translate}}</strong></span></a></li>\n" +
    "			\n" +
    "            <li><a  href=\"#!/courses/search\" title=\"{{'Catalog'|translate}}\">\n" +
    "			<span class=\"fa-inverse\"><strong>{{'Catalog'|translate}}</strong></span></a></li>\n" +
    "            <li class=\"dropdown dropdown-img\"> \n" +
    "			   <a ng-if=\"$root.auth.user_image_hash !== '' && $root.auth.user_image_hash !== null\" href=\"\" class=\"btn-sm dropdown-toggle user-img\" data-toggle=\"dropdown\"> \n" +
    "					<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/{{$root.auth.user_image_hash}}\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\"/>\n" +
    "					<span class=\"caret\"></span>\n" +
    "				</a>\n" +
    "				<a ng-if=\"$root.auth.user_image_hash === '' || $root.auth.user_image_hash === null\" href=\"\" class=\"btn-sm dropdown-toggle\" data-toggle=\"dropdown\"> \n" +
    "					<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/0.default.jpg\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\" />\n" +
    "					<span class=\"caret\"></span>\n" +
    "				</a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#!/my-courses/learning\" title=\"{{'My Courses'|translate}}\" class=\"text-muted\">{{'My Courses'|translate}}</a></li>\n" +
    "				<li><a href=\"#!/users/edit-profile\">{{'Edit Profile'|translate}}</a></li>\n" +
    "			    <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\" ><a href=\"#!/me/subscriptions\" title=\"{{'My Subscriptions'|translate}}\">{{'My Subscriptions'|translate}}</a></li>\n" +
    "                <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a href=\"#!/transactions\" title=\"{{'My Transactions'| translate}}\">{{'My Transactions'| translate}}</a></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Withdrawal') > -1\"><a href=\"#!/user_cash_withdrawals\" title=\"{{'Withdraw Fund Requests'| translate}}\">{{'Withdraw Fund Requests'| translate}}</a></li>\n" +
    "				<li class=\"divider\"></li>\n" +
    "                <li ng-if='!contentInIframe'><a href=\"#!/users/logout\" title=\"{{'Sign Out'|translate}}\">{{'Sign Out'|translate}}</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </nav>\n" +
    "      </div>\n" +
    "    </div>		\n" +
    "</header>");
}]);

angular.module("themes/learnr/views/contactUs/contactUs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/contactUs/contactUs.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"contactForm\" ng-submit=\"model.contactFormSubmit();contactForm.$setPristine();\">\n" +
    "		<div class=\"text-center\"><h3 >{{'Contact Us'|translate}}</h3></div> \n" +
    "		<hr>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.firstname.$invalid && contactForm.firstname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"firstname\">{{'First Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"{{'First Name'|translate}}\" ng-model='model.contactForm.first_name' required>\n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.firstname.$dirty\" ng-messages=\"contactForm.firstname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your first name'|translate}}.</div>\n" +
    "			</div>\n" +
    "		   </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.lastname.$invalid && contactForm.lastname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"lastname\">{{'Last Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"lastname\" placeholder=\"{{'Last Name'|translate}}\" ng-model='model.contactForm.last_name' required>  \n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.lastname.$dirty\" ng-messages=\"contactForm.lastname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your last name'|translate}}.</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.email.$invalid && contactForm.email.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"email\">{{'Email'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			   <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"{{'email'|translate}}\" ng-model='model.contactForm.email' required>  \n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.email.$dirty\" ng-messages=\"contactForm.email.$error\">\n" +
    "				  <div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "				  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.subject.$invalid && contactForm.subject.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Subject'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" ng-model='model.contactForm.subject' placeholder=\"{{'subject'|translate}}\" required>  \n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.subject.$dirty\" ng-messages=\"contactForm.subject.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter subject'|translate}}.</div>\n" +
    "				</div>			\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.message.$invalid && contactForm.message.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Message'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "		   <textarea rows=\"6\" id=\"message\" class=\"form-control\" name=\"message\" placeholder=\"{{'Message'|translate}}\" ng-model='model.contactForm.message' required></textarea>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.message.$dirty\" ng-messages=\"contactForm.message.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter message'|translate}}.</div>\n" +
    "				</div>		   \n" +
    "		  </div>\n" +
    "		</div>               \n" +
    "		<div class=\"well well-sm clearfix\">\n" +
    "		  <div class=\"pull-right\">\n" +
    "			<label class=\"sr-only\" for=\"submit2\">{{'Submit'|translate}}</label>\n" +
    "			<button type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit2\">{{'Submit'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/courses/addCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/addCourse.tpl.html",
    "<div class=\"container\"><!-- addCourse container starts -->\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"addCourse\" ng-submit=\"model.save()\"><!-- addCourse form starts -->\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<h3 class=\"text-center\">{{'Ready to Create a Course'|translate}}</h3>\n" +
    "		<h5 class=\"text-center\">{{'Start by entering the title of a course:'|translate}}</h5>\n" +
    "		<div class=\"clearfix well-sm\"></div>\n" +
    "		<div class=\"clearfix form-group\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'e.g. Learn Photoshop CC from scratch'|translate}}\" ng-model=\"model.course.title\" required>\n" +
    "				<!--<span class=\"help-block\">Please Enter Title</span>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clearfix\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"submit\" class=\"btn btn-primary btn-block\"  ng-disabled=\"disableButton\" id=\"submit2\" value=\"{{'Create Course'|translate}}\">\n" +
    "			</div>\n" +
    "        </div>\n" +
    "	</form><!-- addCourse form end -->\n" +
    "</div><!-- addCourse container end -->");
}]);

angular.module("themes/learnr/views/courses/courses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/courses.tpl.html",
    "<section>\n" +
    "    <div class=\"container\">\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"\">	\n" +
    "			<h3>404 Page Not Found</h3>\n" +
    "		</div>	\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/directives/amountDisplay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/amountDisplay.tpl.html",
    "<span ng-if=\"($root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount !== '0') || (isCoursePrice === 'no')\">\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">{{ model.amount | currency : $root.settings['site.currency_symbol'] : model.fraction}} </span>\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] === ''\">{{ model.amount | currency : $root.settings['site.currency_code'] : model.fraction}} </span>\n" +
    "</span>\n" +
    "<span ng-if=\"isCoursePrice === 'yes' && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount === '0'\">{{'Free'|translate}}</span>");
}]);

angular.module("themes/learnr/views/courses/directives/courseCategory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/courseCategory.tpl.html",
    "<div class=\"grid_view\" ng-show =\"category_view_type =='grid'\">\n" +
    "	<section>\n" +
    "		<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "		  <div class=\"col-xs-12 navbar-btn\">\n" +
    "			<ul class=\"clearfix list-unstyled navbar-btn\">\n" +
    "			  <li class=\"col-sm-4 col-lg-3 col-xs-12\" ng-repeat=\"courses in model.courses.data\">\n" +
    "				<div class=\"panel\"> \n" +
    "					<course-wishlist course-wishlist='courses' wishlist-label='Wishlist' wishlisted-label='Wishlisted' wishlist-type='onlyHeart' ng-if=\"model.courses && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"></course-wishlist>					 	\n" +
    "					<!-- course image when is_from_mooc_affiliate false -->\n" +
    "					<a ng-if=\"courses.image_hash && courses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/{{courses.image_hash}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "					<a ng-if=\"!courses.image_hash && courses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "					\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->					\n" +
    "					<a ng-if=\"courses.course_image && courses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{courses.course_image}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "						\n" +
    "					<a ng-if=\"!courses.course_image && courses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "				  <div class=\"panel-body\">\n" +
    "					<h4> <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\" class=\"htruncate-m2 text-muted\">{{courses.title}}</a></h4>\n" +
    "					<p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\">{{'By'|translate}}  <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.displayname}}\" class=\"text-muted\">{{courses.displayname}}</a></p>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div><a href=\"#!/course/{{courses.id}}/c=CDFGH\" title=\"{{}}{{'Enrolled'| translate}}\" class=\"text-muted h6\"><i class=\"fa fa-group fa-lg\"></i> {{courses.course_user_count}} {{'Enrolled'| translate}}</a> \n" +
    "					<span class=\"pull-right text-success h4  list-group-item-heading list-group-item-text\"><strong><amount-display amount='{{courses.price}}' fraction='0' is-course-price='yes'></amount-display></strong></span>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </li>\n" +
    "			</ul>    \n" +
    "		</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    " </div> \n" +
    "<div class=\"list_view\" ng-show =\"category_view_type =='list'\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/courses/directives/homeCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/homeCourse.tpl.html",
    "<ul class=\"row text-center list-unstyled course-listing\">\n" +
    "	<li class=\"col-sm-3 col-xs-12\" ng-repeat=\"homeCourse in model.homeCourse.data\">\n" +
    "	<div class=\"panel homePanelHeight\">\n" +
    "	<!-- course image when is_from_mooc_affiliate false -->\n" +
    "	<a ng-if=\"homeCourse.image_hash && homeCourse.is_from_mooc_affiliate !== 1\"  href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/{{homeCourse.image_hash}}\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" /></span></a>\n" +
    "	<a ng-if=\"!homeCourse.image_hash && homeCourse.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" /></span></a>	\n" +
    "	\n" +
    "	<!-- course image when is_from_mooc_affiliate true -->\n" +
    "	<a ng-if=\"homeCourse.course_image && homeCourse.is_from_mooc_affiliate === 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"mooc_thumb_img mooc_home_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{homeCourse.course_image}}\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" class=\"center-block\" /></span></a>	\n" +
    "	<a ng-if=\"!homeCourse.course_image && homeCourse.is_from_mooc_affiliate === 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" /></span></a>	\n" +
    "	\n" +
    "	<!-- br tags for consistent spacing across tiles -->\n" +
    "		<h5 class=\"text-primary htruncate-m3\"><strong><a href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\">{{homeCourse.title}}</a></strong></h5>\n" +
    "		<span class=\"initialism text-muted\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && model.homeCourse.user_id\">{{' Build by'|translate}} &nbsp;<profile-name user-display-name='homeCourse.displayname'  user-profile-id='homeCourse.user_id' ng-if='homeCourse' ></profile-name></span> 	\n" +
    "		</div>\n" +
    "		</li>		\n" +
    "	</ul>\n" +
    "\n" +
    " ");
}]);

angular.module("themes/learnr/views/courses/directives/manageCourseNavbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/manageCourseNavbar.tpl.html",
    "<div class=\"row\">		\n" +
    "	<div class=\"well well-sm\">\n" +
    "			\n" +
    "			<div class=\"col-xs-12 col-md-4 col-sm-12\">				\n" +
    "				<div class=\"media\">\n" +
    "					<div class=\"pull-left col-xs-5 row\">\n" +
    "					<!-- course image when is_from_mooc_affiliate false -->	\n" +
    "					<img ng-if=\"model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/{{model.manageCourseOption.image_hash}}\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: Course Image]\" > \n" +
    "					<img ng-if=\"!model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\">\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->\n" +
    "					<img ng-if=\"model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{model.manageCourseOption.course_image}}\">\n" +
    "					<img ng-if=\"!model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\">\n" +
    "					\n" +
    "					</div>\n" +
    "					<div class=\"media-body\">\n" +
    "					  <p><a title=\"{{model.manageCourseOption.title}}\" href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\">{{model.manageCourseOption.title}}</a></p>	\n" +
    "					  <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><profile-name user-display-name='model.manageCourseOption.displayname'  user-profile-id='model.manageCourseOption.user_id' ng-if='model.manageCourseOption.user_id' ></profile-name></p>	\n" +
    "					</div>\n" +
    "				</div>					\n" +
    "			</div>				\n" +
    "			<div class=\"col-xs-12 col-md-3 col-sm-12\">\n" +
    "				<span>{{'Published Curriculum items'|translate}}</span>\n" +
    "					<h2>{{model.manageCourseOption.active_online_course_lesson_count}}/{{model.manageCourseOption.online_course_lesson_count}}</h2>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-md-5 col-sm-12\" ng-show=\"model.loadingNavBar === false\">\n" +
    "				<div class=\"\">\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 1'>{{'Your course is in draft mode.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 2'>{{'Your course is under review.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 3'>{{'Your course is in published status.'|translate}}</p>\n" +
    "					<a href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\" class=\"btn btn-default\">{{'Preview'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"model.manageCourseOption.course_status_id === 2 || model.manageCourseOption.course_status_id === 3\" ng-click=\"model.publishCourse('draft')\" >{{'Make as Draft'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"$root.auth.providertype !== 'admin' && model.manageCourseOption.course_status_id !== 2 && model.manageCourseOption.course_status_id !== 3 && ($root.settings['course.is_auto_approval_enabled'] === '0' || $root.settings['course.is_auto_approval_enabled'] === '')\" ng-click=\"model.publishCourse('waiting')\" >{{'Submit For Review'|translate}}</a>\n" +
    "					<span ng-if=\"$root.auth.providertype === 'admin' || $root.settings['course.is_auto_approval_enabled'] === '1'\" class=\"navbar-btn\">\n" +
    "						<a class=\"btn btn-primary\" ng-click=\"model.publishCourse('publish')\" ng-if='model.manageCourseOption.course_status_id !== 3' >{{'Publish This Course'|translate}}</a>\n" +
    "						<p ng-if=\"$root.auth.providertype === 'admin'\" class=\"navbar-btn\">{{'You Are Accessing as Admin.'|translate}} <a href=\"ag-admin/#/courses/list\">{{'Click here to see all courses.'|translate}}</a></p>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\"></div>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "	  	 		  \n" +
    "	<div class=\"col-sm-2 col-xs-12 col-md-2 pull-left clearfix\" role=\"navigation\">\n" +
    "		<div class=\"row panel\">				 \n" +
    "			<ul class=\"nav nav-stacked  nav-pills list-group-item-heading list-group-item-text\" id=\"leftnavbar\">\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_roadmap'}\"><a  href=\"#!/manage-course/edit-getting-started/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Course Roadmap'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_feedback'}\"><a href=\"#!/manage-course/edit-status/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Feedback'|translate}} </a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE CONTENT'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_goals'}\"><a  href=\"#!/manage-course/edit-goals-and-audience/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Goals'|translate}} </a></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1  || $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" class=\"\" ng-class=\"{active: activetab == 'course_curriculum'}\"><a  href=\"#!/manage-course/edit-curriculum/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Curriculum'|translate}} </a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE INFO'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_basics'}\"><a   href=\"#!/manage-course/edit-basics/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Basics'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_summary'}\"><a   href=\"#!/manage-course/edit-details/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Course Summary'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_image'}\"><a   href=\"#!/manage-course/edit-image/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Image'|translate}}</a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_promo_video'}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\"><a   href=\"#!/manage-course/edit-promo-video/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Promo Video'|translate}}</a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE SETTINGS'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-class=\"{active: activetab == 'course_price'}\"><a   href=\"#!/manage-course/edit-price-and-promotions/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Price'|translate}}</a></li>\n" +
    "				<div oc-lazy-load='loadCoupons'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'coupons'}\" course-coupon course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Coupons') > -1\"></li></div>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_danger_zone'}\"><a   href=\"#!/manage-course/edit-danger-zone/{{model.manageCourseOption.id}}\" class=\"\">&nbsp;{{'Danger Zone'|translate}}</a></li>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\"><strong><span>&nbsp; {{'PAYOUT'|translate}}</span></strong></li>\n" +
    "				<div oc-lazy-load='loadPayout' class=\"nav nav-stacked nav-pills\"><li class=\"\"  ng-class=\"{active: activetab == 'payout'}\" pay-out course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\"></li></div>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"><strong><span>&nbsp; {{'ANALYTICS'|translate}}</span></strong></li>\n" +
    "				<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" oc-lazy-load='loadRatingAndReview' class=\"nav nav-stacked nav-pills\"><li ng-class=\"{active: activetab == 'coursestudtsatisfaction'}\" student-satisfaction course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">\n" +
    "				</li></div>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"  ><strong><span>&nbsp; {{'SEO'|translate}}</span></strong></li>\n" +
    "				<div oc-lazy-load='loadSeo'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'seo'}\" course-seo course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"></li></div>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'MORE'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_help'}\"><a  href=\"#!/manage-course/edit-help/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Help'|translate}}</a></li>			\n" +
    "			</ul> \n" +
    "		</div>\n" +
    "	 </div>");
}]);

angular.module("themes/learnr/views/courses/directives/onlineLessons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/onlineLessons.tpl.html",
    "<div class=\"well-sm\"></div>\n" +
    "	<h3 ng-if='model.OnlineCourse.data.length' class=\"lead text-primary navbar-btn\"><strong>{{'What Will I Learn?'|translate}}</strong></h3>\n" +
    "	<h3 ng-if='model.OnlineCourse.data.length' class=\"lead text-primary navbar-btn\"><strong>{{'Syllabus'|translate}}</strong></h3>\n" +
    "	<div class=\"navbar-btn\"></div>\n" +
    "	<ul class=\"list-group clearfix  navbar-btn\">\n" +
    "			<li ng-repeat=\"OnlineCourse in model.OnlineCourse.data\" class=\"list-group-item clearfix  ng-scope\">\n" +
    "				<div  ng-if=\"OnlineCourse.is_chapter == 1\" class=\"col-xs-12\"><strong>{{'Section :'|translate}} {{OnlineCourse.lesson_name}}</strong></div>\n" +
    "				<div  class=\"col-xs-8\" ng-if=\"OnlineCourse.is_chapter == 0\">\n" +
    "					<a  class=\"text-muted\" ><i class=\"fa fa-download\" ng-if='OnlineCourse.online_lesson_type_id === 5'></i>\n" +
    "					<i class=\"fa fa-file-video-o\" ng-if='OnlineCourse.online_lesson_type_id === 4'> </i>\n" +
    "					<i class=\"fa fa-play-circle-o\"  ng-if='OnlineCourse.online_lesson_type_id === 3'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='OnlineCourse.online_lesson_type_id === 1'></i>\n" +
    "					<i class=\"fa fa-file\"  ng-if='OnlineCourse.online_lesson_type_id === 2'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='OnlineCourse.online_lesson_type_id === 6'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='!OnlineCourse.online_lesson_type_id'></i></a>\n" +
    "\n" +
    "					&nbsp;&nbsp; <a class=\"text-muted\" href=\"#\" ng-click=\"showDetail(OnlineCourse, $event)\" >{{'Lesson:'|translate}} &nbsp;{{OnlineCourse.lesson_name}}\n" +
    "					\n" +
    "					<i class=\"fa fa-caret-down\" ng-hide=\"active == OnlineCourse.id\" ng-if='OnlineCourse.lesson_description'></i>\n" +
    "						<i class=\"fa fa-caret-up\" ng-show=\"active==OnlineCourse.id\"></i>						\n" +
    "					</a>					\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-4\" ng-if='OnlineCourse.is_chapter == 0'>\n" +
    "					<div ng-if=\"OnlineCourse.is_preview === 1\" class=\"pull-left\"><a href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\" title=\"{{'Preview'|translate}}\" class=\"btn btn-sm btn-primary\">{{'Preview'|translate}}</a> </div>\n" +
    "					<span ng-bind=\"getDuration(OnlineCourse.duration + '', $event)\" class=\"pull-right\" ng-if=\"OnlineCourse.duration\"></span>\n" +
    "				</div>				\n" +
    "				<div class=\"clearfix\"></div>\n" +
    "				<div ng-show=\"active==OnlineCourse.id\"  class=\"panel-body\" >\n" +
    "					<span>{{OnlineCourse.lesson_description}}</span>\n" +
    "				</div>				\n" +
    "			</li>\n" +
    "	</ul>\n" +
    "	\n" +
    "");
}]);

angular.module("themes/learnr/views/courses/directives/paymentButtons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/directives/paymentButtons.tpl.html",
    "<div class=\"col-md-12 col-sm-6 col-xs-8\" >\n" +
    "	<h4 class=\"list-group-item-heading\"><strong><amount-display amount='{{model.coursePrice}}' fraction='2' is-course-price='yes'></amount-display></strong></h4>\n" +
    "		<div class=\"navbar-btn clearfix\"></div>	\n" +
    "		<!-- if both payment and cart plugin && subscription plugin disabled , now all courses will be free of access and course should not be mooc affliated -->\n" +
    "		<div  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\">\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Start Learning Now'|translate}}</a>\n" +
    "		</div>\n" +
    "		<!-- if subscription plugin enabled, it allows courses based on instructions levels based on subscriptions and course should not be mooc affliated -->		\n" +
    "		<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !model.btnLink && ($root.auth.id !== model.userId)\">\n" +
    "			<div ng-if='!$root.isAuth || subscriptionStatus === false'>\n" +
    "				<a href=\"#!/subscribe/plans\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-lg btn-primary\" >{{'Start Learning Now'| translate}}</a>\n" +
    "			</div>	\n" +
    "			<div ng-if='$root.isAuth && subscriptionStatus'>\n" +
    "				<div  class=\"navbar-btn\" ng-show=\"course_level_access\">					\n" +
    "					<a href=\"#\" ng-click =\"model.startLearnCourse($event, false)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Start Learning Now'|translate}}</a>\n" +
    "				</div>\n" +
    "				<div  class=\"navbar-btn\" ng-hide=\"course_level_access\">		\n" +
    "					<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "						<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "					</div>\n" +
    "					<a href=\"#!/me/subscriptions\"  title=\"{{'Change Plan'|translate}\" class=\"btn btn-lg btn-primary\">{{'Change Plan'|translate}}</a>\n" +
    "				</div>		\n" +
    "			</div>	\n" +
    "		</div>	\n" +
    "		<!-- payment and cart plugin enabled && subscription plugin disabled and course should not be mooc affliated-->		\n" +
    "		<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\"><!-- payment cart plugin eneabled && subscription plugin disabled -->\n" +
    "			<!-- If logged in -->\n" +
    "			<div ng-if=\"$root.isAuth\">\n" +
    "			<!-- Free courses or already paid courses -->		\n" +
    "				<div ng-if=\"model.coursePrice === '0' || paidStatus\" class=\"navbar-btn\">\n" +
    "					<a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Start Learning Now'|translate}}</a>\n" +
    "				</div>\n" +
    "				<!-- not paid and not purchased courses -->	\n" +
    "				<div ng-if=\"paidStatus === false && model.coursePrice !== '0'\" class=\"navbar-btn\">					\n" +
    "					<buy-button modal-size='md' course-price='{{model.coursePrice}}' course-id='{{model.courseId}}' course-status='{{model.takenCourseStatus}}' ng-if='model.courseId' ></buy-button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- If not logged in -->\n" +
    "			<div ng-if=\"!$root.isAuth\" class=\"navbar-btn\">\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Start Learning Now'|translate}}\"  class=\"btn btn-lg btn-primary\" ng-if=\"model.coursePrice === '0'\">{{'Start Learning Now'|translate}}</a>\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-lg btn-primary\" ng-if=\"model.coursePrice !== '0'\">{{'Take This Course'|translate}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!--Mooc affliated courses-->\n" +
    "		<div ng-if=\"model.btnLink !== '' && model.btnLink && ($root.auth.id !== model.userId)\">\n" +
    "			<div class=\"navbar-btn\" >\n" +
    "				<a href=\"{{model.btnLink}}\" target=\"_blank\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-lg btn-primary\" ng-if=\"$root.isAuth\">{{'Take This Course'|translate}}</a>\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-lg btn-primary\" ng-if=\"!$root.isAuth\">{{'Take This Course'|translate}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- Teachers own course -->\n" +
    "		<div ng-if=\"$root.auth.id === model.userId && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" class=\"navbar-btn\">\n" +
    "			<a href=\"#!/manage-course/add/{{model.courseId}}/{{model.slug}}\" class=\"btn btn-lg btn-primary\" >{{'Edit Course'|translate}}</a>\n" +
    "		</div>\n" +
    "</div>	");
}]);

angular.module("themes/learnr/views/courses/learnCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/learnCourse.tpl.html",
    "<div class=\"clearfix lesson_container\">\n" +
    "        <div class=\"navbar-default bg-primary col-sm-3 col-md-3 col-lg-2\">   \n" +
    "            <h4 class=\"initialism\">\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength > 0\" href=\"#!/course/{{model.OnlineCourse[0].course_id}}/{{model.OnlineCourse[0].course_slug}}\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength === 0\" href=\"#!/\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype !== 'admin'\" href=\"#!/my-courses/learning\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Dashboard'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype === 'admin'\" href=\"ag-admin/#/courses/list\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Admin Panel'|translate}}</a>\n" +
    "			</h4>\n" +
    "            <ul class=\"list-unstyled nav navbar-default list-group\">\n" +
    "                <li class=\"row learn-page-lesson-list\" ng-repeat=\"OnlineCourse in model.OnlineCourse\" ng-class=\"{'btn-primary' : OnlineCourse.is_chapter === 1, ' list-group-item':OnlineCourse.is_chapter === 0}\" >\n" +
    "					<!-- showing lesson chapter name-->\n" +
    "					<span class=\"row\" ng-if='OnlineCourse.is_chapter === 1'>\n" +
    "                        <div class=\"col-xs-12 \"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}} </strong></div>\n" +
    "                    </span>\n" +
    "					<!-- showing lesson name -->\n" +
    "					<a class=\"media\" ng-class=\"{'text-success': OnlineCourse.completed === 1 && !coursePurchased, 'btn-default active': model.viewLessonDetails.id === OnlineCourse.id || lessonID === OnlineCourse.id}\" href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\" ng-if='OnlineCourse.is_chapter === 0'>\n" +
    "						<!-- completed lesson with success tick icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed === '1'|| model.viewLessonDetails.completedId === OnlineCourse.id\">\n" +
    "						<i class=\"fa fa-check-circle fa-lg\" ng-class=\"{'text-success': model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'}\" ng-if=\"model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'\"></i>\n" +
    "						<i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.completed !== '1'\" ></i>\n" +
    "						</span>\n" +
    "						<!-- not completed but viewed lesson with success green circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1 || OnlineCourse.viewed === '1'}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.viewed === '1'\" ></i></span>\n" +
    "						<!-- not completed also not viewed lesson with success gary or white circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1}\" ng-if=\"OnlineCourse.viewed === '0' \" ></i></span>\n" +
    "						<!-- not completed and not eligible to view lesson -->\n" +
    "						<span class=\"pull-left\" ng-if='!coursePurchased && $root.isAuth || !OnlineCourse.completed'><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.completed === 1 || OnlineCourse.viewed === '1'}\" ></i></span>\n" +
    "						<span class=\"media-body\">{{'Lesson'|translate}}: {{OnlineCourse.lesson_name}}</span>	\n" +
    "					</a>								\n" +
    "				</li>                            \n" +
    "                \n" +
    "                <div class=\"well-sm\"></div>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-9 col-md-9 col-lg-10 bg-primary navbar-inverse\"> \n" +
    "			 <div class=\"btn-default row\">\n" +
    "				<div class=\"well-sm\">\n" +
    "					<a class=\"btn btn-primary\" ng-disabled=\"model.neighbourDetails.previous_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.previous_id}}\"  > <i class=\"glyphicon glyphicon-chevron-left\"></i>  {{'PREVIOUS LECTURE'|translate}}</a>	\n" +
    "					<a class=\"btn btn-primary navbar-right\"  ng-disabled=\"model.neighbourDetails.next_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.next_id}}\" >{{'NEXT LECTURE'|translate}}  <i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "					<a class=\"btn navbar-right list-group-item-heading\" ng-disabled=\"shouldBuyCourse\" ng-click=\"model.lessonComplete(model.viewLessonDetails.id, model.viewLessonDetails)\" ng-if='model.viewLessonDetails.id && coursePurchased'>\n" +
    "					<i class=\"fa fa-check-circle fa-lg fa-fw text-muted\" ng-class=\"{'text-success': model.viewLessonDetails.completed === '1'}\" ></i><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed === '1'\"> {{'Mark as Unread'|translate}}</strong><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed !== '1'\"> {{'Mark as Completed'|translate}}</strong></a>									\n" +
    "				</div>\n" +
    "			</div>\n" +
    "            <div class=\"well-lg clearfix lesson_details\" ng-if='model.viewLessonDetails !== null && !shouldBuyCourse '>\n" +
    "			    <div class=\"text-center\" ng-if=\"model.OnlinelessonLength === 0\" >\n" +
    "					<h2 class=\"fa-inverse\">{{'No lessons available.'|translate}}</h2>\n" +
    "				</div>\n" +
    "            	<div class=\"col-xs-12\" >\n" +
    "                	<div class=\"col-sm-12 clearfix\">\n" +
    "                        <h3 class=\"list-group-item-heading\"><strong>{{model.viewLessonDetails.lesson_name}}</strong></h3>\n" +
    "                        <div class=\"navbar-btn clearfix\"></div>\n" +
    "                        <p class=\"h6\">{{model.viewLessonDetails.lesson_description}}</p>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "                    </div>\n" +
    "               		<div class=\"col-sm-6 pull-right text-right\">\n" +
    "                       \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "               <div class=\"col-xs-12 clearfix\">\n" +
    "					<div class=\"col-xs-12\">					\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 1'><p ng-bind-html='model.viewLessonDetails.article_content'></div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 2'>\n" +
    "							<div class=\"well-lg text-center\"><a href=\"#\" class=\"btn\"> <h4>Open Document &nbsp; <i class=\"fa fa-file\"></i>&nbsp;{{model.viewLessonDetails.filename}}</h4></a></div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 3'>										\n" +
    "							<div class=\"alert alert-info\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 1\">\n" +
    "								<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "							</div>\n" +
    "							<div class=\"alert alert-danger\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 0 && model.viewLessonDetails.is_lesson_ready_to_view !== 1\">\n" +
    "								<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "							</div>							\n" +
    "							<div class=\"well-lg col-xs-11 ml-4\">\n" +
    "								<video id=\"video\" ng-src=\"{{model.viewLessonDetails.video_url}}\" controls=\"true\" ng-if=\"model.viewLessonDetails.is_lesson_ready_to_view === 1\"></video>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 4'>\n" +
    "						 <p class=\"videoWrapper\" ng-bind-html='model.viewLessonDetails.embed_code'></p>\n" +
    "						 </div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 5'>\n" +
    "							<div class=\"well-lg text-center\">\n" +
    "								<h4>Download this lesson</h4>\n" +
    "								<p>{{model.viewLessonDetails.filename}}</p>\n" +
    "								<a class=\"btn ng-binding btn-default\" ng-href = \"{{model.viewLessonDetails.download_url}}\"><i class=\"fa fa-3x fa-download fa-3x\"></i></a>							\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 6'>{{model.viewLessonDetails.lessondescription}}</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "            </div> \n" +
    "			<!-- User not able to view this lesson because of payment pending or subscription -->\n" +
    "			 <div class=\"well-lg clearfix\" ng-if='shouldBuyCourse && model.OnlineCourse.length > 0 ' >	\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<!-- if user not logged in -->\n" +
    "					<div ng-if='!isAuth'>\n" +
    "						<div class=\"clearfix text-center\">\n" +
    "							<h4>{{'Already have an account?'|translate}}</h4>\n" +
    "							<a href=\"#!/users/login\" title=\"{{'Login'| translate}}\"  class=\"btn btn-primary\">{{'Login'|translate}}</a> \n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<!-- available payment options to view this lesson -->\n" +
    "					<div class=\"clearfix text-center\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "						<h3>{{'Ready to watch this entire course?'|translate}}</h3>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"h2 list-group-item-heading text-center\">\n" +
    "							<strong><amount-display amount='{{model.neighbourDetails.course_price}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "						</div>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<!-- user subscribed plan but its not able to access this lesson course's instruction level -->\n" +
    "						<div ng-if=\"shouldChangePlan\" class=\"col-md-6 col-md-offset-3\">\n" +
    "							<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "								<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "							</div>\n" +
    "							<a href=\"#!/me/subscriptions\" title=\"{{'Change Your Plan'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Change Plan'|translate}}</a>\n" +
    "						</div>\n" +
    "						<!-- user not subscribed any plan -->\n" +
    "						<a href=\"#!/subscribe/plans\" class=\"btn btn-primary\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !shouldChangePlan\">{{'Start Learning Now'|translate}}</a>&nbsp;						\n" +
    "						<!-- payment plugin enabled -->\n" +
    "						<buy-button  btn-class-name='btn-primary'  course-id='{{model.OnlineCourse[0].course_id}}' course-status='false' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\" ></buy-button>											\n" +
    "					</div>\n" +
    "             </div>          \n" +
    "         </div>\n" +
    "		\n" +
    "     </div>\n" +
    "	<div class=\"navbar-default clearfix\">   \n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	</div>\n" +
    "	");
}]);

angular.module("themes/learnr/views/courses/learning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/learning.tpl.html",
    "<section class=\"container\" id=\"learning-courses\">\n" +
    "  <h3 class=\"text-primary\"><strong>{{'Learning'|translate}}</strong></h3>\n" +
    "  <hr class=\"list-group-item-heading navbar-btn\">\n" +
    "  <aside class=\"col-md-3 col-sm-4 col-xs-12\">\n" +
    "	<div class=\"row\">\n" +
    "	  <ul role=\"tablist\" class=\"nav nav-pills nav-stacked\">\n" +
    "		<li role=\"presentation\" class=\"\"><a title=\"{{'My Profile'|translate}}\" aria-controls=\"Contact-Info\" role=\"tab\" href=\"#!/users/edit-profile\">{{'My Profile'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a href=\"#!/users/change_password\" title=\"{{'Password'|translate}}\" aria-controls=\"password\" role=\"tab\">{{'Change Password'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"active\"><a  href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\" >{{'Learning'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\">{{'Wishlist'|translate}}</a></li>\n" +
    "	  </ul>\n" +
    "	</div>\n" +
    "  </aside>\n" +
    "	<div class=\"tab-content\">\n" +
    "        <div class=\"well-sm navbar-btn list-group-item-heading\"></div>\n" +
    "		<div id=\"learning\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "		  <div class=\"col-md-9 col-sm-8 col-xs-12\">\n" +
    "            <div class=\"dropdown text-right\"> \n" +
    "			<a href=\"javascript:void(0)\" ng-show=\"!ordering\"  title=\"{{'All Courses'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >\n" +
    "				<span >{{'All Courses'|translate}} </span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "			</a>\n" +
    "			<a href=\"javascript:void(0)\" ng-show=\"ordering === 'in_progress'\"  title=\"{{'In Progress'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >\n" +
    "				<span>{{'In Progress'|translate}} </span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "			</a>\n" +
    "			<a href=\"javascript:void(0)\" ng-show=\"ordering === 'not_started'\"  title=\"{{'Not Started'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >\n" +
    "				<span >{{'Not Started'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "			</a>\n" +
    "			<a href=\"javascript:void(0)\" ng-show=\"ordering === 'completed'\"  title=\"{{'Completed'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >\n" +
    "				<span >{{'Completed'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "			</a>\n" +
    "			<a href=\"javascript:void(0)\" ng-show=\"ordering === 'archived'\" title=\"{{'Archived'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >\n" +
    "				<span >{{'Archived'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "			</a>\n" +
    "\n" +
    "              <ul class=\"dropdown-menu pull-right text-left\">\n" +
    "				<li><a href=\"#!/my-courses/learning\" title=\"{{'All Courses'|translate}}\">{{'All Courses'|translate}} </a></li>\n" +
    "                <li><a ui-sref=\"myCoursesLearning({ ordering: 'in_progress' })\" title=\"{{'In Progress'|translate}}\">{{'In Progress'|translate}}</a></li>\n" +
    "                <li><a ui-sref=\"myCoursesLearning({ ordering: 'not_started' })\" title=\"{{'Not Started'|translate}}\">{{'Not Started'|translate}}</a></li>\n" +
    "                <li><a ui-sref=\"myCoursesLearning({ ordering: 'completed' })\" title=\"{{'Completed'|translate}}\">{{'Completed'|translate}}</a></li>\n" +
    "                <li><a ui-sref=\"myCoursesLearning({ ordering: 'archived' })\" title=\"{{'Archived'|translate}}\">{{'Archived'|translate}}</a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "			\n" +
    "            <ul class=\"clearfix list-unstyled navbar-btn row course-listing\">\n" +
    "              <li class=\"col-md-3 col-sm-4 col-xs-12\" ng-repeat=\"learningCourses in model.learningCourses.data\" id=\"learning_elements_{{learningCourses.id}}\">\n" +
    "                <div class=\"panel\"> \n" +
    "					<!-- course image when is_from_mooc_affiliate false -->\n" +
    "					<a ng-if=\"learningCourses.course_image_hash && learningCourses.is_from_mooc_affiliate !== 1\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/{{learningCourses.course_image_hash}}\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" /></span>\n" +
    "					</a>\n" +
    "					\n" +
    "					<a ng-if=\"!learningCourses.course_image_hash && learningCourses.is_from_mooc_affiliate !== 1\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\"  /></span>\n" +
    "					</a>\n" +
    "					\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->	\n" +
    "					<a ng-if=\"learningCourses.course_image && learningCourses.is_from_mooc_affiliate === 1\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\"><span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{learningCourses.course_image}}\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" /></span></a>\n" +
    "					\n" +
    "					<a ng-if=\"!learningCourses.course_image && learningCourses.is_from_mooc_affiliate === 1\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" /></span>\n" +
    "					</a>\n" +
    "					\n" +
    "                  <div class=\"pull-right dropdown action-btn\" title=\"{{'Options'|translate}}\" ng-if=\"learningCourses.course_user_status !== 'Archived'\"> <a href=\"javascript:void(0)\"  class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                      <li><a href=\"#\" ng-click=\"model.addToArchive(learningCourses.id, $event, ordering)\" title=\"{{'Archive'|translate}}\" class=\"text-muted\">{{'Archive'|translate}}</a></li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                  <div class=\"panel-body\"> <a class=\"htruncate-m2\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\" class=\"text-muted\"><strong>{{learningCourses.course_title}}</strong></a>\n" +
    "                    <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><profile-name user-profile-id='learningCourses.teacher_user_id' ng-if='learningCourses' user-display-name='learningCourses.teacher_name' user-name-class='text-muted' ></profile-name></p>\n" +
    "					<div class=\"progress\" data-toggle=\"tooltip\" tooltp-placement=\"bottom\"  tooltp=\"{{(100*(learningCourses.completed_lesson_count/learningCourses.active_online_course_lesson_count)) | number: 0}}{{'% Complete'|translate}}\">\n" +
    "                      <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{(100*(learningCourses.completed_lesson_count/learningCourses.active_online_course_lesson_count)) | number: 2}}%\"> <span class=\"sr-only\">{{(100*(learningCourses.completed_lesson_count/learningCourses.active_online_course_lesson_count)) | number: 0}}{{'% Complete'|translate}}</span> \n" +
    "					  </div>\n" +
    "                    </div>\n" +
    "					<div class=\"navbar-btn\"></div>\n" +
    "					<div class=\"\"><span class=\"show text-muted\">{{(100*(learningCourses.completed_lesson_count/learningCourses.active_online_course_lesson_count)) | number: 0}}{{'% Complete'|translate}}</span> \n" +
    "						<div class=\"pull-left\">\n" +
    "                       <rating-stars average-rating='{{learningCourses.rating}}' ng-if=\"model.learningCourses && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars>\n" +
    "					   </div> \n" +
    "                        <div class=\"pull-right\">\n" +
    "							<rating-button courseuserid='{{learningCourses.id}}' btnstyle=\"text\" btntext=\"{{'Rate It'|translate}}\" user-id='{{learningCourses.user_id}}' course-id='{{learningCourses.course_id}}' ng-if='model.learningCourses'></rating-button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "                                  \n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </li>                 \n" +
    "            </ul>\n" +
    "			<div  class=\"text-center\" ng-show=\"_metadata.total_records === 0\"><h3 class=\"text-muted\">{{'No records found'|translate}}</h3></div>\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "				<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#learning-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "		    </div>\n" +
    "          </div>           \n" +
    "		   \n" +
    "		</div>\n" +
    "	</div>\n" +
    " </section>");
}]);

angular.module("themes/learnr/views/courses/manageCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourse.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">			\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"course_roadmap\">\n" +
    "				<div class=\"panel well-sm\">	\n" +
    "					<p ng-bind-html=\"model.courseRoadmap.content\"></p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseBasics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseBasics.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			 <div  class=\"tab-pane active\" id=\"basics\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Basics'|translate}}</h3>\n" +
    "						<span>{{'Help students find your course.'|translate}}</span>\n" +
    "					</div>					\n" +
    "				</div>				\n" +
    "				<div class=\"well-lg panel clearfix\">\n" +
    "					<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_basics' ng-submit='model.saveCourseBasic()'>\n" +
    "								<div class=\"form-group\"  ng-show=\"$root.auth.providertype === 'admin'\" >\n" +
    "									<label class=\"control-label\" for=\"course_title\">{{'Lecturer'|translate}}</label>\n" +
    "									<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.user_id\" ng-options=\"Instructors.user_id as Instructors.displayname for Instructors in model.instructors\"  name=\"sub_category\">\n" +
    "										<option value=\"\" >---{{'Please select'|translate}}---</option>													\n" +
    "									</select>\n" +
    "									<span class=\"help-block\"><span class=\"text-info\">{{'Leave it blank, if it is site\\'s course.'|translate}}</span></span>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<label class=\"control-label\" for=\"course_title\">{{'Title'|translate}}</label>\n" +
    "									<div class=\"input-group\">\n" +
    "										<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'Title'|translate}}\" maxlength = \"100\" ng-model=\"model.courseBasic.title\" required >	\n" +
    "										<span class=\"input-group-addon\">{{model.courseBasic.title.length}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<label class=\"control-label\" for=\"course_subtitle\">{{'Sub Title'|translate}}</label>\n" +
    "									<div class=\"input-group\">\n" +
    "										<input type=\"text\" class=\"form-control\" id=\"course_sub_title\" placeholder=\"{{'Sub Title'|translate}}\" maxlength = \"200\" ng-model=\"model.courseBasic.subtitle\" required>\n" +
    "										<span class=\"input-group-addon\">{{model.courseBasic.subtitle.length}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<div class=\"row\">\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"language\">{{'Language'|translate}}</label>\n" +
    "												<div class=\"\">\n" +
    "													<select class=\"form-control\" id=\"language\"  name=\"language\" ng-model=\"model.courseBasic.language_id\"  ng-options=\"languages.id as languages.name for languages in model.languages\"  required>\n" +
    "														<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "													</select>							\n" +
    "												</div>\n" +
    "										</div>\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"parent_category\">{{'Category'|translate}}</label>\n" +
    "											<div class=\"\">\n" +
    "												<select class=\"form-control\" id=\"parent_category\" name=\"parent_category\" ng-model=\"model.courseBasic.parent_category_id\" ng-options=\"parentCategory.id as parentCategory.sub_category_name for parentCategory in model.listcourse.category\" data-ng-change=\"model.getSubCategories()\" required>\n" +
    "													<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "												</select>							\n" +
    "											</div>\n" +
    "										</div>										\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								 <div class=\"form-group\" ><!-- ng-show=\"model.subCategories.length\" -->\n" +
    "									<div class=\"row\">\n" +
    "										<div class=\"col-md-6\">\n" +
    "											\n" +
    "										</div>\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"sub_category\">{{'Sub Category'|translate}}</label>\n" +
    "											<div class=\"\">\n" +
    "												<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.category_id\"  ng-options=\"subCategory.category_id as subCategory.sub_category_name for subCategory in model.subCategories\"  name=\"sub_category\" required >\n" +
    "													<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "												</select>							\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>														\n" +
    "								<div class=\"well well-sm clearfix\">\n" +
    "									<div class=\"pull-right\">\n" +
    "										<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "										<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "									</div>\n" +
    "								</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>		  \n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseCurriculum.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseCurriculum.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			 <div class=\"navabar-default tab-pane active\" id=\"curriculum\">\n" +
    "			 <div class=\"panel\">\n" +
    "				<div class=\"list-header text-center\"><h3>{{'Curriculum'|translate}}</h3></div>	\n" +
    "			 </div>\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<!-- lessons and chapters listing -->	\n" +
    "					<ul class=\"clearfix list-unstyled navbar-btn col-xs-12\" ui-sortable=\"sortableOptions\" ng-model=\"model.OnlineCourse.data\">													 \n" +
    "						<li class=\"clearfix\" ng-repeat='OnlineCourse in model.OnlineCourse.data' >\n" +
    "							<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 1\"  ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1'}\">\n" +
    "								<div class=\"clearfix well-sm\">\n" +
    "								<div class=\"col-xs-10 row\">\n" +
    "									<span class=\"clearfix\"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>\n" +
    "									<i class=\"clearfix htruncate-m2\">{{OnlineCourse.lesson_description}}</i>\n" +
    "								</div>								\n" +
    "								<ul class=\"list-inline clearfix pull-right\">\n" +
    "										<li ng-if=\"!OnlineCourse.showDetailsChapter\">\n" +
    "										  <a href=\"#\" class=\"btn pull-right text-info\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>	\n" +
    "										</li>\n" +
    "										<li ng-if=\"OnlineCourse.showDetailsChapter\">\n" +
    "										  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "										</li>								\n" +
    "									</ul>\n" +
    "									\n" +
    "								<a href=\"#\" class=\"btn pull-right  text-info\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "								\n" +
    "								</div>\n" +
    "								<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItem1 && currentView === 'edit' && OnlineCourse.showDetailsChapter\" >									\n" +
    "								<div class=\"col-xs-12 clearfix \" >\n" +
    "								<div class=\"panel well-sm clearfix \" ng-show=\"model.editsection === true\">\n" +
    "									<form role=\"form\" name=\"chapter_edit \"class=\"form-horizontal clearfix text-muted\"  ng-submit=\"model.updateChapter(OnlineCourse.id )\" >		\n" +
    "											<div class=\"form-group\" >\n" +
    "												<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "													<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "													<div class=\"input-group\">			\n" +
    "															<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.editOnlineChapter.lesson_name\" required  maxlength=\"50\">\n" +
    "															<span class=\"input-group-addon\">{{model.editOnlineChapter.lesson_name.length}}</span>																						\n" +
    "													</div>													\n" +
    "												</div>\n" +
    "											</div>\n" +
    "											<div class=\"form-group\" >\n" +
    "												<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "													<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>				\n" +
    "													<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.editOnlineChapter.lesson_description\" maxlength=\"150\"></textarea>														\n" +
    "												</div>\n" +
    "											</div>\n" +
    "											<div class=\"clearfix\">\n" +
    "												<div class=\"text-center\">\n" +
    "													<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "													<input type=\"submit\"  ng-disabled=\"disableUpdateButton\" class=\"btn btn-primary\" id=\"section_save\" value=\"{{'Save'|translate}}\" >\n" +
    "												 </div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							\n" +
    "							</div>\n" +
    "							<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 0\" >\n" +
    "								<div class=\"col-xs-12\" ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1', 'btn-success':OnlineCourse.is_chapter == '0'}\">\n" +
    "									<div class=\"clearfix well-sm\"><span><strong>{{'Lecture'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>									\n" +
    "									<a ng-click=\"showDetails = ! showDetails\" class=\"btn text-info pull-right\"><span><i class=\"fa fa-lg fa-caret-square-o-down\"></i></span></a>									\n" +
    "									<a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "									</div>\n" +
    "									<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-show=\"showDetails\">\n" +
    "										<div class=\"clearfix\">\n" +
    "											<div ng-show=\"OnlineCourse.lesson_description\"><span class=\"htruncate-m2\">&nbsp;{{OnlineCourse.lesson_description}}</span></div>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 5\" class=\"text-muted\"><i class=\"fa fa-download\"></i>&nbsp;{{OnlineCourse.filename}}</span>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 4\" class=\"text-muted\"><i class=\"fa fa-file-video-o\"></i>&nbsp;{{OnlineCourse.lesson_name}}</span>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 3\" class=\"text-muted\"><i class=\"fa fa-play-circle-o\"></i></i>&nbsp;{{OnlineCourse.filename}}</span>\n" +
    "										</div>\n" +
    "										<ul class=\"list-inline clearfix pull-right\">\n" +
    "										<li ng-if=\"!OnlineCourse.showDetailsLesson\">\n" +
    "										 <a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id,OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>\n" +
    "										</li>\n" +
    "										<li ng-if=\"OnlineCourse.showDetailsLesson\">\n" +
    "										  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "										</li>								\n" +
    "									</ul>\n" +
    "								    <div class='text-muted navbar-btn' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 1\">\n" +
    "											<strong>{{'Article Content'|translate}}</strong>\n" +
    "											<p ng-bind-html='OnlineCourse.article_content' class=\"well navbar-btn\"></p>\n" +
    "									</div>\n" +
    "									<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 3\">											\n" +
    "											<div class=\"alert alert-info\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 1\">\n" +
    "									\n" +
    "												<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "											</div>\n" +
    "											<div class=\"alert alert-danger\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 0 && OnlineCourse.is_lesson_ready_to_view !== 1\">\n" +
    "												<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "											</div>\n" +
    "											<video id=\"video\" ng-src=\"{{OnlineCourse.video_url}}\" controls=\"true\" ng-if=\"OnlineCourse.is_lesson_ready_to_view === 1\"></video>\n" +
    "									</div>\n" +
    "									<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 4\">											\n" +
    "										<p class=\"videoWrapper\" ng-bind-html=\"OnlineCourse.embed_code | to_trusted\"></p>			\n" +
    "													\n" +
    "									</div>\n" +
    "									<div class=\"col-xs-12 clearfix \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItemLesson && currentLessonView === 'edit'  && OnlineCourse.showDetailsLesson\">									\n" +
    "									<div class=\"panel well-sm clearfix \">\n" +
    "										<video-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}'  ng-if=\"OnlineCourse.online_lesson_type_id === 3 && $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\"  updateparent=\"model.getOnlineCourses()\" ></video-lessons-form>\n" +
    "										<video-external-embed-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 4 && $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "										<article-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 1 && $root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "										<downloadable-file-lessons-form course='{{courseID}}' lesson-id='{{OnlineCourse.id}}' action='edit'  ng-if=\"OnlineCourse.online_lesson_type_id === 5 && $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>		\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>							\n" +
    "						</li>															\n" +
    "					</ul>\n" +
    "					<!-- lesson and chapter add section -->	\n" +
    "					<div class=\"navbar-btn clearfix\">		\n" +
    "							<div class=\"well-lg navbar-btn\">\n" +
    "								<div class=\"well-lg clearfix\"></div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<a class=\"btn btn-info btn-block btn-lg\" href=\"#\" ng-click=\"model.addChapterClick($event)\" ng-disabled=\"model.addsection === true\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Chapter'|translate}}</a>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<a class=\"btn btn-primary btn-block btn-lg\" href=\"#\" ng-click=\"model.addLesson($event)\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Lesson'|translate}}</a>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"col-xs-12 clearfix  navbar-btn\" ng-show=\"model.addsection === true\">							\n" +
    "								<div class=\"panel panel-default well-sm\">				\n" +
    "									<form role=\"form\" name=\"chapter_add\" class=\"form-horizontal clearfix\" ng-submit=\"model.addChapter($event)\">		\n" +
    "										<div class=\"form-group\" >\n" +
    "											<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "												<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "												<div class=\"input-group\">			\n" +
    "														<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.AddOnlineChapter.name\" required maxlength=\"50\">\n" +
    "														<span class=\"input-group-addon\">{{model.AddOnlineChapter.name.length}}</span>																						\n" +
    "												</div>\n" +
    "												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"form-group\" >\n" +
    "											<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "												<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>\n" +
    "													<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.AddOnlineChapter.description\" maxlength=\"150\"></textarea>												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"clearfix\">\n" +
    "											<div class=\"text-center\">\n" +
    "												<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "												<input type=\"submit\" ng-disabled=\"disableButton\" class=\"btn btn-primary\" id=\"section_save\"  value=\"{{'Save'|translate}}\" >\n" +
    "												<a href=\"#\" ng-click=\"model.addChapterCancel($event)\" class=\"\">{{'Cancel'|translate}}</a>\n" +
    "											 </div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "							<div class=\"col-xs-12 clearfix  navbar-btn lessonTypes\" ng-show=\"currentView === 'add'\">\n" +
    "									\n" +
    "									<div class=\"panel panel-default well-sm clearfix\">\n" +
    "										<a href=\"#\" class=\"navbar-btn pull-right text-primary add-lession-cancel\" ng-click=\"model.cancelAddLesson($event);\" >{{'Cancel'|translate}}</a>\n" +
    "										<video-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-lessons-form>\n" +
    "										<video-external-embed-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "										<article-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "										<downloadable-file-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\"  updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>						\n" +
    "									</div>\n" +
    "							</div>\n" +
    "							<div class=\"well-lg\"></div>\n" +
    "						</div>																			\n" +
    "					</div>						    					  \n" +
    "				</div>	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseDangeZone.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseDangeZone.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"danger_zone\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{model.courseDangerZone.title}}</h3>									\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div class=\"well-lg panel clearfix\">\n" +
    "					<p ng-bind-html=\"model.courseDangerZone.content\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseFeedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseFeedback.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"course_feedback\">\n" +
    "				<div class=\"panel well-sm\">					\n" +
    "					<p ng-bind-html=\"model.courseFeedback.content\"></p>\n" +
    "				</div>\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseGoals.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseGoals.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"tab-pane active\" id=\"course_goals\">	 \n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Course Goals'|translate}}</h3>\n" +
    "						<span>{{'Set your audience, what students will learn, and what they need in order to be successful'|translate}}.</span>\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix navbar-btn\" ng-submit=\"model.goalsSave()\" name=\"manage_course_goals\">	     \n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Instructional Level'|translate}}*</strong></label>							\n" +
    "								</div>	\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "								<div class=\"radio radio-inline\" ng-repeat=\"InstructionLevels in model.InstructionLevels\" ng-click='model.courseGoals.instructional_level_id = InstructionLevels.id'>\n" +
    "									<label for=\"{{InstructionLevels.name}}\"><input type=\"radio\" value=\"{{InstructionLevels.id}}\" id=\"Beginner_Level_{{InstructionLevels.id}}\" name=\"course_Level\" ng-model=\"model.courseGoals.instructional_level_id\" required>\n" +
    "									{{InstructionLevels.name}}</label>\n" +
    "								</div>																\n" +
    "								<div class=\"clearfix\"></div>\n" +
    "								</div>\n" +
    "							</div>									\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'At the end of my course, students will be able to...'|translate}}</strong></label>\n" +
    "								<p>{{'Start with a verb. Include details on specific skills students will learn and where students can apply them.'|translate}}</p>\n" +
    "								</div>					\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseGoals.students_will_be_able_to\" name=\"students_will_be_able_to\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Who should take this course? Who should not?'|translate}}</strong></label>\n" +
    "								<p>{{'Students appreciate instructors who set the right expectations by telling them what specific student needs they are solving, who the course is best suited for, and who it is NOT for.'|translate}}</p>\n" +
    "								</div>\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseGoals.who_should_take_this_course_and_who_should_not\" name=\"who_should_take_this_course_and_who_should_not\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'What will students need to know or do before starting this course?'|translate}}</strong></label>\n" +
    "								<p>{{'What materials/software do the students need and what actions do they have to perform before the course begins?'|translate}}</p>\n" +
    "								</div>	\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseGoals.what_actions_students_have_to_perform_before_begin\" name=\"what_actions_students_have_to_perform_before_begin\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseHelp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseHelp.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"help\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{model.courseHelp.title}}</h3>					\n" +
    "					</div>					\n" +
    "				</div>	\n" +
    "				<div class=\"navbar-btn panel well-sm clearfix\">\n" +
    "					<p ng-bind-html=\"model.courseHelp.content\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseImage.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div  class=\"tab-pane active\" id=\"course_image\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Image'|translate}}</h3>\n" +
    "					</div>\n" +
    "					\n" +
    "				</div>				\n" +
    "				<div class=\"panel clearfix well-sm\">\n" +
    "					<span class=\"navbar-btn\">{{'Cover Preview'|translate}}:*</span>\n" +
    "					<div class=\"thumbnail clearfix\">\n" +
    "							<!-- course image when is_from_mooc_affiliate false -->\n" +
    "						<div ng-if=\"model.courseImage.is_from_mooc_affiliate !== 1\">\n" +
    "							<a ng-if=\"model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/{{model.courseImage.image_hash}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"!model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						<!-- course image when is_from_mooc_affiliate true -->\n" +
    "						<div ng-if=\"model.courseImage.is_from_mooc_affiliate === 1\" >							\n" +
    "							<a ng-if=\"model.courseImage.course_image && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{model.courseImage.course_image}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"!model.courseImage.course_image  && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						<div class=\"panel-body\">\n" +
    "							<p>{{'A good course image is critical to a course'|translate}}'{{'s success. It should grab the attention of the viewer and help them understand the essence of what the course has to offer.'|translate}}</p>							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"well-lg\">\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_image\" ng-submit=\"model.saveCourseImage()\">		\n" +
    "							<div class=\"form-group\">\n" +
    "								<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_image\">{{'Add/Change Image'|translate}}:</label>\n" +
    "								<div class=\"col-md-9 col-sm-9\">\n" +
    "									<div class=\"pull-left col-md-12 col-sm-12 col-xs-12\" ng-init=\"beforeUpload=true; afterUpload= false; duringUpload= false;\">\n" +
    "										<!--<span class=\"\">\n" +
    "										<i class=\"fa fa-upload\" ng-show=\"beforeUpload\"></i>\n" +
    "										<i class=\"fa fa-spinner fa-spin\" ng-show=\"duringUpload\"></i>\n" +
    "										<i class=\"fa fa-check\" ng-show=\"afterUpload\"></i>\n" +
    "										Upload</span>-->\n" +
    "										<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" onchange=\"angular.element(this).scope().uploadFile(this.files)\" required=\"\">\n" +
    "										<span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_image_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\"  ng-disabled=\"true\" id=\"course_image_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "									<input type=\"button\" class=\"btn btn-primary btn-lg\" ng-click=\"model.uploadCancel()\"  value=\"Cancel\"  ng-show=\"duringUpload\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCoursePrice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCoursePrice.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"price_coupons\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3 class=\"text-default\">{{'Price'|translate}}</h3>\n" +
    "						<span class=\"text-default\">{{'Set the price of your course.'|translate}}</span>						\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "				<form role=\"form\" class=\"form-horizontal panel clearfix\" name=\"manage_course_price\" ng-submit='model.priceSave()'>			\n" +
    "					<div class=\"form-group navbar-btn\" ng-class=\"{ 'has-error' : manage_course_price.price.$invalid && manage_course_price.price.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_price\">{{'Price'|translate}}<span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">&nbsp;({{$root.settings['site.currency_symbol']}})</span>\n" +
    "						<span ng-if=\"$root.settings['site.currency_symbol'] === ''\">&nbsp;({{$root.settings['site.currency_code']}})</span></label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"number\" class=\"form-control\" name=\"price\" id=\"course_price\" placeholder=\"{{'Price'|translate}}\" min=0  max=\"{{$root.settings['course.max_course_fee']}}\" ng-model=\"model.coursePrice.price\" required>			\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"manage_course_price.price.$dirty\" ng-messages=\"manage_course_price.price.$error\">\n" +
    "								<div ng-message=\"max\">{{'You can set price upto '|translate}} <span><amount-display amount=\"{{$root.settings['course.max_course_fee']}}\" fraction='0' is-course-price='no'></amount-display></span></div>\n" +
    "							</div>							\n" +
    "						</div>\n" +
    "						\n" +
    "					</div>\n" +
    "					<div class=\"well well-sm clearfix\">\n" +
    "						<div class=\"pull-right\">\n" +
    "							<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "							<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "				</div>\n" +
    "				<div class=\"well-lg panel text-center clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1\">{{'Site is not enabled any payment option. So this course will be free access.' | translate}}\n" +
    "				</div>\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCoursePromoVideo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCoursePromoVideo.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"tab-pane active\" id=\"promo_video\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Promo Video'|translate}}</h3>\n" +
    "						<p>{{'Add a promotional video to your course.'|translate}}</p>											\n" +
    "					</div>	\n" +
    "				</div>				\n" +
    "				<div class=\"panel clearfix well-sm\">\n" +
    "					<span class=\"navbar-btn\">{{'Video Preview'|translate}}:*</span>\n" +
    "					<div class=\"thumbnail clearfix\">\n" +
    "						<div  ng-if=\"model.courseVideo.video_url && model.courseVideo.is_promo_video_convert_error === 0 && model.courseVideo.is_promo_video_converting_is_processing === 0\">\n" +
    "							<video id=\"video\" ng-src=\"{{model.courseVideo.video_url}}\" controls=\"true\" ></video>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"alert alert-info\" ng-if=\"model.courseVideo.is_promo_video_converting_is_processing === 1\">\n" +
    "							<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"alert alert-danger\" ng-if=\" model.courseVideo.is_promo_video_converting_is_processing === 0 && model.courseVideo.is_promo_video_convert_error === 1\">\n" +
    "							<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "						</div>\n" +
    "						<h3 class=\"text-primary\"><span>{{'Explore our second-by-second researched recipe for creating the perfect promo video'|translate}}</span></h3>\n" +
    "						<div class=\"panel-body\">\n" +
    "							<p><strong>{{'Don\\'t forget to add a promo video!'|translate}}</strong></p>\n" +
    "							<p>{{'Students who watch a well-made promo video are 5X more likely to enroll in your course. We\\'ve seen that statistic go up to 10X for exceptionally awesome videos. Learn how to make yours awesome'|translate}}!</p>							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"well-lg\">\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_provideo\" ng-submit=\"model.videoSave()\">		\n" +
    "							<div class=\"form-group\">\n" +
    "								<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_video\">{{'Add/Change Video'|translate}}:</label>\n" +
    "								<div class=\"col-md-8 col-sm-9\">\n" +
    "									<div class=\"alert alert-warning\">\n" +
    "										<p><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'Should be 720p minimum with clear lighting, composition, and a steady camera exported in 16:9 format.'|translate}}</p>\n" +
    "										<p ng-if=\"$root.settings['video.max_size_to_allow_video_file'] !== ''\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'File size should be lesser than'|translate}} {{$root.settings['video.max_size_to_allow_video_file'] | bytes}}</p>\n" +
    "									</div>\n" +
    "									<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" onchange=\"angular.element(this).scope().uploadVideo(this.files)\" required=\"\" ng-model=\"model.courseVideo.promo_video\"/>	\n" +
    "									<span class=\"text-danger help-block\">{{'Allowed extensions: mov, mpeg4, avi, wmv, mpeg, flv, 3gpp, webm, mp4'|translate}}</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"course_video_save\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_video_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"course_video_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/manageCourseSummary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/manageCourseSummary.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">			\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div  class=\"navbar-default tab-pane active\" id=\"course_summary\">\n" +
    "				<div class=\"panel well-sm\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Course Summary'|translate}}</h3>\n" +
    "						<span>{{'Highlight what the course covers, how it is taught, benefits of course and why students should enroll.'|translate}}</span>\n" +
    "					</div>	\n" +
    "					<div class=\"well-lg clearfix\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_summary' ng-submit=\"model.saveCourseSummary(manage_course_summary)\">		\n" +
    "							<div class=\"form-group\">\n" +
    "									<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseSummary.description\"  name='summary' \n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\" ta-required='true' required=\"\"></div>	\n" +
    "									<div class=\"alert navbar-btn\" ng-class=\"{'alert-info': !error, 'alert-danger': error}\" role=\"alert\" ng-if='error'>{{info}}</div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/search.tpl.html",
    "<section class=\"container\" id=\"search-results\">\n" +
    "  <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "  <div class=\"row\">\n" +
    "	<div class=\"col-sm-3 col-xs-12\">\n" +
    "	  <h2><small><span class=\"text-primary\">\n" +
    "	  <strong>{{'Courses'|translate}}</strong></span></small></h2>\n" +
    "	</div>\n" +
    "	<div class=\"col-sm-9 col-xs-12\">\n" +
    "	  <div class=\"well-sm\"></div>\n" +
    "	  <div class=\"row\">\n" +
    "		<div class=\"col-sm-12 col-xs-12 navbar-btn\">\n" +
    "		  <div class=\"col-sm-9 col-xs-12 navbar-btn pull-left\">\n" +
    "		  <div class=\"input-group\">\n" +
    "			<input type=\"text\" placeholder=\"{{'Search Courses'|translate}}\" ng-model=\"hsearchVal\" ng-keyup=\"$event.keyCode == 13 ? goToState('CourseSearch', {q: hsearchVal}) : null\" class=\"form-control\">\n" +
    "			<a class=\"input-group-addon btn btn-default\" ui-sref=\"CourseSearch({q:hsearchVal, page: 1})\"> <i class=\"fa fa-search\"></i> </a> </div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-3 col-xs-12 navbar-btn pull-right\">\n" +
    "			<div class=\"btn-group\" ng-if=\"model.courseLength > 0\">\n" +
    "				<div class=\"dropdown\">			\n" +
    "					<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'popular'\" title=\"{{'Popularity'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >{{'Popularity'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'reviews'\" title=\"{{'Reviews'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">{{'Reviews'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'id' || !sortValue\" title=\"{{'Newest'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >{{'Newest'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'ASC'\" title=\"{{'Price: Low to High'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >{{'Price: Low to High'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'DESC'\" title=\"{{'Price: High to Low'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >{{'Price: High to Low'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'featured'\" title=\"{{'Featured'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default\" >{{'Featured'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "					  <ul class=\"dropdown-menu\">					\n" +
    "						<li><a ui-sref=\"CourseSearch({ sort:'popular', page: 1 })\" title=\"{{'Popularity'|translate}}\">{{'Popularity'|translate}}</a></li>\n" +
    "						<li><a ui-sref=\"CourseSearch({ sort:'reviews', page: 1 })\" title=\"{{'Reviews'|translate}}\"  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">{{'Reviews'|translate}}</a></li>\n" +
    "						<li><a ui-sref=\"CourseSearch({ sort:'id', page: 1 })\" title=\"{{'Newest'|translate}}\">{{'Newest'|translate}}</a></li>\n" +
    "						<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'ASC', page: 1 })\" title=\"{{'Price: Low to High'|translate}}\">{{'Price: Low to High'|translate}}</a></li>\n" +
    "						<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'DESC', page: 1 })\" title=\"{{'Price: High to Low'|translate}}\">{{'Price: High to Low'|translate}}</a></li>\n" +
    "						<li><a ui-sref=\"CourseSearch({ sort:'featured', page: 1 })\" title=\"{{'Featured'|translate}}\" >{{'Featured'|translate}}</a></li>\n" +
    "					  </ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "  <aside class=\"col-md-3 col-sm-4 col-xs-12 search-results-sidebar\">\n" +
    "	<div class=\"row\">\n" +
    "	  <h4 class=\"text-muted initialism\">{{'Category'|translate}}</h4>\n" +
    "	  <ul role=\"tablist\" class=\"nav nav-pills nav-stacked\">\n" +
    "		<li role=\"presentation\" ng-repeat=\"parentCategory in model.common.parentCategories.data\">\n" +
    "			<div class=\"checkbox clearfix\" ng-init=\"(parentCategory.id == searchingCourseCategory) ? getCurrentCategory(parentCategory.sub_category_name):''\" >\n" +
    "				<label>\n" +
    "				<a title=\"{{parentCategory.sub_category_name}}\" role=\"tab\" ui-sref=\"CourseSearch({ category_id: {{parentCategory.id}}, page: 1 })\" ng-if=\"parentCategory.id !== searchingCourseCategory\" ><input type=\"checkbox\" class=\"\" ng-checked=\"parentCategory.id == searchingCourseCategory\" ng-click=\"getCurrentCategory(parentCategory.sub_category_name)\">{{parentCategory.sub_category_name}}</a>\n" +
    "				<a title=\"{{parentCategory.sub_category_name}}\" role=\"tab\" ui-sref=\"CourseSearch({ category_id: '', page: 1 })\" ng-if=\"parentCategory.id === searchingCourseCategory\"><input type=\"checkbox\" class=\"\" ng-checked=\"parentCategory.id == searchingCourseCategory\" ng-click=\"getCurrentCategory(parentCategory.sub_category_name)\"><strong>{{parentCategory.sub_category_name}}</strong></a>\n" +
    "				\n" +
    "				</label>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "	  </ul>\n" +
    "	 \n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"well-sm\"></div>\n" +
    "	<div class=\"row clearfix\">\n" +
    "	  <h4 class=\"text-muted initialism\">{{'Skill Level'|translate}}</h4>\n" +
    "	  <form class=\"form-horizontal\">\n" +
    "		<div class=\"checkbox\" ng-repeat=\"InstructionLevels in model.InstructionLevels\">\n" +
    "		  <a ui-sref=\"CourseSearch({ instructionLevel:{{InstructionLevels.id}} , page: 1})\"  ng-if=\"InstructionLevels.id !== searchingInstructionLevel\">\n" +
    "			<input id=\"{{InstructionLevels.name}}\" type=\"checkbox\" ng-checked=\"InstructionLevels.id == searchingInstructionLevel\"> \n" +
    "			<span for=\"{{InstructionLevels.name}}\" >{{InstructionLevels.name}}</span></a>\n" +
    "		  <a ui-sref=\"CourseSearch({ instructionLevel:'', page: 1})\"  ng-if=\"InstructionLevels.id === searchingInstructionLevel\">\n" +
    "			<input id=\"{{InstructionLevels.name}}\" type=\"checkbox\" ng-checked=\"InstructionLevels.id == searchingInstructionLevel\"> \n" +
    "			<span for=\"{{InstructionLevels.name}}\" ><strong>{{InstructionLevels.name}}</strong></span></a>\n" +
    "		</div>\n" +
    "	  </form>\n" +
    "	</div>\n" +
    "	<div class=\"well-sm\"></div>\n" +
    "	<div class=\"row clearfix\">\n" +
    "	  <h4 class=\"text-muted initialism\">{{'Languages'|translate}}</h4>\n" +
    "	  <form class=\"form-horizontal\">\n" +
    "		<div class=\"checkbox\" ng-repeat =\"languages in model.languages\">\n" +
    "		<a ui-sref=\"CourseSearch({ language:{{languages.id}}, page: 1 })\" ng-if=\"languages.id !== searchingCourseLanguage\">\n" +
    "		  <input id=\"{{languages.name}}\" type=\"checkbox\" ng-checked=\"languages.id == searchingCourseLanguage\">\n" +
    "		  <span for=\"{{languages.name}}\">{{languages.name}}</span></a>\n" +
    "		\n" +
    "		  <a ui-sref=\"CourseSearch({ language:'', page: 1 })\" ng-if=\"languages.id === searchingCourseLanguage\">\n" +
    "		  <input id=\"{{languages.name}}\" type=\"checkbox\"  ng-checked=\"languages.id == searchingCourseLanguage\">\n" +
    "		  <span for=\"{{languages.name}}\" ><strong>{{languages.name}}</strong></span></a>\n" +
    "		</div>\n" +
    "	  </form>\n" +
    "	</div>\n" +
    "	<div class=\"well-sm\"></div>\n" +
    "	<div class=\"row clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "	  <h4 class=\"text-muted initialism\">{{'Price'|translate}}</h4>\n" +
    "	  <form class=\"form-horizontal\">\n" +
    "		<div class=\"checkbox\">\n" +
    "		  <a ui-sref=\"CourseSearch({ price: 'Paid' , page: 1})\" ng-if=\"'Paid' !== searchingCoursePrice\">\n" +
    "			<input type=\"checkbox\" ng-checked=\"searchingCoursePrice == 'Paid'\"> \n" +
    "			<span>{{'Paid'|translate}}</span></a>\n" +
    "		\n" +
    "		  <a ui-sref=\"CourseSearch({ price: '' , page: 1})\"  ng-if=\"'Paid' === searchingCoursePrice\">\n" +
    "			<input type=\"checkbox\" ng-checked=\"searchingCoursePrice == 'Paid'\"> \n" +
    "			<span><strong>{{'Paid'|translate}}</strong></span></a>\n" +
    "		</div>\n" +
    "		<div class=\"checkbox\">\n" +
    "			<a ui-sref=\"CourseSearch({ price: 'Free' , page: 1 })\" ng-if=\"'Free' !== searchingCoursePrice\">\n" +
    "			<input type=\"checkbox\" ng-checked=\"searchingCoursePrice == 'Free'\"> \n" +
    "			<span>{{'Free'|translate}}</span></a>\n" +
    "		\n" +
    "		  <a ui-sref=\"CourseSearch({ price: '' , page: 1})\" ng-if=\"'Free' === searchingCoursePrice\">\n" +
    "			<input type=\"checkbox\" ng-checked=\"searchingCoursePrice == 'Free'\"> \n" +
    "			<span><strong>{{'Free'|translate}}</strong></span></a>\n" +
    "		</div>\n" +
    "	  </form>\n" +
    "	</div>\n" +
    "  </aside>\n" +
    "  <div class=\"tab-content\">\n" +
    "	<div class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "	  <div class=\"col-md-9 col-sm-8 col-xs-12\" >\n" +
    "		<div class=\"bg-primary\" ng-if=\"searchingCourseCategory !== '' && searchingCourseCategory !== null\">\n" +
    "		  <h3 class=\"h4 well-sm list-group-item-text\"><strong>{{curent_category_name}}</strong></h3>\n" +
    "		</div>		\n" +
    "	  </div>\n" +
    "	  <div class=\"col-md-9 col-sm-8 col-xs-12\">	\n" +
    "		<ul class=\"row clearfix navbar-btn list-unstyled list-group-item-text course-list\" ng-repeat=\"courses in model.courses.data\" ng-if=\"model.courseLength > 0\">\n" +
    "	    <li class=\"col-sm-12\">\n" +
    "		  <div class=\"col-sm-3\"> \n" +
    "			<!-- course image when is_from_mooc_affiliate false -->\n" +
    "			<a  href=\"#!/course/{{courses.id}}/{{courses.slug}}\" ng-if=\"courses.image_hash && courses.is_from_mooc_affiliate !== 1\" class=\"course_thumb_img\">\n" +
    "				<img class=\"img-responsive\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/normal_thumb/Course/{{courses.image_hash}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/> </a>\n" +
    "			\n" +
    "			<a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" ng-if=\"!courses.image_hash && courses.is_from_mooc_affiliate !== 1\" class=\"course_thumb_img\">\n" +
    "				<img  class=\"img-responsive\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/normal_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/></a>\n" +
    "			\n" +
    "			<!-- course image when is_from_mooc_affiliate true -->			\n" +
    "			<a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" ng-if=\"courses.course_image && courses.is_from_mooc_affiliate === 1\" class=\"course_thumb_img\">\n" +
    "				<img  class=\"img-responsive\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{courses.course_image}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/></a>\n" +
    "			\n" +
    "			<a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" ng-if=\"!courses.course_image && courses.is_from_mooc_affiliate === 1\" class=\"course_thumb_img\">\n" +
    "				<img  class=\"img-responsive\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/normal_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/></a>\n" +
    "		 \n" +
    "		 </div>\n" +
    "		  <div class=\"col-sm-9\">\n" +
    "			<div class=\"clearfix\">\n" +
    "			  <ul class=\"list-inline navbar-btn clearfix\">\n" +
    "				<li class=\"col-sm-12\">\n" +
    "				  <h4 class=\"list-group-item-heading htruncate-m1\"> <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> <strong>{{courses.title}}</strong></a></h4>\n" +
    "				</li>\n" +
    "				<li class=\"visible-xs navbar-btn\"></li>\n" +
    "			  </ul>\n" +
    "			  <span class=\"col-sm-12 row htruncate-m3 list-group-item-heading\">{{courses.subtitle}}</span>\n" +
    "			  <p class=\"show text-muted navbar-btn\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && courses.user_id\"><span>{{'by'|translate}}&nbsp;<profile-name user-profile-id='courses.user_id' user-display-name='courses.displayname' ng-if='courses.user_id' user-name-class = 'true'></profile-name></span><span ng-show=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1 && courses.designation\">-&nbsp;{{courses.designation}}</span></p>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix row col-xs-8\"> \n" +
    "				<span class=\"list-group-item-text list-group-item-heading text-success\"><strong><amount-display amount='{{courses.price}}' fraction='0' is-course-price='yes'></amount-display></strong></span>\n" +
    "				<rating-stars average-rating='{{courses.average_rating}}' ng-if=\"model.courses && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars>\n" +
    "				<span class=\"text-muted\">{{courses.active_online_course_lesson_count}} {{'Lectures'|translate}}&nbsp;</span>\n" +
    "				\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-4\"><span ng-if=\"courses.instructional_level_name\">-</span> {{courses.instructional_level_name}}</div>\n" +
    "		  </div>\n" +
    "		  </li>\n" +
    "		</ul>\n" +
    "		<div class=\"well-sm navbar-btn\"></div>\n" +
    "		<div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "			<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#search-results')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "	    </div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "  <div class=\"text-center\" ng-if=\"_metadata.total_records === 0\">	\n" +
    "		<div class=\"col-xs-9\" ng-if=\"!noFiltersUsed\">\n" +
    "			<h2 class=\"h-slim-top\">{{'No Matching Courses'|translate}}</h2>\n" +
    "			<p>{{'Courses matching these results can only be found in an alternate dimension.'|translate}}<br>{{'Please modify your search or browse similar courses below.'|translate}}</p>\n" +
    "		</div>\n" +
    "		<div class=\"col-xs-9\" ng-if=\"noFiltersUsed\">\n" +
    "			<h2 class=\"h-slim-top\">{{'No courses available.'|translate}}</h2>			\n" +
    "		</div>\n" +
    "  </div> \n" +
    "</section>\n" +
    "<section ng-show=\"model.loading === false\">\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("themes/learnr/views/courses/teaching.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/teaching.tpl.html",
    "<section class=\"container\">\n" +
    "	<instructor-courses theme-name ='learnr' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"></instructor-courses>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/viewCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/viewCourse.tpl.html",
    "<!--Banner section start-->\n" +
    "<section id=\"banner-carousel\" class=\"carousel slide\" data-ride=\"carousel\" ng-if=\"!model.course.video_url\" ng-show=\"model.loading === false\" >\n" +
    "  <!-- Wrapper for slides -->\n" +
    "  <div class=\"carousel-inner\">\n" +
    "	\n" +
    "	<!-- course image when is_from_mooc_affiliate false and promo video not enabled -->\n" +
    "	<div class=\"item active\" ng-if=\"!model.course.video_url && model.course.is_from_mooc_affiliate !== 1\"> \n" +
    "		<img ng-if=\"model.course.image_hash\"  animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/large_thumb/Course/{{model.course.image_hash}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" /> \n" +
    "		<img ng-if=\"!model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />		\n" +
    "	</div>\n" +
    "	<!-- course image when is_from_mooc_affiliate true -->\n" +
    "	<div class=\"item active\" ng-if=\"model.course.is_from_mooc_affiliate === 1\">\n" +
    "		<img ng-if=\"model.course.course_image\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{model.course.course_image}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "		<img ng-if=\"!model.course.course_image\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />		\n" +
    "    </div>		\n" +
    " </div>\n" +
    "  <div class=\"well-lg hidden-xs\"></div>\n" +
    "  <div class=\"carousel-caption well-lg\">\n" +
    "	<div class=\"well-lg hidden-sm hidden-xs clearfix\"></div>\n" +
    "	<div class=\"well-lg clearfix\">\n" +
    "	  <div class=\"clearfix\">\n" +
    "		<div class=\"well-lg hidden-sm hidden-xs\"></div>\n" +
    "		<div class=\"well-lg hidden-sm hidden-xs\"></div>\n" +
    "		<h2><small class=\"fa-inverse\"><strong>{{model.course.title}}</strong></small></h2>\n" +
    "		<span class=\"lead fa-inverse\"><strong>{{model.course.subtitle}}</strong></span>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "<section ng-if=\"model.course.video_url\" class=\"bg-primary\" ng-show=\"model.loading === false\">\n" +
    "	<!-- course image when is_from_mooc_affiliate false and promo video enabled and videolessons plugin should be enabled -->\n" +
    "	<div class=\"col-sm-6 col-sm-offset-3 text-center\" ng-if=\"model.course.video_url && model.course.is_promo_video_convert_error === 0 && model.course.is_promo_video_converting_is_processing === 0 && model.course.is_from_mooc_affiliate !== 1 && $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\">\n" +
    "	\n" +
    "	<div class=\"well-lg\"></div>\n" +
    "		<video id=\"video\"  ng-src=\"{{model.course.video_url}}\" controls=\"true\"></video>\n" +
    "	</div>\n" +
    "	<!-- course image when promo video failed or videolessonplugin or promo video enabled settings disabled -->\n" +
    "	<div class=\"text-center\"  ng-if=\"(model.course.video_url && model.course.is_promo_video_convert_error !== 0 || model.course.is_promo_video_converting_is_processing !== 0) || ($root.settings['site.enabled_plugins'].indexOf('VideoLessons') === -1 && model.course.video_url) || ($root.settings['video.is_enabled_promo_video'] === '0' && model.course.video_url) && model.course.is_from_mooc_affiliate !== 1\">\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<img ng-if=\"model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_thumb/Course/{{model.course.image_hash}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" /> \n" +
    "		<img ng-if=\"!model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />		\n" +
    "	</div>\n" +
    "	<div class=\"clearfix text-center\">\n" +
    "		<h2 class=\"col-sm-6 col-sm-offset-3\"><small class=\"fa-inverse\"><strong>{{model.course.title}}</strong></small></h2>\n" +
    "		<span class=\"lead fa-inverse col-sm-6 col-sm-offset-3\"><strong>{{model.course.subtitle}}</strong></span>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<div class=\"well-lg\"></div>\n" +
    "<!--Banner section End-->\n" +
    "<!--home-main section Start-->\n" +
    "<section ng-show=\"model.loading === false\">\n" +
    "  <!-- Course by build section starts -->\n" +
    "  <div class=\"container\">\n" +
    "	<div class=\"col-md-8 col-sm-12 max-img\">\n" +
    "		<div class=\"row\">\n" +
    "			<!-- Course level -->\n" +
    "			<div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"model.course.is_from_mooc_affiliate !== 1\">\n" +
    "				<div class=\"media\">\n" +
    "					<div class=\"media-body col-xs-8\">\n" +
    "						<strong ng-if=\"model.course.instructional_level_name\">{{model.course.instructional_level_name}}</strong>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			\n" +
    "			<!-- Number of students in the class -->\n" +
    "			<div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"model.course.is_from_mooc_affiliate !== 1\">\n" +
    "				<div class=\"media\">\n" +
    "					<div class=\"pull-left\">\n" +
    "						<i class=\"fa fa-users\"></i>\n" +
    "					</div>\n" +
    "					<div class=\"media-body col-xs-10\">\n" +
    "						<strong class=\"ng-binding\">{{'Join'|translate}} {{model.course.course_user_count}} {{'Students'|translate}}</strong>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "		<div class=\"clearfix navbar-btn\" ng-show='model.course.description !== null && model.course.description'>\n" +
    "			<h3 class=\"lead text-primary navbar-btn\"><strong>{{'Course Summary'|translate}}</strong></h3>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "			<p class=\"navbar-btn\" ng-bind-html=\"model.course.description\"></p>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "		<div class=\"clearfix navbar-btn\" ng-show=\"studentsWillBeAbleTo !== '' && studentsWillBeAbleTo !== null\">\n" +
    "			<h3 class=\"lead text-primary navbar-btn\"><strong>{{'What am I going to get from this course?'|translate}}</strong></h3>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "			<p class=\"\" ng-bind-html=\"studentsWillBeAbleTo\"></p>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "		<div class=\"clearfix navbar-btn\" ng-show=\"WhatActionsStudentsHaveToPerformBeforeBegin !== '' && WhatActionsStudentsHaveToPerformBeforeBegin !== null\">\n" +
    "			<h3 class=\"lead text-primary navbar-btn\" ><strong>{{'What are the requirements?'|translate}}</strong></h3>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "			<p class=\"\" ng-bind-html=\"WhatActionsStudentsHaveToPerformBeforeBegin\"></p>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "		<div class=\"clearfix navbar-btn\" ng-show=\"whoShouldTakeThisCourseAndWhoShouldNot !== '' && whoShouldTakeThisCourseAndWhoShouldNot !== null\">\n" +
    "			<h3 class=\"lead text-primary navbar-btn\" ><strong>{{'What is the target audience?'|translate}}</strong></h3>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "			<p class=\"\" ng-bind-html=\"whoShouldTakeThisCourseAndWhoShouldNot\"></p>\n" +
    "			<div class=\"navbar-btn clearfix\"></div>\n" +
    "		</div>\n" +
    "		<online-lessons ng-if=\"model.course.id\"></online-lessons>	\n" +
    "		<div class=\"well-lg\"></div>		\n" +
    "		<div class=\"clearfix navbar-btn\" id=\"reviews\">\n" +
    "			<course-feedback course-id='{{model.course.id}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"></course-feedback>	\n" +
    "		</div>\n" +
    "		<div class=\"well-lg\"></div>		\n" +
    "	</div>\n" +
    "	<div class=\"col-md-4 col-sm-12\">\n" +
    "		<div class=\"well-lg visible-sm visible-xs\"></div>\n" +
    "		<div class=\"col-md-12 col-sm-6 col-xs-8\">\n" +
    "			 <course-wishlist course-wishlist='model.course' wishlist-type='heartWithText' wishlist-label={{'Wishlist'|translate}} wishlisted-label={{'Wishlisted'|translate}}  ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"></course-wishlist>\n" +
    "		</div>\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		  <payment-buttons user-id=\"{{model.course.user_id}}\" btn-link=\"{{model.course.mooc_affiliate_course_link}}\" instruction-level='{{model.course.instructional_level_id}}' title='{{model.course.title}}' slug='{{model.course.slug}}' course-price='{{model.course.price}}' course-id='{{model.course.id}}' ng-if='model.course.id'></payment-buttons>					  \n" +
    "		<div class=\"well-lg clearfix\"></div>\n" +
    "		<div class=\"col-md-12 col-sm-6 col-xs-8\">\n" +
    "			<div  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1 && model.course.is_from_mooc_affiliate !== 1\">\n" +
    "				<rating-stars average-rating='{{model.course.average_rating}}' ng-click=\"gotoAnchorLink($event,'reviews',model.course.course_user_feedback_count)\" ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars> \n" +
    "				<p><span ng-click=\"gotoAnchorLink($event,'reviews', model.course.course_user_feedback_count)\" class=\"text-muted\">{{model.course.course_user_feedback_count}} {{'ratings'|translate}}</span></p>\n" +
    "			</div>\n" +
    "			\n" +
    "			<h3 class=\"lead list-group-item-heading text-primary\" ng-if=\"model.course.user_id\"><strong>{{'Instructors And Partners'|translate}}</strong></h3>		\n" +
    "			<div class=\"media\" ng-if=\"model.course.user_id\">\n" +
    "				<profile-image user-image-hash='model.course.user_image_hash' user-display-name='{{model.course.displayname}}'  user-profile-id='model.course.user_id' ng-if='model.course' user-profile-thumb='normal_thumb' image-type ='imagecircle'></profile-image>\n" +
    "			   <div class=\"media-body h4 text-primary\"> <strong><i class=\"fa fa-caret-right\"></i> <profile-name  user-display-name='model.course.displayname'  user-profile-id='model.course.user_id' ng-if='model.course' user-designation-text='{{model.course.designation}}' user-designation='yes'></profile-name></strong>\n" +
    "				</div>\n" +
    "				<ul class=\"list-inline\">\n" +
    "					<li ng-show=\"model.user_profile.twitter_profile_link\"><a href=\"{{model.user_profile.twitter_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.google_plus_profile_link\"><a href=\"{{model.user_profile.google_plus_profile_link}}\" target=\"_blank\" class=\"text-muted\"> <span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-google-plus fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "					<li ng-show=\"model.user_profile.facebook_profile_link\"><a href=\"{{model.user_profile.facebook_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "					<li ng-show=\"model.user_profile.youtube_profile_link\"><a href=\"{{model.user_profile.youtube_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-youtube fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.website\"><a href=\"{{model.user_profile.website}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-globe fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.linkedin_profile_link\"><a href=\"{{model.user_profile.linkedin_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"well-lg clearfix\"></div>\n" +
    "		<div class=\"col-md-12 col-sm-6 col-xs-8\">\n" +
    "			<social-share share-title='{{model.course.title}}' share-link = '#!/course/{{model.course.id}}/{{model.course.slug}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('SocialShare') > -1\"></social-share> 		\n" +
    "			<div banner position=\"courseBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\" class=\"max-img\"></div>\n" +
    "		</div>\n" +
    "		 		\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<!-- End of Course by build section starts -->\n" +
    "<section ng-show=\"model.loading === false && model.course.category_name\">\n" +
    "  <div class=\"clearfix text-center\"> \n" +
    "	<a href=\"javascript:void(0);\" title=\"search\">\n" +
    "	   <img src=\"assets/img/sm-webdev.png\" alt=\"[Image: {{'Web Developer'|translate}}]\" title=\"{{'Web Developer'|translate}}\" class=\"img-responsive center-block\">\n" +
    "	</a>\n" +
    "	<div class=\"well-sm\"></div>\n" +
    "	<h4>{{'View more courses in'|translate}} <a ui-sref=\"CourseSearch({ category_id: model.course.category_id })\" title=\"{{model.course.category_name}}\">{{model.course.category_name}}</a></h4>\n" +
    "  </div>\n" +
    "  <div class=\"well-lg\"></div>\n" +
    "</section>\n" +
    "<!-- comments section -->\n" +
    "\n" +
    "<section ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Comments') > -1 && ($root.settings['facebook.is_enabled_facebook_comment'] === '1' || $root.settings['disqus.is_enabled_disqus_comment'] === '1')\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"col-md-8 col-sm-12\">\n" +
    "			<div class=\"well-lg hidden-xs\"></div>\n" +
    "			<div class=\"clearfix\"> \n" +
    "			<facebook-comments ng-if=\"$root.settings['facebook.comments.api_key'] && $root.settings['facebook.is_enabled_facebook_comment'] === '1'\"></facebook-comments>			\n" +
    "			<dir-disqus config=\"disqusConfig\" ng-if=\"model.course.id && $root.settings['disqus.comments.shortname'] && $root.settings['disqus.is_enabled_disqus_comment'] === '1'\" ></dir-disqus>\n" +
    "			</div>\n" +
    "			<div class=\"well-lg\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section ng-show=\"model.loading === false\">\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/courses/wishlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/courses/wishlist.tpl.html",
    "<section class=\"container\" id=\"wishlist-courses\">\n" +
    "  <h3 class=\"text-primary\"><strong>{{'Wishlist'|translate}}</strong></h3>\n" +
    "  <hr class=\"list-group-item-heading navbar-btn\">\n" +
    "  <aside class=\"col-md-3 col-sm-4 col-xs-12\">\n" +
    "	<div class=\"row\">\n" +
    "	  <ul role=\"tablist\" class=\"nav nav-pills nav-stacked\">\n" +
    "		<li role=\"presentation\" class=\"\"><a title=\"{{'My Profile'|translate}}\" aria-controls=\"Contact-Info\"  role=\"tab\" href=\"#!/users/edit-profile\">{{'My Profile'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a href=\"#!/users/change_password\" title=\"{{'Password'|translate}}\" aria-controls=\"password\" role=\"tab\">{{'Change Password'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a  href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\" >{{'Learning'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"active\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\">{{'Wishlist'|translate}}</a></li>\n" +
    "	  </ul>\n" +
    "	</div>\n" +
    "  </aside>\n" +
    "	<div class=\"tab-content\">\n" +
    "		<div class=\"well-sm navbar-btn list-group-item-heading\"></div>\n" +
    "		<div class=\"col-sm-3 hidden-xs\">\n" +
    "\n" +
    "	  </div>\n" +
    "	<div id=\"wishlist\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "	  <div class=\"col-md-9 col-sm-8 col-xs-12\">\n" +
    "		<ul class=\"clearfix list-unstyled navbar-btn row course-listing\">\n" +
    "			  <li class=\"col-md-3 col-sm-4 col-xs-12\" ng-repeat=\"wishlistCourses in model.wishlistCourses.data\" id=\"Wishlist_elements_{{wishlistCourses.id}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\">\n" +
    "				<div class=\"panel dashboardPanelHeight\">	\n" +
    "					<!-- course image when is_from_mooc_affiliate false -->\n" +
    "					<a ng-if=\"wishlistCourses.image_hash && wishlistCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/{{wishlistCourses.image_hash}}\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" /></span>\n" +
    "					</a>\n" +
    "					<a ng-if=\"!wishlistCourses.image_hash && wishlistCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" /></span>\n" +
    "				    </a>                  \n" +
    "					\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->\n" +
    "					<a ng-if=\"wishlistCourses.course_image && wishlistCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\"><span class=\"mooc_thumb_img mooc_dashboard_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{wishlistCourses.course_image}}\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\"/></span></a>                  \n" +
    "					<a ng-if=\"!wishlistCourses.course_image && wishlistCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\">\n" +
    "						<span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" /></span>\n" +
    "					</a>                  \n" +
    "				   \n" +
    "\n" +
    "				  <div class=\"pull-right dropdown action-btn\" title=\"{{'Options'|translate}}\">\n" +
    "						<a href=\"javascript:void(0);\" class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a> \n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "						  <li><a href=\"#\" title=\"{{'Unfavourite'|translate}}\" ng-click=\"model.deleFavourites(model.wishlistCourses.data[$index].id, $event)\" class=\"text-muted\">{{'Unfavourite'|translate}}</a></li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					\n" +
    "				  <div class=\"panel-body\"> <a  href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\" class=\"text-muted htruncate-m2\"><strong>{{wishlistCourses.course_title}}</strong> </a>\n" +
    "					<p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><profile-name user-profile-id='wishlistCourses.teacher_user_id' ng-if='wishlistCourses' user-display-name='wishlistCourses.teacher_name' user-name-class='text-muted' ></profile-name></p>				\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </li>                 \n" +
    "		</ul>\n" +
    "		<div  class=\"text-center\" ng-show=\"_metadata.total_records === 0\"><h3 class=\"text-muted\">{{'No records found'|translate}}</h3></div>\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "		<div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "			<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#wishlist-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/home/home.tpl.html",
    "<section id=\"banner-carousel\" class=\"slide\">\n" +
    "      <!-- Wrapper for slides -->\n" +
    "	    <carousel interval=\"myInterval\" no-wrap=\"noWrapSlides\">\n" +
    "			<slide active=\"active\" >\n" +
    "				<img src=\"assets/img/slide1.png\" alt=\"[Image: {{'Image1'|translate}}]\" title=\"\" class=\"img-responsive center-block\"> </div>\n" +
    "			</slide>\n" +
    "			<slide>\n" +
    "				<img src=\"assets/img/slide2.png\" alt=\"[Image: {{'Image1'|translate}}]\" title=\"\" class=\"img-responsive center-block\"> </div>\n" +
    "			</slide>\n" +
    "			<div class=\"carousel-caption well-lg\">\n" +
    "				<div class=\"well-sm clearfix\"></div>\n" +
    "				<div class=\"well-lg clearfix\">\n" +
    "				  <h2>{{'Become a'|translate}}</h2>\n" +
    "				  <span class=\"h1\">{{'Web Developer'|translate}}</span>\n" +
    "				  <div class=\"clearfix\">\n" +
    "					<div class=\"well-sm hidden-xs hidden-sm hidden-md\"></div>\n" +
    "					<div class=\"well-lg hidden-xs hidden-sm hidden-md\"></div>\n" +
    "					<a class=\"btn btn-warning btn-lg\" href=\"#!/courses/search\">{{'Learn more'|translate}}</a>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "				<div class=\"well-sm hidden-xs hidden-sm clearfix\"></div>\n" +
    "			  </div>\n" +
    "		</carousel>\n" +
    "    </section>\n" +
    "    <div class=\"well-lg\"></div>\n" +
    "    <!--Banner section End-->\n" +
    "    <!--home-main section Start-->\n" +
    "    <!-- End of Course by build section starts -->\n" +
    "    <section>\n" +
    "      <!-- Career advisor section  starts -->\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"col-xs-11 col-xs-offset-1\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"row\">\n" +
    "              <h3 class=\"lead text-primary\"><strong>{{'Learnr Career Advisor'|translate}}</strong></h3>\n" +
    "              <p>{{'Learnr is pleased to announce Career Advisor, a feedback-based support program built to ensure the strength of your employment candidacy. Our commitment to your future doesn\\'t end with your degree, so we also help optimize your resume, audit your online presence, and provide interview training.'|translate}} </p>\n" +
    "			  <a class=\"btn btn-warning navbar-btn\"  href=\"#!/courses/search\">{{'Learn more'|translate}}</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\"> <a href=\"javascript:void(0);\" title=\"{{'Career'|translate}}\"><img class=\"img-responsive center-block\" src=\"assets/img/career.png\" \n" +
    "		  alt=\"[Image: {{'Career Advisor'|translate}}]\" title=\"{{'Career Advisor'|translate}}\"></a> </div>\n" +
    "          <div class=\"well-lg\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"well-sm\"></div>\n" +
    "    </section>\n" +
    "    <!-- Career advisor section  ends -->\n" +
    "    <section>\n" +
    "      <div class=\"jumbotron clearfix\">\n" +
    "        <!-- Developer section -->\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'Front-End Developer'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <span class=\"text-center col-xs-12\"><i class=\"fa fa-html5 fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-success bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'Android Developer'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <span class=\"text-center col-xs-12\"><i class=\"fa fa-android fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-danger bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'Data Analyst'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <span class=\"text-center col-xs-12\"><i class=\"fa fa-building fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "		  </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-warning bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'iOS Developer'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "            <span class=\"text-center col-xs-12\"><i class=\"fa fa-apple fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-primary\">\n" +
    "            <div class=\"row\"><img src=\"assets/img/devloper1.png\" alt=\"[Image: {{'Devloper'|translate}}]\" \n" +
    "				   title=\"{{'Devloper'|translate}}\" class=\"col-xs-12 btn-block\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-info bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'Full Stack Developer'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg hidden-md\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "			<span class=\"text-center col-xs-12\"><i class=\"fa fa-desktop fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "            <div class=\"well-lg hidden-md hidden-sm\"></div>\n" +
    "			<div class=\"well-sm navbar-btn visible-md hidden-sm\"></div>\n" +
    "			<div class=\"navbar-btn clearfix visible-md hidden-sm\"></div>\n" +
    "			<div class=\"navbar-btn visible-sm\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-success bg-primary\">\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <h3 class=\"text-center h4\"><strong>{{'Intro to Programming'|translate}}</strong></h3>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg hidden-md\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "            <span class=\"text-center col-xs-12\"><i class=\"fa fa-code fa-5x\"></i></span>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-lg visible-sm\"></div>\n" +
    "            <div class=\"well-lg hidden-md hidden-sm\"></div>\n" +
    "			<div class=\"well-sm navbar-btn visible-md hidden-sm\"></div>\n" +
    "			<div class=\"navbar-btn clearfix visible-md hidden-sm\"></div>\n" +
    "			<div class=\"navbar-btn visible-sm\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3 col-sm-6 col-xs-12 bg-primary bg-primary\">\n" +
    "            <div class=\"row\"><img src=\"assets/img/devloper2.png\" alt=\"[Image: {{'Devloper2'|translate}}]\" title=\"{{'Devloper2'|translate}}\" class=\"col-xs-12 btn-block\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- End of Developer section -->\n" +
    "    </section>\n" +
    "    <section class=\"well\">\n" +
    "      <!-- Tuition back graduate section  -->\n" +
    "      <div class=\"well-sm\"></div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\"> <span class=\"fa-stack fa-lg fa-3x\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-usd fa-stack-1x fa-inverse\"></i></span>\n" +
    "            <h4><strong>{{'Free Courses'|translate}}</strong></h4>\n" +
    "            <p>{{'Enhance your skillset and boost your hireability through innovative, independent learning.'|translate}}</p>\n" +
    "			<a target=\"_blank\" href=\"#!/courses/search\" title=\"{{'View our courses'|translate}}\"><strong>{{'VIEW OUR COURSES'|translate}}</strong></a></div>	\n" +
    "        </div>\n" +
    "      <div class=\"well-sm\"></div>\n" +
    "    </section>\n" +
    "	<!-- End of tuition back graduate section  -->\n" +
    "    <div class=\"well-sm\"></div>\n" +
    "    <div class=\"section\">\n" +
    "      <!-- learnr employers section -->\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"col-xs-12 text-center\">\n" +
    "          <h2 class=\"text-primary\"><strong>{{$root.settings['site.name']}} {{'for Employers'|translate}}</strong></h2>\n" +
    "          <span class=\"h4\">{{'Ensure your workforce masters the latest tech skills'|translate}}</span>\n" +
    "          <div class=\"well-sm\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"row text-center\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <h4><strong>{{'Level up your team'|translate}}</strong></h4>\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-xs-12\">\n" +
    "                <p class=\"text-muted\"> {{'Employers use'|translate}} {{$root.settings['site.name']}} {{'to train their own employees'|translate}}.</p>\n" +
    "				<div class=\"clearfix navbar-btn\"></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of learnr employers section -->\n" +
    "	<div class=\"well-sm hidden-xs\"></div>\n" +
    "    <div class=\"section\">\n" +
    "      <!-- Popular course class section -->\n" +
    "      <div class=\"container\">\n" +
    "        <hr>\n" +
    "        <div class=\"well-sm hidden-xs\"></div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 text-center\">\n" +
    "            <h2 class=\"text-primary\">{{'Popular Courses'|translate}}</h2>\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "		<home-course filter=\"most_popular\" limit=\"4\"></home-course>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- End of popular course class section -->\n" +
    "	 <div class=\"well-lg hidden-xs\"></div>\n" +
    "    <div class=\"section\">\n" +
    "      <!-- What`s new section start  -->\n" +
    "      <div class=\"container\">\n" +
    "        <hr>\n" +
    "        <div class=\"well-sm hidden-xs\"></div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 text-center\">\n" +
    "            <h2 class=\"text-primary\">{{'What\\'s New'|translate}}</h2>\n" +
    "            <div class=\"well-sm\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <home-course filter=\"new\" limit=\"4\"></home-course>  \n" +
    "      </div>\n" +
    "    </div>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "    <!-- End of what`s new section -->\n" +
    "    <div class=\"well-lg hidden-xs\"></div>\n" +
    "  <!--home-main section End-->");
}]);

angular.module("themes/learnr/views/pages/pages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/pages/pages.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<h2>{{model.page.title}}</h2>\n" +
    "	<p ng-bind-html='model.page.content'></p>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/users/activation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/activation.tpl.html",
    "");
}]);

angular.module("themes/learnr/views/users/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/change_password.tpl.html",
    "<section class=\"container\">\n" +
    "  <h3 class=\"text-primary\"><strong>{{'Create new password'|translate}}</strong></h3>\n" +
    "  <hr class=\"list-group-item-heading navbar-btn\">\n" +
    "  <aside class=\"col-md-3 col-sm-4 col-xs-12\">\n" +
    "	<div class=\"row\">\n" +
    "	  <ul role=\"tablist\" class=\"nav nav-pills nav-stacked\">\n" +
    "		<li role=\"presentation\" class=\"\"><a title=\"{{'My Profile'|translate}}\" aria-controls=\"Contact-Info\" role=\"tab\" href=\"#!/users/edit-profile\">{{'My Profile'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"active\"><a href=\"#!/users/change_password\" title=\"{{'Password'|translate}}\" aria-controls=\"password\" role=\"tab\">{{'Change Password'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a  href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\">{{'Learning'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\" >{{'Wishlist'|translate}}</a></li>\n" +
    "	  </ul>\n" +
    "	</div>\n" +
    "  </aside>\n" +
    "	<div class=\"tab-content\">\n" +
    "		<div class=\"well-sm navbar-btn list-group-item-heading\"></div>\n" +
    "		<div id=\"password\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "			<div class=\"col-md-9 col-sm-8 col-xs-12\">\n" +
    "				<div class=\"clearfix\"></div>\n" +
    "				<form class=\"form-horizontal\" name=\"changePasswordForm\" ng-submit=\"change_password(changePasswordForm.$valid, user);changePasswordForm.$setPristine()\">\n" +
    "				  <div class=\"form-group\" ng-class=\"{ 'has-error' : changePasswordForm.old_password.$invalid && changePasswordForm.old_password.$dirty }\">\n" +
    "					<label for=\"newPassword\" class=\"col-sm-3 control-label\">{{'Current Password'|translate}}</label>\n" +
    "					<div class=\"col-sm-6\">\n" +
    "					  <input type=\"password\" class=\"form-control\" name=\"old_password\" id=\"currentPassword\" ng-model=\"user.old_password\" placeholder=\"{{'Current Password'|translate}}\" required autofocus>\n" +
    "					</div>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.old_password.$dirty\" ng-messages=\"changePasswordForm.old_password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group\" ng-class=\"{ 'has-error' : changePasswordForm.new_password.$invalid && changePasswordForm.new_password.$dirty }\">\n" +
    "					<label for=\"newPassword\" class=\"col-sm-3 control-label\">{{'New Password'|translate}}</label>\n" +
    "					<div class=\"col-sm-6\">\n" +
    "					  <input type=\"password\" class=\"form-control\" id=\"newPassword\" minlength=\"5\" name=\"new_password\" ng-model=\"user.new_password\" placeholder=\"{{'New Password'|translate}}\" required autofocus>\n" +
    "					</div>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.new_password.$dirty\" ng-messages=\"changePasswordForm.new_password.$error\">\n" +
    "					  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "					  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group\" ng-class=\"{ 'has-error' : changePasswordForm.confirm_new_password.$invalid && changePasswordForm.confirm_new_password.$dirty }\">\n" +
    "					<label for=\"confirmedpassword\" class=\"col-sm-3 control-label\">{{'Re-enter New Password'|translate}}</label>\n" +
    "					<div class=\"col-sm-6\">\n" +
    "					  <input id=\"confirmedpassword\" type=\"password\" class=\"form-control\" minlength=\"5\" name=\"confirm_new_password\" ng-model=\"user.confirm_new_password\" data-match=\"user.new_password\" placeholder=\"{{'Re-type New Password'|translate}}\" required>\n" +
    "					</div>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.confirm_new_password.$dirty\" ng-messages=\"changePasswordForm.confirm_new_password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "						  <div ng-message=\"match\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "						</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group\">\n" +
    "					<div class=\"well well-sm clearfix\">\n" +
    "					  <div class=\"pull-right\">\n" +
    "						<button type=\"submit\" class=\"btn btn-lg btn-primary\" ng-disabled=\"changePasswordForm.$invalid || disableButton\">{{'Save'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					  </div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				</form>\n" +
    "			</div>            \n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/users/directives/profileImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/directives/profileImage.tpl.html",
    "<a ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img  animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a>\n" +
    "<a ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a> \n" +
    " <img  ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    " <img  ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> ");
}]);

angular.module("themes/learnr/views/users/directives/profileName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/directives/profileName.tpl.html",
    "<a href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" class=\"{{model.userNameClass}}\" title=\"{{model.userDisplayName}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" >{{model.userDisplayName}}</a>\n" +
    "<span title=\"{{model.userDisplayName}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" > {{model.userDisplayName}}</span>\n" +
    "<p ng-if=\"model.userDesignation === 'yes' && model.userDesignationText && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" class=\"initialism text-muted show navbar-btn\">{{model.userDesignationText}}</p>\n" +
    "");
}]);

angular.module("themes/learnr/views/users/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/forgot_password.tpl.html",
    "<section class=\"clearfix\">\n" +
    "	<div class=\"container\">	\n" +
    "		<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "		<div class=\"panel-body\">\n" +
    "			<h3 class=\"lead text-center text-primary\"><strong>{{'Forgot your password?' | translate}}</strong></h3>\n" +
    "			<hr>\n" +
    "		</div>					\n" +
    "		<div class=\"well-lg panel clearfix\">\n" +
    "			\n" +
    "			<div class=\"alert alert-info\">{{'Please provide the email address. We\\'ll send you an email with new password.' | translate}}</div>\n" +
    "			<form class=\"form-horizontal\" method=\"post\" name=\"forgotPasswordForm\" ng-submit=\"forgot_password(forgotPasswordForm.$valid, user);forgotPasswordForm.$setPristine()\">\n" +
    "				<div class=\"form-group clearfix\" ng-class=\"{ 'has-error' : forgotPasswordForm.email.$invalid && forgotPasswordForm.email.$dirty }\">\n" +
    "					<label class=\"col-md-3 col-sm-3 control-label\" for=\"designation\">{{'Email' | translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control input-lg\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email your email' | translate}}\" required autofocus>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"forgotPasswordForm.email.$dirty\" ng-messages=\"forgotPasswordForm.email.$error\">\n" +
    "							<div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "							<div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"well well-sm clearfix\">\n" +
    "					<div class=\"pull-right\">\n" +
    "						<button type=\"submit\" ng-disabled=\"forgotPasswordForm.$invalid || disableButton\" class=\"btn btn-lg btn-primary\">{{'Send' | translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			    <br/>\n" +
    "			    <p class=\"text-center text-muted\">\n" +
    "					<small>{{'Don\\'t have an account yet?'|translate}} <a ng-href=\"#!/users/signup\" >{{'Sign up'|translate}}</a></small>\n" +
    "			    </p>\n" +
    "			</form>\n" +
    "		</div>  \n" +
    "		<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	</div>	\n" +
    "</section>");
}]);

angular.module("themes/learnr/views/users/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/login.tpl.html",
    "<div class=\"\" ng-class=\"{'container': currentPageType === 'page'}\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"well-lg\"></div>\n" +
    "<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "<div class=\"\" ng-class=\"{'col-lg-6 col-sm-8 col-xs-12 col-lg-offset-3 col-sm-offset-3': currentPageType === 'page' , 'col-lg-10 col-sm-10 col-xs-10 col-lg-offset-1 col-sm-offset-1 col-xs-offset-1': currentPageType === 'modal'}\">\n" +
    "<a data-dismiss=\"modal\" ng-click=\"modalClose($event)\" class=\"modalClose\" ng-if=\"currentPageType === 'modal'\"><i class=\"fa fa-lg fa-times-circle close\"></i></a>\n" +
    "	<h3 class=\"lead text-center text-primary navbar-btn\"><strong>{{'Login to your'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h3>\n" +
    "	<div  class=\"row thumbnail well-lg\">\n" +
    "	  <div class=\"row\">\n" +
    "	    <div class=\"col-md-offset-1 col-md-10\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "			<h3 class=\"lead text-center text-primary navbar-btn\">{{'Login with social accounts'|translate}}</h3>\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "		</div>\n" +
    "		<form class=\"form-horizontal clearfix\" name=\"loginForm\">			\n" +
    "			<div ng-if='!contentInIframe' class=\"col-md-offset-1 col-md-10\">\n" +
    "				<h3 class=\"lead text-center text-primary navbar-btn\">{{'Login with your email'|translate}}</h3>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : loginForm.email.$invalid && loginForm.email.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"email\">{{'Email'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input  class=\"form-control pull-left\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"loginForm.email.$dirty\" ng-messages=\"loginForm.email.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "							  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : loginForm.password.$invalid && loginForm.password.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"password\">{{'Password'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input class=\"form-control pull-left\" type=\"password\" name=\"password\" ng-model=\"user.password\" placeholder=\"{{'Password'|translate}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"loginForm.password.$dirty\" ng-messages=\"loginForm.password.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Password cannot be empty'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<a ng-href=\"#!/users/forgot_password\" title=\"{{'Forgot your password?'|translate}}\"><small>{{'Forgot your password?'|translate}}</small></a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<div class=\"col-sm-5 col-xs-12\">\n" +
    "						<button ng-click=\"loginUser(loginForm.$valid, user);loginForm.$setPristine()\" ng-disabled=\"loginForm.$invalid || disableButton\" class=\"btn btn-block btn-primary\">{{'Sign In'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "		<div class=\"form-group\">\n" +
    "			<div class=\"col-sm-10 col-xs-12 col-sm-offset-1\">\n" +
    "				<p class=\"navbar-btn\"><small>{{'Don\\'t have an account yet?'|translate}}<a href=\"#!/users/signup\">&nbsp;&nbsp;{{'Sign up'|translate}}</a></small></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/users/logout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/logout.tpl.html",
    "");
}]);

angular.module("themes/learnr/views/users/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/signup.tpl.html",
    "<div class=\"container\">\n" +
    "<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6 col-sm-8 col-xs-12 col-lg-offset-3 col-sm-offset-3\">\n" +
    "	<h3 class=\"lead text-center text-primary navbar-btn\"><strong>{{'Sign up to'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h3>\n" +
    "	<div  class=\"row thumbnail well-lg\">\n" +
    "		<div class=\"clearfix row\">\n" +
    "			<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">\n" +
    "					<h3 class=\"lead text-center text-primary\">{{'Choose Subscription Plan'|translate}}</h3>\n" +
    "					<div class=\"well-sm\" ng-repeat=\"subscriptions in model.SubscriptionsList\" ng-class=\"{ 'bg-success' : model.Subscriptions.id === subscriptions.id  }\">\n" +
    "						<div class=\"checkbox\" ng-click=\"model.Subscriptions.id = subscriptions.id;\" >\n" +
    "							<div class=\"form-group\">\n" +
    "								<label for=\"{{subscriptions.name}}\" class=\"h4\" ng-class=\"{ 'text-muted' : model.Subscriptions.id !== subscriptions.id  }\" popover-placement=\"top\" popover-html-unsafe=\"{{subscriptions.description}}\">\n" +
    "									<input type=\"radio\" value=\"{{subscriptions.id}}\" id=\"subscriptions_{{subscriptions.id}}\" name=\"subscriptions_Level\" ng-model=\"model.Subscriptions.id\" >\n" +
    "									{{subscriptions.name}} - <amount-display amount='{{subscriptions.price}}' fraction='0' is-course-price='no'> / {{subscriptions.interval_unit}}\n" +
    "								</label>				\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				<hr>\n" +
    "		    </div>\n" +
    "			<div class=\"col-xs-10 col-xs-offset-1\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "				<h3 class=\"lead text-center text-primary navbar-btn\">{{'Sign up with social accounts'|translate}}</h3>\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "				<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "			</div>\n" +
    "			<form class=\"form-horizontal clearfix\" method=\"post\" name=\"signupForm\">\n" +
    "			<input type=\"hidden\" name=\"subscription_id\" ng-model=\"user.subscription_id\" ng-if=\"subscriptionId && subscriptionPluginenabled\">			\n" +
    "			<div ng-if='!contentInIframe' class=\"col-xs-10 col-xs-offset-1\">\n" +
    "				<h3 class=\"col-xs-12 lead text-center text-primary navbar-btn\">{{'Sign up with your email'|translate}}</h3>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : signupForm.displayname.$invalid && signupForm.displayname.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"displayname\">{{'Name'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input class=\"form-control pull-left\" type=\"text\" name=\"displayname\" ng-model=\"user.displayname\" placeholder=\"{{'Name'|translate}}\" required autofocus>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"signupForm.displayname.$dirty\" ng-messages=\"signupForm.displayname.$error\">\n" +
    "								<div ng-message=\"required\">{{'You must enter your name'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : signupForm.email.$invalid && signupForm.email.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"email\">{{'Email'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input type=\"email\" class=\"form-control pull-left\" id=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"signupForm.email.$dirty\" ng-messages=\"signupForm.email.$error\">\n" +
    "								<div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "								<div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : signupForm.password.$invalid && signupForm.password.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"password\">{{'Password'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input type=\"password\" minlength=\"5\" class=\"form-control pull-left\" name=\"password\" ng-model=\"user.password\" id=\"password\" placeholder=\"{{'password'|translate}}\">\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"signupForm.password.$dirty\" ng-messages=\"signupForm.password.$error\">\n" +
    "								<div ng-message=\"required\">{{'Password is required'|translate}}.</div>\n" +
    "								<div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\" ng-class=\"{ 'has-error' : signupForm.confirmPassword.$invalid && signupForm.confirmPassword.$dirty }\">\n" +
    "					<div class=\"col-sm-10 col-xs-12\">\n" +
    "						<div>\n" +
    "							<label for=\"password\">{{'Confirm Password'|translate}}</label>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "							<input password-match=\"user.password\" type=\"password\" minlength=\"5\" class=\"form-control pull-left\" name=\"confirmPassword\" ng-model=\"user.confirm_password\" id=\"password\" placeholder=\"{{'Confirm Password'|translate}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"signupForm.confirmPassword.$dirty\" ng-messages=\"signupForm.confirmPassword.$error\">\n" +
    "								<div ng-message=\"compareTo\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "								<div ng-message=\"required\">{{'Confirm password is required'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "						<div class=\"col-xs-12\">\n" +
    "							<p class=\"navbar-btn\"><small>{{'By clicking on Sign up, you agree to'|translate}} <a href=\"#!/page/terms\" target=\"_blank\" ng-bind-html=\"'Terms & Conditions'|translate|to_trusted\"></a> {{'and '|translate}}&nbsp;<a href=\"#!/page/privacy-policy\" target=\"_blank\">&nbsp;{{'Privacy Policy'|translate}}</a></small></p>\n" +
    "						</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "						<div class=\"col-sm-5 col-xs-12\">\n" +
    "							<button class=\"btn btn-block btn-primary\" ng-click=\"onSubmitted(user);signupForm.$setPristine();\" ng-disabled=\"signupForm.$invalid || disableButton\" >{{'Sign Up'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "						</div>\n" +
    "				</div>\n" +
    "				</form>\n" +
    "				<p><small>{{'Already have an account?'|translate}} <a href=\"#!/users/login\">{{'Log in now'|translate}}</a></small></p>\n" +
    "			</div>\n" +
    "			\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/users/subscribe_plans.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/subscribe_plans.tpl.html",
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<subscriptions-plans ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"></subscriptions-plans>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/learnr/views/users/user_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/learnr/views/users/user_profile.tpl.html",
    "<section class=\"container\">\n" +
    "  <h3 class=\"text-primary\"><strong>{{'My Profile'|translate}}</strong></h3>\n" +
    "  <hr class=\"list-group-item-heading navbar-btn\">\n" +
    "  <aside class=\"col-md-3 col-sm-4 col-xs-12\">\n" +
    "	<div class=\"row\">\n" +
    "	  <ul role=\"tablist\" class=\"nav nav-pills nav-stacked\">\n" +
    "		<li role=\"presentation\" class=\"active\" ><a title=\"{{'My Profile'|translate}}\"  role=\"tab\" href=\"#!/users/edit-profile\">{{'My Profile'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a href=\"#!/users/change_password\" title=\"{{'Password'|translate}}\" aria-controls=\"password\" role=\"tab\" >{{'Change Password'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" class=\"\"><a  href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\" >{{'Learning'|translate}}</a></li>\n" +
    "		<li role=\"presentation\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\">{{'Wishlist'|translate}}</a></li>\n" +
    "	  </ul>\n" +
    "	</div>\n" +
    "  </aside>\n" +
    "  <div class=\"tab-content\">\n" +
    "	<div class=\"well-sm navbar-btn list-group-item-heading\"></div>\n" +
    "	<div id=\"Contact-Info\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "	  <div class=\"col-md-9 col-sm-8 col-xs-12\">\n" +
    "		<form class=\"form-horizontal\" name=\"editprofile\" ng-submit=\"editProfile()\" >\n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.designation.$invalid && editprofile.designation.$dirty }\">\n" +
    "			<label for=\"designation\" class=\"col-sm-3 col-xs-12 control-label\">{{'Designation'|translate}}</label>\n" +
    "			<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "				<input type=\"text\" class=\"form-control\" name=\"designation\" id=\"designation\" placeholder=\"{{'Designation'|translate}}\" ng-model=\"model.user_profile.designation\" required maxlength=\"60\" autofocus/>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"editprofile.designation.$dirty\" ng-messages=\"editprofile.designation.$error\">\n" +
    "					<div ng-message=\"required\">{{'You must enter your Designation'|translate}}.</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		  <div class=\"form-group has-feedback\"  ng-class=\"{ 'has-error' : editprofile.displayname.$invalid && editprofile.displayname.$dirty }\">\n" +
    "			<label for=\"displayname\" class=\"col-sm-3 col-xs-12 control-label\">{{'Display Name'|translate}}</label>\n" +
    "			<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "			  <input id=\"displayname\" type=\"text\" class=\"form-control\" name=\"displayname\" placeholder=\"{{'Display Name'|translate}}\" ng-model=\"model.user_profile.displayname\" required autofocus/>\n" +
    "			  <div class=\"help-block text-danger\" ng-if=\"editprofile.displayname.$dirty\" ng-messages=\"editprofile.displayname.$error\">\n" +
    "					<div ng-message=\"required\">{{'You must enter your Display Name'|translate}}.</div>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.headline.$invalid && editprofile.headline.$dirty }\">\n" +
    "			<label for=\"headline\" class=\"col-sm-3 col-xs-12 control-label\">{{'Headline'|translate}}</label>\n" +
    "			<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "			  <input id=\"headline\" type=\"text\" name=\"headline\" class=\"form-control\" placeholder=\"{{'Headline'|translate}}\" ng-model=\"model.user_profile.headline\" required autofocus />\n" +
    "			  <div class=\"help-block text-danger\" ng-if=\"editprofile.headline.$dirty\" ng-messages=\"editprofile.headline.$error\">\n" +
    "					<div ng-message=\"required\">{{'You must enter your Headline'|translate}}.</div>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		  </div>		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.biography.$invalid && editprofile.biography.$dirty }\">\n" +
    "			<label class=\"col-sm-3 col-xs-12 control-label\" for=\"biography\">{{'Biography'|translate}}</label>\n" +
    "			<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "				<textarea class=\"form-control\" name=\"biography\" id=\"biography\" placeholder=\"{{'Biography'|translate}}\" ng-model=\"model.user_profile.biography\" required autofocus></textarea>\n" +
    "				 <div class=\"help-block text-danger\" ng-if=\"editprofile.biography.$dirty\" ng-messages=\"editprofile.biography.$error\">\n" +
    "					<div ng-message=\"required\">{{'You must enter your Biography'|translate}}.</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"inputTaskAttachments\">{{'Avatar'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"file\" id=\"inputTaskAttachments\" name=\"attachment\" onchange=\"angular.element(this).scope().uploadFile(this.files)\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		 <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.website.$invalid && editprofile.website.$dirty }\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"website\">{{'Website'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"url\" class=\"form-control\" name=\"website\" id=\"website\" placeholder=\"{{'Website'|translate}}\" ng-model=\"model.user_profile.website\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Enter your website URL start with http:// or https://'|translate}}</span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"editprofile.website.$dirty\" ng-messages=\"editprofile.website.$error\">\n" +
    "						<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.facebook_profile_link.$invalid && editprofile.facebook_profile_link.$dirty }\">\n" +
    "			<label class=\"col-sm-3 col-xs-12 control-label\" for=\"facebook_profile_link\">{{'Facebook profile link'|translate}}</label>\n" +
    "			<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "				<input type=\"url\" class=\"form-control\" name=\"facebook_profile_link\" id=\"facebook_profile_link\" placeholder=\"{{'Facebook profile link'|translate}}\" ng-model=\"model.user_profile.facebook_profile_link\" />\n" +
    "				<span class=\"text-danger help-block\">{{'Enter your facebook URL start with http:// or https://'|translate}}</span>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"editprofile.facebook_profile_link.$dirty\" ng-messages=\"editprofile.facebook_profile_link.$error\">\n" +
    "					<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		 <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.twitter_profile_link.$invalid && editprofile.twitter_profile_link.$dirty }\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"twitter_profile_link\">{{'Twitter profile link'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"url\" class=\"form-control\" name=\"twitter_profile_link\" id=\"twitter_profile_link\" placeholder=\"{{'Twitter profile link'|translate}}\" ng-model=\"model.user_profile.twitter_profile_link\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Enter your twitter URL start with http:// or https://'|translate}}</span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"editprofile.twitter_profile_link.$dirty\" ng-messages=\"editprofile.twitter_profile_link.$error\">\n" +
    "						<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.google_plus_profile_link.$invalid && editprofile.google_plus_profile_link.$dirty }\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"google_plus_profile_link\">{{'Google Plus profile link'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"url\" class=\"form-control\" name=\"google_plus_profile_link\" id=\"google_plus_profile_link\" placeholder=\"{{'Google Plus profile link'|translate}}\" ng-model=\"model.user_profile.google_plus_profile_link\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Enter your google plus URL start with http:// or https://'|translate}}</span>\n" +
    "				    <div class=\"help-block text-danger\" ng-if=\"editprofile.google_plus_profile_link.$dirty\" ng-messages=\"editprofile.google_plus_profile_link.$error\">\n" +
    "						<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.linkedin_profile_link.$invalid && editprofile.linkedin_profile_link.$dirty }\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"linkedin_profile_link\">{{'LinkedIn profile link'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"url\" class=\"form-control\" name=\"linkedin_profile_link\" id=\"linkedin_profile_link\" placeholder=\"{{'LinkedIn profile link'|translate}}\" ng-model=\"model.user_profile.linkedin_profile_link\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Enter your LinkedIn URL start with http:// or https://'|translate}}</span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"editprofile.linkedin_profile_link.$dirty\" ng-messages=\"editprofile.linkedin_profile_link.$error\">\n" +
    "						<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.youtube_profile_link.$invalid && editprofile.youtube_profile_link.$dirty }\">\n" +
    "				<label class=\"col-sm-3 col-xs-12 control-label\" for=\"youtube_profile_link\">{{'Youtube profile link'|translate}}</label>\n" +
    "				<div class=\"col-md-6 col-sm-8 col-xs-12\">\n" +
    "					<input type=\"url\" class=\"form-control\" name=\"youtube_profile_link\" id=\"youtube_profile_link\" placeholder=\"{{'Youtube profile link'|translate}}\" ng-model=\"model.user_profile.youtube_profile_link\" />\n" +
    "					<span class=\"text-danger help-block\">{{'Enter your youtube URL start with http:// or https://'|translate}}</span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"editprofile.youtube_profile_link.$dirty\" ng-messages=\"editprofile.youtube_profile_link.$error\">\n" +
    "						<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		 </div>\n" +
    "		  <div class=\"well well-sm clearfix\">\n" +
    "			<div class=\"pull-right\">\n" +
    "				<label class=\"sr-only\" for=\"user_profile_save\">{{'Save'|translate}}</label>\n" +
    "				<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"user_profile_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "				<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"user_profile_save\" ng-hide=\"!disableSave\">{{' Validating'|translate}} <span><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		</form>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "	<user-profile-seo></user-profile-seo>\n" +
    "</div>");
}]);
