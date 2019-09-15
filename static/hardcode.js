
'tower1'
'unit105'
'react'
'lunch'
export const Chatrooms = [
    {
        name: 'Tower 1',
        members: 'You, Small rat, Kiel Lind, Ha...',
        id: 'tower1'
    },
    {
        name: 'Unit 105',
        members: 'You, Preemptive Herring, Kiel Lind',
        id: 'unit105',
    },
    {
        name: 'React.JS Club',
        members: 'You, dot-com Ibex, Magic El...',
        id: 'react',
    },
    {
        name: 'Cafeteria',
        members: 'You, Kiel Lind, Preemptive Her...',
        id: 'lunch',
    }
]

export const baseUrl = 'https://us-central1-htn-2019-hack-the-loo.cloudfunctions.net/api'
export const chatPostUrl = baseUrl+'/chat/'
export const chatGetUrl = baseUrl+'/chat/'
export const announcePostUrl = baseUrl
export const announceGetUrl = baseUrl

export const xAuthCommon = 'ruben'

console.log(xAuthCommon)