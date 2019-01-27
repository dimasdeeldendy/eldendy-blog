    jQuery(document).ready(function($) {
        $( & quot;.boner & quot;).hide();
        $( & quot; ul.wrap - tabs li: first a & quot;).addClass( & quot; tabs - current & quot;).show();
        $( & quot;.boner: first & quot;).show();
        $( & quot; ul.wrap - tabs li a & quot;).click(function() {
            $( & quot; ul.wrap - tabs li a & quot;).removeClass( & quot; tabs - current a & quot;);
            $(this).addClass( & quot; tabs - current & quot;);
            $( & quot;.boner & quot;).hide();
            var activeTab = $(this).attr( & quot; href & quot;);
            $(activeTab).fadeIn();
            return false;
        });
    });
