export const state = () =>({  
    contactUs: {}

})

export const getters = {    
    contactUs(state) {
        return state.contactUs
    }, 
}

export const mutations = {    
    setContacts(state, payload) {
        state.contactUs = payload
    },   
}

export const actions = {
    async fetchContacts({commit}, {params}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/pages/index`,{params});
            // console.log(res);
            const {data} = res.data || {}   
            commit('setContacts', data)            
        } catch(e) { 
            console.error(e)
        }
    },   
}