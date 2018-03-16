// var x = 1;
var app = new Vue ({
    el: '#app',
    data: {
        message: "Hello Tien Pham!"
    }
});
// setInterval(()=>{
//     x++;
//     app.message = `Hello Tien Pham ${x}!`;
// }, 1000);
var app2 = new Vue ({
    el: `#app-2`,
    data: {
        message: `You loaded this page on ${new Date().toLocaleString()}`
    }
});
var app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
});
app3.seen = false;
// app2.message = 'Why VUE???'
var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Pham'},
            {text: 'Nguyen'},
            {text: 'Tien'}
        ]
    }
})

// var mess = "Dm Trong";
// setInterval(()=>{
//     // document.getElementById('mess')
//     console.log(mess);
//     setTimeout(()=>{
//         console.log(`${mess} hide!`)
//     }, 3000);
// }, 6000);