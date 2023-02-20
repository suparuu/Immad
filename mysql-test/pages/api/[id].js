import { executeQuery } from "./db";

const handler = async (req, res) => {
  const { method, body, query } = req;
  /* console.log(query)
console.log(req)
 */
  const selectDataId = async () => {
    let data = await executeQuery("select * from table1 where id=?", [
      query.id,
    ]);
    res.json(data);
  };

  const updateDataId = async () => {
    let { name, email, date } = body;
    let data = await executeQuery(
      "update table1 set name=?, email=?, date=? where id=?",
      [name, email, date, query.id]
    );
    res.json(data);
  };
  const deleteDataId = async () => {
    let data = await executeQuery("delete from table1 where id=?", [query.id]);
    res.json(data);
  };
  switch (method) {
    case "GET":
      selectDataId();
      break;
    case "UPDATE":
      updateDataId();
      break;
    case "REMOVE":
      deleteDataId();
      break;
  }
};// 3000/api/[id] << id값을 관리하는곳 

export default handler;
