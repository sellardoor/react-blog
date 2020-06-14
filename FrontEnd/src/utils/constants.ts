/**
 * @description 常量合集
 * @author sellardorr
 * @date 2020/06/03
 */

/**
 * @description proxy地址
 * @dev http://127.0.0.1:7001
 * @prod http://59.110.43.170:7001
 */
export const PROXY: string = 'http://59.110.43.170:7001';

/**
 * @description 底部图片CDN地址
 */
export const FOOTERIMGS: string[] = [
  'http://cdn.sellardoor.cn/inst-1.jpeg.jpg',
  'http://cdn.sellardoor.cn/inst-2.jpg',
  'http://cdn.sellardoor.cn/inst-3.jpeg.jpg',
  'http://cdn.sellardoor.cn/inst-4.jpg',
  'http://cdn.sellardoor.cn/inst-5.jpeg.jpg',
  'http://cdn.sellardoor.cn/inst-6.jpg',
  'http://cdn.sellardoor.cn/inst-7.jpeg.jpg',
  'http://cdn.sellardoor.cn/inst-8.jpg',
];

/**
 * @description Instagram九宫格图
 */
export const INSTAGRAM: string[] = [
  'http://cdn.sellardoor.cn/instagram-sidebar-1.jpeg.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-2.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-3.jpeg.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-4.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-5.jpeg.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-6.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-7.jpeg.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-8.jpg',
  'http://cdn.sellardoor.cn/instagram-sidebar-9.jpg',
];

/**
 * @description 登录登出本地线上地址切换
 * @dev http://localhost:8000
 * @prod http://sellardoor.cn
 */
export const LOGINLOCALPROD: string = 'http://sellardoor.cn';

/**
 * @description github oauth地址
 * @dev `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://localhost:8000/`
 * @prod `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://sellardoor.cn/`
 * @client_id d094df5206d99f67e373
 */
export const GITHUBOAUTH: string = `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://sellardoor.cn/`;

interface AboutBlogType {
  date: string;
  content: string;
}
export const AboutBlog: AboutBlogType[] = [
  { date: '📅2020/05/31', content: '1.0版本' },
  { date: '📅2020/06/02', content: '博客,后台页面首屏优化' },
  { date: '📅2020/06/03', content: '由于静态资源托管cdn, 文章封面的上传与修改功能从本地存储改为cdn存储' },
  { date: '📅2020/06/04', content: '重构了博客UI' },
  { date: '📅2020/06/06', content: '用户系统完成用户登录注册前后端数据库联调完毕' },
  { date: '📅2020/06/06', content: 'Oauth前后端数据库联调完毕, 已支持github第三方登录' },
  { date: '📅2020/06/07', content: '留言板前后数据库联调完毕, 响应式done, 后台系统支持用户库浏览' },
  { date: '📅2020/06/07', content: '响应式小屏不显示sidebar, 新增按钮抽屉弹出sidebar, 新增文章阅读量展示' },
  { date: '📅2020/06/08', content: '留言板表逻辑问题修复, 文章与留言板都可回复' },
  { date: '📅2020/06/09', content: 'react-lazyload懒加载图片, 文章列表改为时间轴形式的归档' },
  { date: '📅2020/06/10', content: 'tags标签已联调, 展示文章有哪些类别有多少篇, 点击跳转文章分类列表页. 优化一些问题' },
  { date: '📅2020/06/13', content: '前端blog代码已用typescript重构.' },
  { date: '📅2020/06/14', content: '前端管理系统代码已用typescript重构, 重构留言组件' },
];
