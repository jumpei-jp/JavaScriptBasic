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

// post情報を取得する関数
const getPosts = async () => {
  // 非同期処理が完了してreturnが実行されるまで次の処理に進まない
  const json = await fetch("https://jsonplaceholder.typicode.com/posts")
    // 成功を返す
    .then((res) => {
      console.log("get posts success!");
      return res.json();
    })
    // 失敗を返す
    .catch((error) => {
      console.log(error);
      return null;
    });

  // 結果を返す
  console.log(json);
};

callApi();
getPosts();
