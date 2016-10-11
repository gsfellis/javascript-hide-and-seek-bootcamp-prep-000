function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = document.getElementById('nested')

  return nested.querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  const gn = document.getElementById('grand-node')
  const divs = gn.querySelectorAll('div')

  return divs[divs.length - 1]  
}
