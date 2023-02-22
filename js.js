function tip(el){
    const number = document.querySelector('.amount-input');

    const percCuantity = document.querySelector('.human-cuant');
   
    let res;

    let totalRes

    function result(){
        res = number.value * el.value / 100;

        document.getElementById('amount').value = res;

       
    }

    result()

    

    function total(){

        totalRes = res * percCuantity.value;

        document.getElementById('total-amount').value = totalRes;
    }

  
    total()
    
}



function reset(){
    document.getElementById('total-amount').value = ' '
    document.getElementById('amount').value = ' '
}

