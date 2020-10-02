module.exports = function reverse (n) {

    if(n > 0){
        return (parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n));    
   }
   else{
        return Math.abs((parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)));  
   } 
         
}
