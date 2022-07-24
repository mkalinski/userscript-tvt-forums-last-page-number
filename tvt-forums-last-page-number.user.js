// ==UserScript==
// @name        tvt-forums-last-page-number
// @namespace   https://github.com/mkalinski
// @version     1.0.0
// @description Display the number of the last thread page on the "go to last page" button
// @match       https://tvtropes.org/pmwiki/posts.php
// @grant       none
// @run-at      document-end
// @inject-into auto
// @noframes
// @homepageURL https://github.com/mkalinski/userscript-tvt-forums-last-page-number
// ==/UserScript==
(() => {
    'use strict';

    document.querySelectorAll('nav.pagination-box').forEach((pagBox) => {
        const lastA = pagBox.querySelector(':scope > a:last-child');

        // The last page button has "»", but it's not text,
        // it's derived from a class.
        // On the last page, this is absent,
        // and then we want to skip inserting the text
        if (lastA?.querySelector(':scope > i.fa-angle-double-right')) {
            const lastPageNum = (new URL(lastA.href)).searchParams.get('page');

            if (lastPageNum) {
                lastA.append(lastPageNum);
            }
        }
    });
})();
