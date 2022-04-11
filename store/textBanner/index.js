export const state = () =>({  
    textBanner: {}

})

export const getters = {    
    textBanner(state) {
        return state.textBanner
    }, 
}

export const mutations = {    
    setContacts(state, payload) {
        state.textBanner = payload
    },   
}

export const actions = {
    async textBanner({commit}, {params}) {
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