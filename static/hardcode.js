export const Chatrooms = [
    {
        name: 'Hack The Loo',
        members: 'You, Ruben, Hansa, Thanh',
        id: 'htl6969'
    },
    {
        name: 'Unit 207',
        members: 'You, Ruben, Hansa, Thanh, Jack Dors...',
        id: 'unit207',
    },
    {
        name: 'SLC Construction Team',
        members: 'You, Feridun H., Mr. Goose',
        id: 'feridun',
    },
    {
        name: 'This Was Built Using React.',
        members: 'please give us an oculus',
        id: 'thanh-af',
    }
]

export const baseUrl = 'https://us-central1-htn-2019-hack-the-loo.cloudfunctions.net/api'
export const chatPostUrl = baseUrl+'/chat/'
export const chatGetUrl = baseUrl+'/chat/'
export const announcePostUrl = baseUrl
export const announceGetUrl = baseUrl

export const xAuthCommon = [
    'ZoiIcdqWy8tlqBobFRNu',
    'rlNWxr7up19U1d2rVamS',
    'ioBveTO5b2B1kd9XUoU0',
    'ifg2NH7h8yhpD2U3UNyL'
][Math.floor(Math.random()*4)]

console.log(xAuthCommon)