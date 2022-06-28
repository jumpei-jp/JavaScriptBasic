/**
 * https://jsonplaceholder.typicode.com/
 * ↑のAPIを叩く
 */

// user情報を取得する関数
async function callApi() {
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users"); // fetchをするとpromiseが返ってくる
  const users = await res.json(); // responseの値をjson形式で取得できるようにする
  console.log(users);
}

callApi();
