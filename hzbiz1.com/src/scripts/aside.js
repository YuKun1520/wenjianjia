// 设置单独的路由信息js文件，实现信息复用
import Index from "../components/Index.vue" 
import Admin from "../components/admin/Admin.vue"
import AdminIndex from "../components/admin/Index.vue"
import AdminSystem from "../components/admin/System.vue"
import AdminReading from "../components/admin/Reading.vue"
import AdminArticleList from "../components/admin/Article.vue"
const routes = [
    {
        path:"/",
        component:Index,
        name:"Index",
        meta:{
            title:"首页",
            keywords:"我们说,我们说官网,图文编辑软件,我们下载,图文创作,创作软件,原创社区,小说,散文,写作,阅读",
            description:"我们说是一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。"
        }
    },
    {
        path:"/Admin",
        component:Admin,
        meta:{
            title:[{
                text: "默认页面",
                active: true
              }],
              keywords:"",
              description:""
        },
        redirect: () => {
            return {path: "/Admin/Index"}
        },
        children:[
            { 
                path: "/Admin/Index", 
                name:"AdminIndex",
                component: AdminIndex,
                meta:{
                    title:[{
                        text: "后台首页",
                        href: "/Admin/Index",
                        active: true
                      }],
                    keywords:"",
                    description:""
                }
            },
            { 
                path: "/Admin/System", 
                name:"AdminSystem",
                component: AdminSystem,
                meta:{
                    title:[{
                        text: "系统设置",
                        href: "/Admin/System"
                      },{
                        text: "网站基本设置",
                        active: true
                      }],
                    keywords:"",
                    description:""
                }
            },
            { 
                path: "/Admin/Reading", 
                name:"AdminReading",
                component: AdminReading,
                meta:{
                    title:[{
                        text: "系统设置",
                        href: "/Admin/System"
                      },{
                        text: "阅读设置",
                        active: true
                      }],
                    keywords:"",
                    description:""
                }
            },
            { 
                path: "/Admin/ArticleList", 
                name:"AdminArticleList",
                component: AdminArticleList,
                meta:{
                    title:[{
                        text: "文章管理",
                        href: "/Admin/ArticleList"
                      },{
                        text: "所有文章",
                        active: true
                      }],
                    keywords:"",
                    description:""
                }
            }
        ]
     }
]


export default routes;

