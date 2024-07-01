// Modules js
var MODULES = {
    LIBS: {
        /* TABLE MODUL */
        'table.gm-table': function () {
            $('table.gm-table').each(function (i, e) {
                var e2Height;

                $(e).find('thead').each(function (index, thead) {
                    $(thead).find('> tr > td').each(function (eq, e2) {
                        if ($(e2).hasClass('high-light')) {
                            $(e).find('tbody:eq(' + index + ') > tr').each(function (index, element) {
                                $(element).find('> td:eq(' + eq + ')').addClass('high-light');
                            });
                        }
                    });
                });

                $(e).find('tr.high-light td').each(function (i2, e2) {
                    $(e2).addClass('high-light');
                });

                e2Height = $(e).find('td.high-light').height();

                $(e).find('td.high-light').each(function (i2, e2) {
                    text = $(e2).html()
                    $(e2).html($('<div class="high-light" />').css('height', e2Height).html(text));
                });

                $(e).find('td.high-light[rowspan]').each(function (i2, e2) {
                    $(e2).find('> div.high-light').css({
                        'height': $(e2).height(),
                        'vertical-align': $(e2).css('vertical-align')
                    });
                });

                var iev = (function () {
                    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
                    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                        all[0])
                        ;
                    return v > 4 ? v : undef;
                }());
                if (iev < 9) {
                    $('html').addClass('lt-ie9');
                }
            });
        }
    },
    INIT: function () {
        for (i in MODULES.LIBS) {
            if ($(i).length > 0) {
                MODULES.LIBS[i].call();
            }
        }
    }
}
$(document).ready(MODULES.INIT);