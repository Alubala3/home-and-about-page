
//parseInt(prompt('please enter the number you would like to fissBuuzz up t:'))

/*let answer = parseInt(prompt('please enter the number you would like to fissBuuzz up t:'))

for(let i = 1; i <= answer; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log('fizzyBuzz')

    }else if(i % 3 === 0){
        console.log('fizzy')

    }else if(i % 5 === 0){
        console.log('Buzzy')
    }else{
        console.log(i)
    }
}*/


/*function capital(name){
    return name.charAt(3)
}

console.log(capital('allaan'))

const a = 'hello';
const b = 'world';
const c = ''
console.log(c)*/

window.addEventListener('scroll', Load)

function Load(){
    const header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 0)
}