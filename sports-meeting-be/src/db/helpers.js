const getMeta = () => {
  return {
    createdAt: {
      type: Number,
      default: (new Date()).getDate()
    },
    updatedAt: {
      type: Number,
      default: (new Date()).getDate()
    }
  }
}

module.exports = {
  getMeta,
};