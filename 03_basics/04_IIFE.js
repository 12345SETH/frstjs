//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// USE  - TO REMOVE POLLUTION OF GLOBAL SCOPE AND TO EXECUTE FUNCTION IMMEDIATELY
(function chai(){
    console.log(`DB Connected`);
})();
((name) =>{
    console.log(`DB Connected Two ${name}`);
})(`DNS`);