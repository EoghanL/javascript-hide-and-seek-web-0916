function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
function increaseRankBy(n){
  for(let i = 0, l = document.querySelectorAll('ul.ranked-list li').length; i < l; i++){
    document.querySelectorAll('ul.ranked-list li')[i].innerHTML = parseInt(document.querySelectorAll('ul.ranked-list li')[i].innerHTML) + n}
}
