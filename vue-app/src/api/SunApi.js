
import { SunApi } from '@/const'

import request from '@/utils/request'

// 根据手机号获取党员信息
export function api_party_member_person(query) {
  return request({
    url: `${SunApi}/party_member/person`,
    method: 'get',
    params: query,
  });
}

// 用户反馈
export function api_party_member_feedback(query) {
  return request({
    url: `${SunApi}/party_member/feedback`,
    method: 'get',
    params: query,
  });
}

// 修改或新增
export function api_party_member_modifyOrAdd(query) {
  return request({
    url: `${SunApi}/party_member/modifyOrAdd`,
    method: 'get',
    params: query,
  });
}
