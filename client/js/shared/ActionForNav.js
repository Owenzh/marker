import $ from 'jquery';
import { createHashHistory } from "history";

const history = createHashHistory();

export function registerLocationChangeListener() {
    history.listen((location) => {
        const resetNavHighLight = (pathname) => {
            if (pathname.indexOf('category') != -1) {
                //set category selected and unselected
                let pathstr = pathname.split('/')[2];
                $(`ul.sidebar a`).removeClass('nav_selected');
                $(`ul.sidebar a[href*=${pathstr}]`).addClass('nav_selected');
            } else {
                // set home page
                $(`ul.sidebar a[href*=category]`).removeClass('nav_selected');
            }
        };
        resetNavHighLight(location.pathname);
    });
}

export function goToPath(prod_path,url) {
    // warning: hash history can not set state. so can use location.search implement.
    if (url.indexOf('hot') != -1) {
        let needSearch = null;
        needSearch = '?hot';
        history.push(prod_path + needSearch);
    } else {
        history.push(prod_path);
    }
}

export function setNavHighLight(type) {
    //set the type of product sidebar highlight, but if hot category will be going to real type, it should keep hot here I think.
    $(`ul.sidebar a[href$=${type}]`).addClass('nav_selected');
}