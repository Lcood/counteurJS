// init count
let count = 0;
const value= document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        // or const target = e.currentTarget.classList;
        if (target.contains(increment)) {
            count++;
            // value.textContent = count;
            // value.style.color = "green";
        } else if (target.contains(decrement)){
            count--;
            // value.textContent = count;
            // value.style.color = "red";
        } else{
            count = 0;
            // value.textContent = count;
            // value.style.color = "black";
        }

        if(count < 0) {
            value.style.color = "red";

        } else if (count > 0 ){
            value.style.color = "green";
        } else {
            count = 0;
            value.style.color = "black";
        }
        
        return value.textContent = count;
        
    });
    
});