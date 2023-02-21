import { executeQuery } from "./db";
const handler = async (req, res) => {
  const { method, body } = req;
  const selectData = async () => {
    try {
      let data = await executeQuery(
        "select * from table1 order by id DESC",
        []
      );
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };//선택작업

  const insertData = async () => {
    let { name, email, date } = body;
    let data = await executeQuery(
      "insert into table1 (name,email,date) value(?,?,?)",
      [name, email, date]
    );
    res.json(data);
  };//추가작업

  const deleteData = async () => {
    let data = await executeQuery("delete from table1 where id=?", [query.id]);
    res.json(data);
  };//삭제작업



  switch (method) {
    case "GET":
      selectData();
      break;
    case "POST":
      insertData();
      break;
    case "DELETE":
      deleteData();
      break;
  }

  //DESC(내림차순),ASC(오름차순)
  let data = await executeQuery("select * from table1 order by id DESC", []);

  /* let data = await executeQuery('insert into table1 (name,email,date) value(?,?,?)',
  ['홍순이','ㅇlㅁㅔ1','2013']) */ //추가

  /* let data = await executeQuery(
    'update table1 set name=? where id=?',
    ['넘힘들어요',2]) */ //수정

  /* let data = await executeQuery('delete from table1 where id=?',[3]) */ //삭제
  res.json(data);
};
export default handler;
