export const state = () =>({
    partners: [],
    data: {},
    gallery: []
})

export const getters = {
    partners(state) {
        return state.partners
    },
    data(state) {
        return state.data
    },
    gallery(state) {
        return state.gallery
    }
}

export const mutations = {
    setList(state, payload) {
        state.partners = payload
    },
    setData(state, payload) {
        state.data = payload
    },
    setGallery(state, payload) {
        state.gallery = payload
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/partners`);
            console.log(res);
            const {data} = res.data || {}
            commit('setList', data)
        } catch(e) {
            console.error(e)
        }
    },
    async fetchDetail({commit}, {slug}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/partners/view/${slug}`);
            console.log(res);
            const {data, gallery} = res.data || {}
            commit('setData', data)
            commit('setGallery', gallery)
        } catch(e) {
            console.error(e)
        }
    }
}