export const state = () =>({
    clubs: []
})

export const getters = {
    clubs(state) {
        return state.clubs
    }
}

export const mutations = {
    setList(state, payload) {
        state.clubs = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/clubs`);
            // console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}