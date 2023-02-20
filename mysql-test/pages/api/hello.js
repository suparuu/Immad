
import { executeQuery } from './db';

const handler = async (req, res) => {
  /* let data = await executeQuery('select * from table1', []); */
  /* let data = await executeQuery('insert into table1 (name,email,date) value(?,?,?)',
  ['홍순이','ㅇlㅁㅔ1','2013']) */ //추가
  /* let data = await executeQuery(
    'update table1 set name=? where id=?',
    ['넘힘들어요',2]) */ //수정
  /* let data = await executeQuery('delete from table1 where id=?',[3])
  res.json(data); */ //삭제
}

export default handler;

