export const state = () =>({
    static: [],
    gallery: []
})

export const getters = {
    static(state) {
        return state.static
    },
    gallery(state) {
        return state.gallery
    }
}

export const mutations = {
    setList(state, payload) {
        state.static = payload
    },
    setGallery(state, payload) {
        state.gallery = payload
    }
}

export const actions = {
    async fetch({ commit }, { slug }) {
        try {
            const lang = 'ru';
            let res = await this.$axios.get(`/${lang}/api/menu/view/${slug}`);
            // console.log(res);
            const { data, gallery } = res.data || {}
            commit('setList', data)
            commit('setGallery', gallery)
        } catch (e) {
            console.error(e)
        }
    },
}