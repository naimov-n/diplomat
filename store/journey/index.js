export const state = () =>({
    journey1: {},
    journey2: {}

})

export const getters = {      
    journey1(state) {
        return state.journey1
    }, 
    journey2(state) {
        return state.journey2
    },
}

export const mutations = {     
    setContacts1(state, payload) {
        state.journey1 = payload
    },   
    setContacts2(state, payload) {
        state.journey2 = payload
    }, 
}

export const actions = {
    async fetchJourney1({commit}, {params}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/pages/index`,{params});
            // console.log(res);
            const {data} = res.data || {}   
            commit('setContacts1', data)            
        } catch(e) {
            console.error(e)
        }
    }, 
    async fetchJourney2({commit}, {params}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/pages/index`,{params});
            // console.log(res);
            const {data} = res.data || {}   
            commit('setContacts2', data)            
        } catch(e) {
            console.error(e)
        }
    }, 
}