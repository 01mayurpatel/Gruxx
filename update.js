
document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        try{
            document.getElementsByClassName('LabeledSwitch')[0].style.display='none';
        }catch(error){

        }
        try {
            var navBtns = document.getElementsByClassName('MenuLink');
            for (var i = 0; i < navBtns.length; i++) {
                if (navBtns[i].getAttribute('href') === 'isolated.html') {
                    navBtns[i].style.display = "none";
                }
                if (navBtns[i].getAttribute('href') === '#/dashboard') {
                    // navBtns[i].style.display="none";
                    navBtns[i].style.marginLeft = '0';
                }
            }
        } catch (error) {
            console.log("error");
        }
        try {
            var navBtnsInner = document.getElementsByClassName('Menu__link-inner');

            for (var i = 0; i < navBtnsInner.length; i++) {

                if (navBtnsInner[i].getElementsByTagName('a')[0].getAttribute('href') === '#/dashboard') {
                    // navBtns[i].style.display="none";
                    navBtnsInner[i].style.marginLeft = '0px';

                }
            }
        } catch (error) {
            console.log("error");
        }
        try {
            var backBtn = document.getElementsByClassName('Menu__back-button')[0];
            var Imgsrc = backBtn.getElementsByTagName('img')[0];
            Imgsrc.setAttribute('src', 'img/logo.png');
            Imgsrc.style.width = "40px";
            Imgsrc.style.height = "auto";
            Imgsrc.style.marginTop = "8px";
            Imgsrc.style.marginBottom = "5px";
            Imgsrc.style.pointerEvents = "none";
            backBtn.style.pointerEvents = "none";
            backBtn.style.display = "block";
            Imgsrc.style.display = "block";

            // console.log(backBtn)
        } catch (error) {

        }

        try {
            var mobNavBtns = document.getElementsByClassName('MobileContent__link');
            for (var i = 0; i < mobNavBtns.length; i++) {
                if (mobNavBtns[i].getAttribute('href') === 'isolated.html') {
                    mobNavBtns[i].style.display = "none";
                }
            }
        } catch (error) {
            console.log("error")
        }


        try {
            var bottomLink = document.getElementsByClassName('DepositBorrowMainWrapper__changeMarket-inner')[0];
            bottomLink.style.display = 'none';
        } catch (error) {

        }




        var logo = document.getElementsByClassName('Menu__logo-inner')[0];
        // var logoA = logo.getElementsByTagName('a')[0];



        // var backBtn = document.getElementsByClassName('Menu__back-button')[0];
        // backBtn.getElementsByTagName('img')[0].setAttribute('src','static/media/back.png');

        var element = document.getElementsByClassName('TokenIcon__image');
        var element2 = document.getElementsByClassName('TokenIconWithFullName');
        var labelledSwitch = document.getElementsByClassName('LabeledSwitch__buttonActive');

        var Value = document.getElementsByClassName('Value__line');
        var activeBtn = document.getElementsByClassName('LabeledSwitch__buttonActive')[0];
        // getElementsByTagName('button')[1].
        
        // document.getElementsByClassName('LabeledSwitch')[0].getElementsByTagName('button')[1].style.marginLeft='400px';
        // console.log(toggleBtn)
        // document.getElementsByClassName('LabeledSwitch')[0].style.width='fit-content';
        // document.getElementsByClassName('LabeledSwitch')[0].style.border='none';
        // document.getElementsByClassName('LabeledSwitch__inner')[0].style.border='none';
            
        for (var i = 0; i < Value.length; i++) {

            try {

                if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-SAVAX') {
                   
                        Value[i].getElementsByTagName('p')[0].innerText='6K'
                 
               
                }
                if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-SAVAX') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='2.4K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-DAI.E') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='5.6K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-DAI.E') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='0'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-WETH.E') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='94.69'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-WETH.E') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='381.41'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-BTC.B') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='3.7K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-BTC.B') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='2.07K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-AVAX') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='1.24K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-AVAX') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='37.18K'
             
           
                 }

                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-USDC') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='218.92'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-USDC') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='15.34'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'market-size-USDT') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='5.84K'
             
           
                 }
                 if (Value[i].getElementsByTagName('p')[0].getAttribute('data-for') === 'borrows-size-USDT') {
                   
                    Value[i].getElementsByTagName('p')[0].innerText='1.56K'
             
           
                 }



            } catch (error) {

                console.log("eroor")

            }
        }
        var ValueInner = document.getElementsByClassName('Value__value');
     
        // if(ValueInner.innerText == )
        try {
            for(var i =0;i<ValueInner.length;i++){
                if(ValueInner[i].innerText=== '1.58' || ValueInner[i].innerText==='1.21 ETH'){
                    ValueInner[i].innerText='1.21 ETH';
                }
                if(ValueInner[i].innerText=== '50.92' || ValueInner[i].innerText==='3 ETH'){
                    ValueInner[i].innerText='3 ETH';
                }
    
                if(ValueInner[i].innerText=== '2,068.85' || ValueInner[i].innerText==='0'){
                    ValueInner[i].innerText='0';
                }
                if(ValueInner[i].innerText=== '1,629.16' || ValueInner[i].innerText==='0.15'){
                    ValueInner[i].innerText='0.15';
                }


                if(ValueInner[i].innerText=== '< 0.01' || ValueInner[i].innerText==='381.35'){
                    ValueInner[i].innerText='381.35';
                }
                if(ValueInner[i].innerText=== '25.64' || ValueInner[i].innerText==='1.58'){
                    ValueInner[i].innerText='1.588';
                }


                if(ValueInner[i].innerText=== '143.47' || ValueInner[i].innerText==='50.921'){
                    ValueInner[i].innerText='50.921';
                }
                
            }
        } catch (error) {
            
        }


    var main_box = document.getElementsByClassName('Value');
    
    
try {
    
    for(var i =0;i<main_box.length;i++){
        if(main_box[i].getElementsByTagName('p')[0].innerText==='1.21 ETH'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 2479.89';
        }
        if(main_box[i].getElementsByTagName('p')[0].innerText==='3 ETH'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 6148.50';
        }

        if(main_box[i].getElementsByTagName('p')[0].innerText==='0'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 0';
        }
        if(main_box[i].getElementsByTagName('p')[0].innerText==='0.15'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 5680.95';
        }

        if(main_box[i].getElementsByTagName('p')[0].innerText==='381.35'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 381.47';
        }
        if(main_box[i].getElementsByTagName('p')[0].innerText==='94.67'){
            main_box[i].getElementsByTagName('p')[1].innerText='$ 94.70';
        }
        
    }

} catch (error) {
    
}




            for (var i = 0; i < element.length; i++) {
                if (element[i].getAttribute('alt') === "sAVAX") {
                    element[i].setAttribute('src', "img/Etherum.svg");

                }
                if (element[i].getAttribute('alt') === "DAI.e") {

                    element[i].setAttribute('src', "img/bitcoin.svg");

                }

                if (element[i].getAttribute('alt') === "WETH.e") {

                    element[i].setAttribute('src', "img/USDT.svg");


                }
                if (element[i].getAttribute('alt') === "BTC.b") {

                    element[i].setAttribute('src', "img/DAI.svg");


                }
                if (element[i].getAttribute('alt') === "AVAX") {

                    element[i].setAttribute('src', "img/SAVAX.svg");


                }
                if (element[i].getAttribute('alt') === "USDC") {

                    element[i].setAttribute('src', "img/WETH.svg");


                }
                if (element[i].getAttribute('alt') === "USDt") {

                    element[i].setAttribute('src', "img/USDC.svg");


                }
            }
            for (var j = 0; j < element2.length; j++) {
                var imgTag = element2[j].getElementsByClassName('TokenIcon__image')[0];
                var pTag = element2[j].getElementsByClassName('TokenIcon__name')[0];

                if (imgTag.getAttribute('alt') === "sAVAX") {

                    pTag.innerHTML = '<b>ETH</b>';
                }
                if (imgTag.getAttribute('alt') === "DAI.e") {

                    pTag.innerHTML = '<b>BTC.B';

                }
                if (imgTag.getAttribute('alt') === "WETH.e") {

                    pTag.innerHTML = '<b>USDT</b>';


                }
                if (imgTag.getAttribute('alt') === "BTC.b") {

                    pTag.innerHTML = '<b>DAI(DAI.e)</b>'


                }
                if (imgTag.getAttribute('alt') === "AVAX") {

                    pTag.innerHTML = '<b>SAVAX</b>';


                }
                if (imgTag.getAttribute('alt') === "USDC") {

                    pTag.innerHTML = '<b>WETH   </b>'


                }
                if (imgTag.getAttribute('alt') === "USDt") {

                    pTag.innerHTML = '<b>USDC</b>'


                }
            }


        }, 50)

});



















