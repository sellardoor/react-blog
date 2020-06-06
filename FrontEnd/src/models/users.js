export default {
    namespace: 'users',

    state: {
        username: '',
        avatar: '',
        loading: true,
        globaLoading: false,
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
        },
        changeGlobaLoading( state, { payload }){
            return {
                ...state,
                globaLoading: payload.load
            }
        }
    }
}