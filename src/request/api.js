/**
 * api接口统一管理
 */
import { get, post } from './http'
// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
// export const apiAddress = q => post('../../static/content.json',q);
export const apiAdd = q => get('/query',q);
// export const apiAdd = q => get('../../static/content.json',q);
export const apiAddress = q => post('/upload',q);
export const apiWebChat = q => post('/talk.do',q);