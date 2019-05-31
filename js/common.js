
//要素の作成
//--------------------------------
function makeElement(tag, id, className) {
    let elm = document.createElement(tag);
    if (id) elm.id = id;
    if (className) elm.className = className;
    return elm;
  }


//ランダムな数値を作成　max = 上限
//--------------------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}