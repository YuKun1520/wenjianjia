const asideMenu = [{
        parentID: 0,
        id: 1,
        title: "系统设置",
        path: ""
    },
    {
        parentID: 1,
        id: 2,
        title: "网站基本设置",
        path: "/Admin/System"
    },
    {
        parentID: 1,
        id: 3,
        title: "阅读设置",
        path: "/Admin/Reading"
    },
    {
        parentID: 1,
        id: 4,
        title: "评论管理",
        path: "/Admin/Comments"
    },
    {
        parentID: 1,
        id: 5,
        title: "分页管理",
        path: "/Admin/paging"
    },
    {
        parentID: 0,
        id: 6,
        title: "文章管理",
        path: ""
    },
    {
        parentID: 6,
        id: 7,
        title: "文章列表",
        path: "/Admin/NewsList"
    },
    {
        parentID: 6,
        id: 8,
        title: "添加文章",
        path: "/Admin/NewPost"
    },
    {
        parentID: 6,
        id: 9,
        title: "文章回收站",
        path: "/Admin/NewRecycleBin"
    },
    {
        parentID: 6,
        id: 9,
        title: "文章分类",
        path: "/Admin/NewsType"
    }
]


export default asideMenu;