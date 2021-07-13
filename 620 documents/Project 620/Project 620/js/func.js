// the home page funtions


const allProducts = document.querySelectorAll('.product');
const theProductView = document.querySelector('.theProductView');
let addToOrder = document.querySelector('button.addToOrder')

for(var i = 0;i <= allProducts.length; i++){
    allProducts[i].addEventListener('click', function(){
        theProductView.classList.add('theProductShow');

    })
}



function theProductViewHider(){
    theProductView.classList.remove('theProductShow')
}
function theProductViewAdder(){
    theProductView.classList.remove('theProductShow')
    alert('1 Product Added To Order')
}

// the order page functions
var theNumber = 15;




function theOrderPopUpShow(theNumberChanger){
    theNumber = 15
    var theOrderPopUp = document.querySelector('.theOrderPopUp')
    var p = document .querySelector('.theOrderPopUp .theDesc p')
    var h5 = document .querySelector('.theOrderPopUp .theOrderAlert h5')
    var button = document .querySelector('.theOrderPopUp .orderChangerBtn button')
    function theNumberChanger(){
        theNumber--;
        if(theNumber > 0){
            p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, inventore.'
            h5.innerHTML = `The Order will be started in ${theNumber} seconds`
            button.innerHTML = 'Change Order'
        }
        else{
            p.innerHTML = 'hello'
            h5.innerHTML = 'hi'
            button.innerHTML = 'by by'
        }
    }
    theOrderPopUp.classList.add('theProductShow')

    var setIt = setInterval(theNumberChanger, 1000);

    var changeOrderBtn = document.querySelector('.orderChangerBtn')
    changeOrderBtn.addEventListener('click', function(){
        clearInterval(setIt)
    })
}


function theOrderPopUpHide(){
    let theOrderPopUp = document.querySelector('.theOrderPopUp')
    theOrderPopUp.classList.remove('theProductShow')
}


// all page append section function 

    
function theAppend(){
    var theElement = document.querySelector('.theAppentSection')
    theElement.classList.add('theAppendCome')
}

function theAppendRemove(){
    var theElement = document.querySelector('.theAppentSection')
    theElement.classList.remove('theAppendCome')
}


