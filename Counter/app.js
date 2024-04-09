let count =0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
btns.forEach(function (btn){
    btn.addEventListener("click",function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            value.style.color = "red";
        }
        if(styles.contains("reset")){
            count=0;
        }
        if(styles.contains("increase")){
            count++;
            value.style.color = "green";
        }
        value.textContent = count;
    });
});