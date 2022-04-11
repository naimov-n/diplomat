export const state = () =>({
    team: []
})

export const getters = {
    team(state) {
        return state.team
    }
}

export const mutations = {
    setList(state, payload) {
        state.team = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/teams`);
            // console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}