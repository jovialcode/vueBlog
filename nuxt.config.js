export default {
    head: {
        title: 'christmas-X'
        , meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'make christmas card with components' }
        ]
        , link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
    , srcDir: 'src/'
    //, watch : ['~/**/*']
    , css: [
        '@/static/css/reset.css',
        '@/static/css/font.css'
    ]
    , plugins: [
        'plugins/localStorage',
        'plugins/axios'
    ]
    , modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ]
    , axios: {
        baseURL: process.env.BASE_API_URL || 'http://localhost:8888'
    }
    , dev : process.env.NODE_ENV !== 'production'
    , http: {}
    , build: {
        extend(config, ctx) {}
    }
};
