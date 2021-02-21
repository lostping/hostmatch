$(document).ready(function() {
    // listen to keyup, blur and focus event on the username field
    $('#rcmloginuser').bind('keyup blur focus', function() {
        // read the entered email adress from form field
        var TheNeedle   =   $('#rcmloginuser').val();
        // define how an email adress shoud be split into pieces in a regular expression
        // this regex should split i. e. yourmail.alias@maildomain.org into four named groups:
        // 1. yourmail.alias > alias
        // 2. @ > at
        // 3. maildomain > domain
        // 4. org > subdomain
        var TheRegex    =   /(?<alias>[a-zA-Z0-9_\-\.]+)(?<at>@)(?<domain>(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+)+))(?<subdomain>\.[a-zA-Z]{2,4}|[0-9]{1,3})/i;
        // loop through the host/server dropdown elements
        $("#rcmloginhost").each(function () {
            $('option', this).each(function () {
                // execute the regular expression: lets split the entered email adress into pieces
                var TheMatches = TheNeedle.match(TheRegex);
                // if there is any match do the checks, else do nothing
                if(TheMatches){
                    // we check if the domain of the entered email address is included in the host list value or text
                    var hostlistValue = $(this).val().toLowerCase().includes(TheMatches.groups.domain.toLowerCase())
                    var hostlistText = $(this).text().toLowerCase().includes(TheMatches.groups.domain.toLowerCase())
                    if(hostlistValue || hostlistText){
                        // if match set selected attribute for the matching option
                        $(this).attr('selected', 'selected');
                    } else {
                        // otherwise remove selected attribute
                      $(this).removeAttr('selected');
                    }
                }
            });
         });
    });
});
