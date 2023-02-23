function tip(el){

    const colorEl = document.querySelectorAll(".tips");
    let lastClickedElem = null;
    
    for (let i = 0; i < colorEl.length; i++) {
      colorEl[i].addEventListener("click", function() {
        if (lastClickedElem) {
          lastClickedElem.style.backgroundColor = "#00494d";
        }
        this.style.backgroundColor = "#039e6f";
        lastClickedElem = this;
      });
    }


    
    console.log(el.style)

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
       let emount = document.querySelector('.amount-input')

        totalRes = (res * percCuantity.value )+ parseInt(emount.value) ;

        document.getElementById('total-amount').value = totalRes;
    }

  
    total()

     
    
}



function reset(){
    document.getElementById('total-amount').value = ' '
    document.getElementById('amount').value = ' '
    location.reload()
}

function activeBill(){
  let bill = document.querySelector('.bill');

  bill.style.cursor = 'pointer'
}

activeBill();

