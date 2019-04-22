/*
 * XXXX
 */

import Cookies from 'js-cookie';
import { COOKIE_EXPIRES } from '@/config'; // cookieXXXXX

/**
 * @msg: XXtoken
 * @param {string} key
 * @param {string} value
 */
export const setToken = (key: string, value: string) => {
    Cookies.set(key, value, { expires: COOKIE_EXPIRES || 1 });
};

/**
 * @param {string} key
 */
export const getToken = (key: string) => {
    const value = Cookies.get(key);
    if (value) {
        return value;
    } else {
        return undefined;
    }
};

/**
 * @param {String} url
 * @description XURLXXXXX
 */
export const getParams = (url: string) => {
    const keyValueArr = url.split('?')[1].split('&');
    let paramObj: any = {};
    keyValueArr.forEach((item) => {
        const keyValue = item.split('=');
        paramObj[keyValue[0]] = keyValue[1];
    });
    return paramObj;
};

/**
 * XXXXXXXXXXkey
 * @param  {any} obj
 * @param  {string|number} key
 */
export const hasKey = (obj: any, key: string | number) => {
    if (key) {
        return key in obj;
    } else {
        const keysArr = Object.keys(obj);
        return keysArr.length;
    }
};

/**
 * @msg: XXXXXXXX
 * @param {string} date XX
 * @param {string} fmt XXXX
 * @return: string
 */
export const formatDate = (date: any, fmt: string) => {
    let time = '';
    const o: any = {
        'M+': date.getMonth() + 1, // XX
        'd+': date.getDate(), // X
        'H+': date.getHours(), // XX
        'm+': date.getMinutes(), // X
        's+': date.getSeconds(), // X
        'q+': Math.floor((date.getMonth() + 3) / 3), // XX
        S: date.getMilliseconds() // XX
    };
    if (/(y+)/.test(fmt)) {
        time = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            time = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length)
            );
        }
    }
    return time;
};

/**
 * XXXXXXXXX
 * @param phone XXX
 */
export const verifyPhone = (phone: string | number) => {
    const reg = /^1[34578][0-9]{9}$/;
    const _phone = phone.toString().trim();
    let toastStr = _phone === '' ? 'XXXXXXX~' : !reg.test(_phone) && 'XXXXXXXX~';
    return {
        errMsg: toastStr,
        done: !toastStr,
        value: _phone
    };
};

/**
 * @param  {any} obj
 */
export function objClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}
