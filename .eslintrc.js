module.exports = {
  root: true,
  extends: 'standard',
  globals: {
    __static: true
  },
  'rules': {
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
