const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const product1 = urlParams.get('user')
function page1(){


    let data = product1.split('=');
    localStorage.setItem('username',data[0])
    console.log(data[0])
}

function page2(){

    const product2 = urlParams.get('answer')


    let data2 = product2.split('=');
    localStorage.setItem('answer',data2[0])
    console.log(data2[0])
}

function page3(){
    let user = document.getElementById('username')
    let answer = document.getElementById('answer')
    user.innerText = 'hey '+localStorage.getItem('username')+'😎'
    answer.innerText = "you selected "

    if (localStorage.getItem('answer') === 'car1'){
        document.getElementById("pg3").src = "./car1.png";
    }
    else if (localStorage.getItem('answer') === 'car2'){
        document.getElementById("pg3").src = "./car2.png";
    }
    else if (localStorage.getItem('answer') === 'car3'){
        document.getElementById("pg3").src = "./car3.png";
    }
    else{
        document.getElementById("pg3").src = "./cycle.png";
    }


    localStorage.removeItem('username')
    localStorage.removeItem('answer')
}







