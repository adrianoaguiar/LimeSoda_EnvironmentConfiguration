document.observe("dom:loaded", function() {
    
    var getCookie = function(name) {
        if (typeof WindowUtilities != 'undefined') {
            return WindowUtilities.getCookie(name);
        }
        if (typeof Mage != 'undefined' && typeof Mage.Cookies != 'undefined') {
            return Mage.Cookies.get(name);
        }
    }; 
    
	try {
		var environment_name = getCookie('limesoda_environment');

		var limesoda_environment_notice = document.createElement('div');
		limesoda_environment_notice.className = 'limesoda_admin_environment_notice';

        var style = '';
        var background_color = '';
        var color = '';
        if (background_color = getCookie('limesoda_environment_background_color')) {
            limesoda_environment_notice.style.backgroundColor = background_color;
        }
        if (color = getCookie('limesoda_environment_color')) {
            limesoda_environment_notice.style.color = color;
        }

		limesoda_environment_notice.innerHTML = '<span class="limesoda_environment_notice_heading">ENV: </span>' + environment_name;

		var admin_header = document.getElementsByClassName('header')[0];
        if (!admin_header) {
            admin_header = document.getElementsByClassName('wrapper')[0];
        }
        
		admin_header.parentNode.insertBefore(limesoda_environment_notice, admin_header);

	} catch(err) {
		console.log(err);
	}
});

