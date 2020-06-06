export default {
    namespace: 'users',

    state: {
        username: '',
        avatar: '',
        loading: true,
    },

    effcts: {

    },

    reducers: {
        initUser(state, { payload }){
            return {
                ...state,
                username: payload.username,
                avatar: payload.avatar,
                loading: false,
            }
        }
    }
}