class SayHello{
    constructor(a, b, c, d){
       this.a = a;
       this.b = b;
       this.c = c;
       this.d = d;
       this.showCalc();
    }

    showCalc(){
        const calc = this.a + this.b + this.c + this.d;
        console.log(calc);
    }
};

module.exports = SayHello;