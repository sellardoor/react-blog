export const routes = [
    { path: '/login', component: '@/pages/Login/index' },
    { path: '/', component: '@/layout/index', wrappers: [
            '@/wrappers'
        ], routes: [
            { path: '/', component: '@/pages/index' },
            { path: '/articlelist', component: '@/pages/ArticleList' },
            { path: '/articlelist/uploadarticle', component: '@/pages/Article' },
            { path: '/articlelist/articledetail', component: '@/pages/ArticleDetail' },
            { path: '/articlelist/articleedit', component: '@/pages/ArticleEdit' },
        ] },
];
