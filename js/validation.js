const num = document.getElementById('name');
const ex = document.getElementById('exp');
const pass = document.getElementById('pass');
const form = document.getElementById('pform');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e)=>{
    let messages =[];
    if(num.value.length<16 || num.value.length>16)
    {
       messages.push("Номер карты должен содержать 16 цифр");
    }

    if(ex.value.length<5 || ex.value.length>5 || ex.value[2]!='-' || isNaN(Number(ex.value[0])) || isNaN(Number(ex.value[1])) || isNaN(Number(ex.value[3])) || isNaN(Number(ex.value[4])))
    {
        messages.push("Дата должна состоять из цифр месяца и года, прописанных через дефис");
    }

    if(Number(ex.value[0])==1 && Number(ex.value[1])>2)
    {
        messages.push("Месяц не может быть больше 12");
    }
    if(pass.value.length<3 || pass.value.length>3)
    {
        messages.push("CVV должен состоять из 3 цифр");
    }
    if(messages.length>0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})