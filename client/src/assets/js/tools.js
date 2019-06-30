export function translate_food(eng_food){
    const dict = {
        'pizza': 'پیتزا',
        'sandwich': 'ساندویچ',
        'burger': 'برگر',
        'kebab': 'کباب',
        'fastfood': 'فست‌فود',
        'salad': 'سالاد',
        'iranian': 'ایرانی',
        'pasta': 'پاستا',
        'fish': 'غذای دریایی',
        'breakfast': 'صبحانه',
        'juice': 'آبمیوه طبیعی',
        'steak': 'استیک',
        'soup': 'سوپ'
    };
    if(eng_food in dict) return dict[eng_food];
    return eng_food
}

const city_dict_en2fa = {
    'tehran': 'تهران',
    'esfahan': 'اصفهان',
    'tabriz': 'تبریز'
};
let city_dict_fa2en = {};
for(let key in city_dict_en2fa){
    city_dict_fa2en[city_dict_en2fa[key]] = key;
}

export function city_to_eng(city_fa){
    if(city_fa in city_dict_fa2en) return city_dict_fa2en[city_fa];
    return city_fa
}

export function city_to_fa(city_en){
    city_en = city_en.toLowerCase();
    if(city_en in city_dict_en2fa) return city_dict_en2fa[city_en];
    return city_en
}

export function translate_number(eng_num){
    let fa_num = "";
    for(var c_i in eng_num){
        fa_num = fa_num.concat(String.fromCharCode(eng_num.charCodeAt(c_i) + (1776 - 48)));
    }
    return fa_num;
}