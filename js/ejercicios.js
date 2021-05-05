//Ejercicio 5
function b() {
    // tasques asíncrones , que triguen una estona..
    setTimeout(() => {
     return console.log('b')
    }, 3000);
    }
     
    async function a() {
    // Ens esperem que la funció b acabi
        try {
            let result = await b();
            doMoreWork()
        }catch (error){
            console.log(error)
        }
           
    }
    
    function doMoreWork() {
        return console.log('a');
    }
    
    a()