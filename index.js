// string => '' "" ``
// number => 0 1 2 3 4 5 6 7 8 9 || 1/2 || 2 + 2
// boolean => true false
// object

// document.querySelector('h1').innerHTML = 'Helooo'

document.querySelector('.h1').addEventListener('click',()=>{
document.querySelector('h1').innerHTML = 'Helooo'

})


console.log(document.querySelector('h1').innerHTML);




//  ------------------- 
document.querySelector('.img').addEventListener('click', ()=> {
  document.querySelector('img').outerHTML = '<img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="Новая картинка" >';

});
console.log([ document.querySelector('.img-1')])



// --------------

document.querySelector('.list').addEventListener('click',() => {
  document.querySelector('li').innerHTML = 'banana'
})

// -----------------

document.querySelector('.link-bnt').addEventListener('click',()=> {
  document.querySelector('a').innerHTML = '565655655656565656'
})
// -----------------


document.querySelector('.img3').addEventListener('click', ()=> {
  document.querySelector('.images').outerHTML = '  <img src="https://i.pinimg.com/236x/c4/00/72/c40072f10a71a02eb44afe1436d1714f.jpg" alt="Новая картинка" >    '
})

// -----------------


document.querySelector('.text').addEventListener('click',()=>{
  document.querySelector('p').innerHTML = ' самый короткий текст'
})
// -----------------

document.querySelector('h2').innerHTML = ' 12'


// -----------------
document.querySelector('.uls-click').addEventListener('click',()=> {
  document.querySelector('.ulist').innerHTML += ' <li>яблкоо</li> '

  for(let i=0; i<10;i++){
    console.log(i)
  }
  })


  for (let i=0; i<15; i++){
  document.querySelector('.ulist').innerHTML += ' <li>яблкоо22</li> '
console.log(i)
  }
// -----------------

const fructy = [
  'яблко',
  'банан',
  'виноград',
  'груша',
  'клубника'
]
for(let i=0;i<12;i++){
  console.log(fructy[i])
}

// -----------------

const fructy2 = [
  'яблко',
  'банан',
  'виноград',
  'груша',
  'клубника',
  'клубника',
  'клубника55'
]
for(let i=0;i<fructy2.length;i++){
  console.log(fructy2[i])
}

// -----------------

const fructy3 = [
  'яблко',
  'банан',
  'виноград',
  'груша',
  'клубника',
  'клубника',
  'клубника55'
]
for(let i=0;i<fructy3.length;i++){
  console.log(fructy3[i]);
  document.querySelector('.ulist5').innerHTML +='<li>naming '+fructy3[i] + '</li>'; 
}
// -----------------

document.querySelector('.colors').addEventListener('click',()=>{
  document.querySelector('.red').className = 'brown'
})

// -----------------
document.querySelector('.colors2').addEventListener('click',()=>{
  if (document.querySelector('.red2').className === 'red2'){
document.querySelector('.brown2').className = 'brown2';
  }else if(document.querySelector('.brown2').className === 'yellow2'){
document.querySelector('.yellow2').className = 'yellow2';
  }else {
    document.querySelector('.yellow2').className ='red2'

  }
});


document.querySelector('.colors2').addEventListener('click', () => {
  const element = document.querySelector('.red2, .yellow2, .brown2');
  
  if (element.classList.contains('red2')) {
    element.className = 'brown2';
  } else if (element.classList.contains('brown2')) {
    element.className = 'yellow2';
  } else if (element.classList.contains('yellow2')) {
    element.className = 'red2';
  }
});