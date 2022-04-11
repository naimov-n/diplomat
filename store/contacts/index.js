export const state = () => ({
    content: [],
    contacts: {}
})

export const getters = {
    content(state) {
        return state.content
    },
    contacts(state) {
        return state.contacts
    },
}

export const mutations = {
    setContent(state, payload) {
        state.content = payload
    },
    setContacts(state, payload) {
        state.contacts = payload
    },
}

export const actions = {
    async fetchContacts({ commit }, { params }) {
        try {
            const lang = 'ru';
            let res = await this.$axios.get(`/${lang}/api/pages/index`, { params });
            // console.log(res);
            const { data } = res.data || {}
            commit('setContacts', data)
        } catch (e) {
            console.error(e)
        }
    },
    async fetchContent({ commit }, { params }) {
        try {
            const lang = 'ru';
            let res = await this.$axios.get(`/${lang}/api/pages/index`, { params });
            // console.log(res);
            const { data } = res.data || {}
            commit('setContent', data)
        } catch (e) {
            console.error(e)
        }
    },
}