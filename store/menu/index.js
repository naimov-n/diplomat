export const state = () =>({
    list: []
})

export const getters = {
    list(state) {
        return state.list
    }
}

export const mutations = {
    setList(state, payload) {
        state.list = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/menu`);
            // console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}