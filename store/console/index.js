export const state = () =>({
    console: []
})

export const getters = {
    console(state) {
        return state.console
    }
}

export const mutations = {
    setList(state, payload) {
        state.console = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/console`);
            // console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    }
}