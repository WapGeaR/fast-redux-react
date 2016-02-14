import request from 'axios';
import config from '../../../package.json';

export const SET_TITLE = 'Sites/SET_TITLE';

export function setTitle(title) {
    return {
        type: SET_TITLE,
        value: title
    }
}

// export function createNewSite(user, site) {
//   return {
//     type: CREATE_NEW_SITE,
//     promise: request.post(`http://${config.apiHost}:${config.apiPort}/api/users/${user.userId}/sites?access_token=${user.token}`,
//       {
//         title: site.name,
//         sitetypeId: site.sitetypeId
//       }
//     )
//   },
//   {
//     type: GET_SITES_LIST,
//     promise: request.get(`http://${config.apiHost}:${config.apiPort}/api/users/${user.userId}/sites?access_token=${user.token}`)
//   }
// }

// export function getSitesList(user) {
//     return {
//         type: GET_SITES_LIST,
//         promise: request.get(`http://${config.apiHost}:${config.apiPort}/api/users/${user.userId}/sites?access_token=${user.token}`)
//     };
// }
