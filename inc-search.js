(function() {
    var inp = $("input");
    var results = $("#results");
    var xhr;

    inp.on("input", function(e) {
        console.log(e);
        if (xhr) {
            xhr.abort();
        }
        makeReq(inp.val());

        var val = inp.val();
        if (val == "") {
            results.empty().hide();
            return;
        }
        results.show();
    });

    var matches = [];
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
            matches.push(countries[i]);
            if (matches.length >= 4) {
                break;
            }
        }
    }
    if (matches.length == 0) {
        results.html("no results");
    } else {
        var html = "";
        for (var i = 0; i < matches.length; i++) {
            html = html + "<div>" + matches[i] + "</div>";
        }
        console.log(html);
        results.html(html);
    }

    function makeReq(inputFromUser) {
        xhr = $.ajax({
            url: "https://flame-egg.glitch.me/",
            data: {
                q: inputFromUser
            },
            success: function(response) {
                if (response.length == 0) {
                    results.html("no results");
                } else {
                    var html = "";
                    for (var i = 0; i < response.length; i++) {
                        html = html + "<div>" + response[i] + "</div>";
                    }
                    console.log(html);
                    results.html(html);
                }
            }
        });
    }
})();
