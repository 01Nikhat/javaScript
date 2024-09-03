//lexical scope
function useclosure(){
    let data = "nikki"
    function inherit() {
        console.log(data);
        
    }
    inherit()
}
useclosure()