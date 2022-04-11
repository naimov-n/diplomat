export const state = () =>({
    news: [],
    count: 0,
    data: {},
    gallery: []
})

export const getters = {
    news(state) {
        return state.news
    },
    count(state) {
        return state.count
    },
    data(state) {
        return state.data
    },
    gallery(state) {
        return state.gallery
    }
}

export const mutations = {
    setList(state, {refresh, payload}) {
        state.news = refresh ? payload : [...state.news, ...payload]
    },
    setCount(state, payload) {
        state.count = +payload
    },
    setData(state, payload) {
        state.data = payload
    },
    setGallery(state, payload) {
        state.gallery = payload
    }
}

export const actions = {
    async fetch({commit}, params) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/news`,{params});
            // console.log(res);
            const {data, count} = res.data || {}   
            commit('setList', {refresh: true, payload: data})
            commit("setCount", count)
        } catch(e) {
            console.error(e)
        }
    },
    async fetchDetail({commit}, {slug}) {
        try {
            const lang = 'ru';
            let res =  await this.$axios.get(`/${lang}/api/news/view/${slug}`);
            // console.log(res);
            const {data, gallery} = res.data || {}   
            commit('setData', data)
            commit('setGallery', gallery)
        } catch(e) {
            console.error(e)
        }
    }
}