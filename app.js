function f() {
    let a = document.getElementById('studentName')
    let b = document.getElementById('fatherName')
    let c = document.getElementById('email')
    let d = document.getElementById('phone')
    let e = document.getElementById('password')
    if(a.value==''||b.value==''||c.value==''||d.value==''||e.value==''){
    alert("please fill all input feilds !")
    return
    }

    let obj = {
        names: a.value,
        fathername: b.value,
        Email: c.value,
        phone: d.value,
        password:e.value
    };

    localStorage.setItem("formData", JSON.stringify(obj));
    console.log("Data saved in localStorage:", obj);


ab=document.getElementById('db')
ab.innerHTML=`<button id="lo">login</button>`
document.getElementById("lo").addEventListener("click", function () {
  window.location.href = "indexx.html"; 
});

    a.value=""
    b.value=""
    c.value=""
    d.value=""
    e.value=""
    
}





