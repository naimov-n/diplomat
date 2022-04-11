export const actions = {
    async apply(_, paylaod) {
        try {
            let f = new FormData()
            Object.keys(paylaod).forEach(key => {
                f.append(key, paylaod[key])
            })
            await this.$axios.post("/api/apply", f)
        } catch(err) {
            console.error(err)
        }
    }
}