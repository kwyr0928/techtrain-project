## station 1
# Node.jsバージョン管理ツール nvm
# nvm -v // インストール確認
# nvm ls-remote // バージョン一覧表示
# nvm install 14.17.0 // 特定のバージョンをインストール
# nvm use 14.17.0 // バージョンの切り替え

## station 2
# fetch API と axios
# fetch API
# fetch("https://XXXXXXXXXXXXXX")
# .then((res) => res.json())
# .then((data)=>setXXX(data))
# .catch((error) => {
# console.log("fetchエラー" + error);
# });
# axios
# import axios, { AxiosResponse } from "axios";
# axios
# .get("https://XXXXXXXXXXXXXX", {
#    params: {
#       name: "title",
#     },
#   })
# .then((response: AxiosResponse<XXXX[]>) => { XXXX 冒頭でtype設定
#  const data: Thread[] = response.data;
#  setThreads(data.map((thread) => thread.title));
#   })
#  .catch((error) => {
#  console.log("fetchエラー" + error);
#  });
# 起動時に実行したい処理はuseEffectを使用
# 途中で値を変更する場合はuseStateを使用
# コンポーネントごとにファイルを分ける