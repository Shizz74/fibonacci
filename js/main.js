document.addEventListener("DOMContentLoaded", function() {

    
    const form = document.querySelector('form');
    const outcome = document.querySelector('.outcome');
    let btn = document.querySelector('.btn');
    let result = document.querySelector('.result');
    const stop = document.querySelector('.stop');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let ulList = result.querySelector('ul');
        result.removeChild(ulList);
        const ulCreate = document.createElement("ul");
        result.appendChild(ulCreate); 
        let nr = document.querySelector('#number').value;
        btn.disabled = true;
        let n0 = 0;
        let n1 = 1;
        let sum;
        let loop = 0;
        let i = 0;
        
//Zero One number------------------------
        function zeroOne(){
            const el = document.createElement("li");
            el.innerText = loop + " wyraz ciągu to: " + i;
            el.classList.add("list");
            const li = document.querySelector("ul");
            li.appendChild(el); 
            loop++;
            i+=1;
        };
// Stop ------------------------
        stop.addEventListener('click', function(){
            clearInterval(time);
            btn.disabled = false;
        });
//-----------------------------------------        
            let time = setInterval(function() {
                if (nr==0 && i<1){
                    zeroOne();
                }
                else if(nr == 1 && i<=1 ){
                    zeroOne();
                }
                else if (nr > 1 && i<=nr){
                    if (i < 1){
                        zeroOne();
                    }
                    else if(i <=1){
                        zeroOne();
                    }
                    else if (nr >=i && i >1) {
                        sum = n0 + n1;
                        console.log(sum);
                        const el = document.createElement("li");
                        el.innerText = loop + " wyraz ciągu to: " + sum;
                        el.classList.add("list");
                        const li = document.querySelector("ul");
                        li.appendChild(el); 
                        loop++;
                        n0=n1;
                        n1=sum;
                        i+=1;
                    }
                    else {
                        btn.disabled = false;
                        clearInterval(time);
                    }

                }
                else {
                    btn.disabled = false;
                    clearInterval(time);
                }
            }, 3000);


    
});
});