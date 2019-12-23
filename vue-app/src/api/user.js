
import { SunApi } from '@/const'

import request from '@/utils/request'


export function apiImgCode(query) {
  return request({
    url: `${SunApi}/user/imgCode`,
    method: 'get',
    params: query,
  });
}

export function apiImgCodeV(query) {
  return request({
    url: `${SunApi}/user/imgCodeV`,
    method: 'get',
    params: query,
  });
}