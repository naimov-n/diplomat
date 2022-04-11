export const state = () =>({
    social: []
})

export const getters = {
    social(state) {
        return state.social
    }
}

export const mutations = {
    setList(state, payload) {
        state.social = payload
    }
}

export const actions = {
    async fetchSocial({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/social`);
            // console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}