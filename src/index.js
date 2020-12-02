/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';
import html from './html.js'
import store from './store.js'

function render() {
    console.log('Starting file');
    $('body').html(html.createHTML);
    $('.creation').html(html.createAddBookmark);
    $('.saved').html(html.createFilter);
    $('.savedBookmarks').html(html.createCollapsedView);
}


function main() {
    render();
    store.getInput();
}

$(main);