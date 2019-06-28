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

export function translate_number(eng_num){
    let fa_num = "";
    for(var c_i in eng_num){
        fa_num = fa_num.concat(String.fromCharCode(eng_num.charCodeAt(c_i) + (1776 - 48)));
    }
    return fa_num;
}