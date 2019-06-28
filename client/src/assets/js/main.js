import $ from 'jquery'
import {translate_food, translate_number} from "./tools";

$(document).ready(function() {
    $.get('http://demo2469824.mockable.io/best-restaurants', function (data, status) {
        if (status === 'success') {
            const GREAT_REST_NUM = 3;
            var best_rests = data.restaurants;
            var rest_section_element = $('.good-tehran-rest-section');
            for (var i = 0; i < GREAT_REST_NUM; i++) {
                $('.best-restaurants').append(get_restaurant_big_element(best_rests[i].name, best_rests[i].imgUrl,
                    best_rests[i].address, best_rests[i].foods, best_rests[i].rate, best_rests[i].numOfRates))
            }
            for (i = GREAT_REST_NUM; i < best_rests.length; i++) {
                if (i % 4 === GREAT_REST_NUM) {
                    rest_section_element.append("<div class=\"good-tehran-row\"></div>");
                }
                $('.good-tehran-rest-section>div').last().append(get_restaurant_small_element(best_rests[i].name,
                    best_rests[i].imgUrl))
            }
        }
    });
    $.get('http://demo2469824.mockable.io/foods', function (data, status) {
        if (status === 'success') {
            const BEST_FOOD_TYPE_NUM = 4;
            let top_foods_div_element = $('.food-type-show-outer');
            let small_foods_div_element = $('.more-food-items');
            let food_xml = data.getElementsByTagName('food');
            let food_html_collection = null;
            for (let i = 0; i < BEST_FOOD_TYPE_NUM; i++) {
                food_html_collection = food_xml[i];
                let title = food_html_collection.getElementsByTagName('name').item(0).innerHTML;
                let count = food_html_collection.getElementsByTagName('count').item(0).innerHTML;
                let img_url = food_html_collection.getElementsByTagName('imgUrl').item(0).innerHTML;
                top_foods_div_element.append(get_food_type_big_element(title, count, img_url))
            }
            for (let i = BEST_FOOD_TYPE_NUM; i < food_xml.length; i++) {
                food_html_collection = food_xml[i];
                let title = food_html_collection.getElementsByTagName('name').item(0).innerHTML;
                small_foods_div_element.append(get_food_type_small_element(title))
            }
        }
    });
});

function get_restaurant_small_element(name, img_url){
    return "               <a href=\"#\">\n" +
        "                    <div class=\"good-tehran-item\">\n" +
        "                        <img src=" + img_url +" />\n" +
        "                        <p>" + name +"</p>\n" +
        "                    </div>\n" +
        "                </a>"
}

function get_restaurant_big_element(name, img_Url, address, foods, rate, num_of_rates) {
    let stars_element = '';
    for(var i = 0; i < Math.floor(rate); i++){
        stars_element = stars_element.concat("<i class=\"fa fa-star full-star\"></i>")
    }
    if(Math.floor(rate) !== rate){
        stars_element = stars_element.concat("<i class=\"fa fa-star half-star\"></i>")
    }
    for(i = Math.ceil(rate); i < 5; i++){
        stars_element = stars_element.concat("<i class=\"fa fa-star dark-star\"></i>")
    }
    let foods_element = '';
    for(var f_i in foods){
        let food = translate_food(foods[f_i]);
        foods_element = foods_element.concat('<li>' + food + '</li>')
    }
    return "<a href=\"#\">\n" +
        "                <div class=\"restaurant-big-item\">\n" +
        "                    <img src=" + img_Url +" />\n" +
        "                    <p class=\"restaurant-item-name\">" + name + "</p>\n" +
        "                    <div class=\"res-score lines-around\">\n" +
        "                        <span class=\"score-number\">" + rate + "</span>\n" +
        "                        <div class=\"score-stars\">\n" + stars_element +
        "                        </div>\n" +
        "                        <span class=\"number-of-comments\">(" + num_of_rates + ")</span>\n" +
        "                    </div>\n" +
        "                    <ul class=\"res-food-types\">\n" + foods_element +
        "                    </ul>\n" +
        "                    <p class=\"res-shady-address\" title=" + address + ">\n" + address +
        "                    </p>\n" +
        "                    <button class=\"start-order-btn\">شروع سفارش</button>\n" +
        "                </div>\n" +
        "            </a>"
}

function get_food_type_big_element(title, count, img_url){
    title = translate_food(title);
    var element= $("<a href=\"#\">\n" +
        "                <div class=\"food-type-show-inner\">\n" +
        "                    <div class=\"food-type-show-inner-shade\">\n" +
        "                        <h2>" + title + "</h2>\n" +
        "                        <p>رستوران فعال " + translate_number(count) + "</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </a>");

    element.children('div').css({
        "background": "url(" + img_url + ") no-repeat 0 0",
        "background-size": "cover"
    });
    return element
}

function get_food_type_small_element(title){
    title = translate_food(title);
    return "<a href=\"#\"><div>" + title + "</div></a>"
}

