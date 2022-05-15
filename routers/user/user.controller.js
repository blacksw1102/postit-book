/* api 로직 */
let users = [
  { id: 1, name: "jinbro" },
  { id: 2, name: "jinhyung" },
  { id: 3, name: "park" },
];

let index = function (req, res) {
  /* req.query.limit = req.query.limit || 10 - 요로코롬 쓸 수도 있네? */
  if (!req.query.limit) {
    res.json(users);
  } else {
    const limit = parseInt(req.query.limit, 10);

    if (isNaN(limit)) {
      return res.status(400).end();
    }
    res.json(users.slice(0, limit));
  }
};

let read = function (req, res) {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).end();
  }

  const user = users.filter((user) => {
    return user.id === id;
  })[0];

  if (!user) {
    return res.status(404).end();
  }

  res.json(user);
};

//.... 이하 생략

module.exports = {
  index: index,
  read: read,
  //create: create,
  //update: update,
  //destroy: destroy,
};
