const result = {
  result: {
    STROKELINECAP: [
      [
        'One Day Ill Fly Away',
        'leave all this to yesterday',
        'God kisses the finite in his love',
        'and man the infinite',
      ],
      [
        'I never saw a Moor',
        'I never saw the Sea',
        'Yet know I how the Heather looks',
        'And what a Billow be',
      ],
      [
        'Funeral Blues',
        'He was my North, my South, my East.',
        'My working week and my Sunday rest.',
        'My noon, my midnight, my talk.',
      ],
    ],
    timeline: [
      'I have had my invitation to this worlds festival.',
      'Early in the day it was whispered that.',
      'and never a soul in the world would know of this our pilgrimage to no.',
      'In the meanwhile I smile and I sing all alone.',
      'In the meanwhile the air is filling.',
    ],
  },
  success: true,
};

export default {
  'POST /api/indexpage': (req, res) => {
    res.send(result);
  },
};
