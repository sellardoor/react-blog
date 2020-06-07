export default {
  namespace: 'message',

  state: {
    data: [
      {
        author: 'a',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'asdasdasdasdasdasd',
        children: [
          {
            author: 'b',
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'asdasdasdasdasdasd',
            children: [],
          },
        ],
      },
      {
        author: 'c',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'asdasdasdasdasdasd',
        children: [],
      },
    ],
  },

  effcts: {},

  reducers: {},
};
