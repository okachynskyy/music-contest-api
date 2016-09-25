var testData = [
  {
    id: 0,
    title: "Article 1"
  },
  {
    id: 1,
    title: "Article 2"
  },
  {
    id: 2,
    title: "Article 3"
  }
];

exports.articles = function(req, res) {
  res.send(testData);
}
