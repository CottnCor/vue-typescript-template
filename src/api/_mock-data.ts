import Request from '@/utils/request';

const request = new Request();

/**
 * @param  {any} param?
 */
export const getHeaderMenu = (param?: any) => {
    return request.get('header-nav-item.json', param);
};

/**
 * @param  {any} param?
 */
export const getFooterMenu = (param?: any) => {
    return request.get('footer-nav-item.json', param);
};

/**
 * @param  {any} param?
 */
export const getUserMenu = (param?: any) => {
  return request.get('user-nav-item.json', param);
};

/**
 * @param  {any} param?
 */
export const getLawWorks = (param?: any) => {
    return request.get('law-works.json', param);
};
