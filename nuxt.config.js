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
    , css: [
        '@/static/css/reset.css',
        '@/static/css/font.css'
    ]
    , plugins: [

    ]
    , modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ]
    , axios: {
        proxy: true
    }
    , proxy: {
        '/api/': { target: 'localhost:8080', pathRewrite: {'^/api/': ''}, changeOrigin: true }
    }
    , http: {}
    , build: {
        extend(config, ctx) {}
    }
};
