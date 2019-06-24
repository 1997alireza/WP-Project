import React, {Fragment} from 'react';

export default () => {
    return (
        <div className="search-bar-div">

            <datalist id="area_suggestions">
                <option value="Fara" />
                <option value="Mird" />
            </datalist>

            <div className="dropdown-menu">
                <i className="fas fa-angle-down"></i>
                <select className="cursor-pointer">
                    <option value="default" disabled selected>شهر</option>
                    <option value="تهران">تهران</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="تبریز">تبریز</option>
                </select>
            </div>
            <fieldset className="region-getter">
                <legend>منطقه خود را وارد کنید</legend>
                <div className="region-getter-typable">
                    <i className="fas fa-map-marker-alt"></i>
                    <input className="cursor-pointer" type="text" list="area_suggestions" placeholder="مثلا نیاوران" />
                    {/*<select className="cursor-pointer">*/}
                        {/*<option value="default" disabled selected>مثلا نیاوران</option>*/}
                        {/*<option value="چیتگر" disabled selected>چیتگر</option>*/}
                        {/*<option value="تجریش" disabled selected>تجریش</option>*/}
                    {/*</select>*/}
                </div>
                <div className="search-icon-div cursor-pointer">
                    <i className="fas fa-search"></i>
                </div>
            </fieldset>
        </div>
    );
}