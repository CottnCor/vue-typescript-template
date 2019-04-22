import Request from '@/utils/request';

const request = new Request();

/**
 * @param  {any} param?
 */
export const getNoticeOverview = (param?: any) => {
  return request.get('notice-overview-item.json', param);
};

