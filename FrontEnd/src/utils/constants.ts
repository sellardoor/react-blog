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
