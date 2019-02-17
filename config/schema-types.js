module.exports = {
  String: {
    optional: String,
    required: { type: String, required: true }
  },
  Date: {
    current: { type: Date, default: Date.now }
  }
}