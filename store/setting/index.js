export const state = () =>({
    bannerText: {}

})

export const getters = {
    bannerText(state) {
        return state.bannerText
    }, 

}

export const mutations = { 
    setBanner(state, payload) {
        state.bannerText = payload
    },  
}

export const actions = {

    async fetchBanner({commit}, {params}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/pages/index`,params);
            // console.log(res);
            const {data} = res.data || {}   
            commit('setBanner', data)            
        } catch(e) {
            console.error(e)
        }
    },
}