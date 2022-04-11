export const state = () =>({
    members: []
})

export const getters = {
    members(state) {
        return state.members
    }
}

export const mutations = {
    setList(state, payload) {
        state.members = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/members`);
            console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}