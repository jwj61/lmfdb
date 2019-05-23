

function highlight_group(evt) {
    var subseries = $(this).attr("data-sgseries");
    var subid = $(this).attr("data-sgid");
    if (subseries == null) {
        $(`span[data-sgid=${subid}]`).addClass("activesubgp");
    } else {
        $(`span[data-sgseries=${subseries}]`).addClass("activesubgp");
        subids = subseries.split("-");
        for (i = 0; i < subids.length; i++) {
            sid = subids[i];
            $(`span[data-sgid=${sid}]`).not('.series').addClass("activesubgp");
        }
    }
}

function unhighlight_group(evt) {
    var subseries = $(this).attr("data-sgseries");
    var subid = $(this).attr("data-sgid");
    if (subseries == null) {
        $(`span[data-sgid=${subid}]`).removeClass("activesubgp");
    } else {
        $(`span[data-sgseries=${subseries}]`).removeClass("activesubgp");
        subids = subseries.split("-");
        for (i = 0; i < subids.length; i++) {
            sid = subids[i];
            $(`span[data-sgid=${sid}]`).not('.series').removeClass("activesubgp");
        }
    }
}