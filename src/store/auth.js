export const AUTH_MUTATIONS = {
    SET_USER: 'SET_USER'
    , SET_PAYLOAD: 'SET_PAYLOAD'
    , LOGOUT: 'LOGOUT'
};

export const state = () => ({
    accessToken : null
    , refreshToken : null
    , id : null
    , email : null
});

export const mutations = {
    [AUTH_MUTATIONS.SET_USER] (state, { id, email }) {
        state.id = id;
        state.email = email;
    }
    , [AUTH_MUTATIONS.SET_PAYLOAD] (state, { accessToken, refreshToken = null }) {
        state.accessToken = accessToken;

        if (refreshToken) {
            state.refreshToken = refreshToken
        }
    }
    , [AUTH_MUTATIONS.LOGOUT] (state) {
        state.id = null;
        state.email = null;
        state.accessToken = null;
        state.refreshToken = null;
    }
};

export const actions = {
    async login ({commit, dispatch}, {email, password}) {
        const res = await this.$axios.post(
            'api/auth/signin',
            {email, password}
        );

        const data = res.data;

        commit(AUTH_MUTATIONS.SET_USER, data.user);
        commit(AUTH_MUTATIONS.SET_PAYLOAD, {accessToken : data.token});
    },

    async register ({ commit }, { email, password }) {
        const { data: { data: { user, payload } } } = await this.$axios.post(
            '/api/auth/register',
            { email, password }
        );

        commit(AUTH_MUTATIONS.SET_USER, user);
        commit(AUTH_MUTATIONS.SET_PAYLOAD, payload);
    },

    async refresh ({ commit, state }) {
        const { refreshToken } = state

        const { data: { data: { payload } } } = await this.$axios.post(
            '/api/auth/refresh',
            { refreshToken }
        );

        commit(AUTH_MUTATIONS.SET_PAYLOAD, payload);
    },

    logout ({ commit, state }) {
        commit(AUTH_MUTATIONS.LOGOUT);
    },
};

export const getters = {
    isAuthenticated: (state) => {
        return state.accessToken && state.accessToken !== ''
    }
};