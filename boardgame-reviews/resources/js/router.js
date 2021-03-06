import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName:"Home" */ "./views/Home.vue");
const SignUp = () =>
    import(/* webpackChunkName:"SignUp" */ "./views/SignUp.vue");
const SignIn = () =>
    import(/* webpackChunkName:"SignIn" */ "./views/SignIn.vue");
const ShopList = () =>
    import(/* webpackChunkName:"ShopList" */ "./views/ShopList.vue");
const ShopListByWards = () =>
    import(
        /* webpackChunkName:"ShopListByWards" */ "./views/ShopListByWards.vue"
    );
const ShopDetail = () =>
    import(/* webpackChunkName:"ShopDetail" */ "./views/ShopDetail.vue");
const Profile = () =>
    import(/* webpackChunkName:"Profile" */ "./views/Profile.vue");
const Credential = () =>
    import(/* webpackChunkName:"Credential" */ "./views/Credential.vue");
const SystemError = () =>
    import(/* webpackChunkName:"SystemError" */ "./views/errors/System.vue");
const NotFoundError = () =>
    import(
        /* webpackChunkName:"NotFoundError" */ "./views/errors/NotFound.vue"
    );
const ErrorModal = () =>
    import(/* webpackChunkName:"ErrorModal" */ "./views/errors/ErrorModal.vue");

// vuex
import store from "./store";

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "/",
            name: "index",
            component: ShopList,
            props: route => {
                // URL のクエリパラメータ page をページコンポーネントで取得しShopListのコンポーネントに返す
                // routeからpageを取得し正規表現でチェック
                const page = route.query.page;
                return { page: /^[1-9][0-9]*$/.test(page) ? page * 1 : 1 };
            }
        },
        {
            path: "/wards/:id",
            component: ShopListByWards,
            props: true
        },
        {
            path: "/shops/:id",
            component: ShopDetail,
            props: true
        },
        {
            path: "/register",
            name: "register",
            component: Home
        },
        {
            path: "/sign_up",
            name: "sign_up",
            component: SignUp
        },
        {
            path: "/sign_in",
            name: "sign_in",
            component: SignIn
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: { login: true }
        },
        {
            path: "/credential",
            name: "credential",
            component: Credential,
            meta: { login: true }
        },
        {
            path: "/500",
            name: "system_error",
            component: SystemError
        },
        // *にしてるのでルート定義以外は全部NotFoundに行く
        {
            path: "*",
            component: NotFoundError
        },
        // *にしてるのでルート定義以外は全部NotFoundに行く
        {
            path: "/error",
            component: ErrorModal
        }
    ]
});

// ナビゲーションガード の登録
router.beforeEach((to, from, next) => {
    // 表示しようとしているページがlogin設定されているかどうかを判別する
    if (to.matched.some(rec => rec.meta.login)) {
        if (store.getters["auth/user"]) {
            // ログインしているのでそのまま表示
            next();
        } else {
            // ログインしていないので(/)に移動する
            next({ name: "index" });
        }
    } else {
        next();
    }
});

export default router;
