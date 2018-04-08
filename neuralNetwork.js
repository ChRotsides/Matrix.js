class neuralNetwork{
    constructor(a){
        this.a=a;
        //this.weights=new matrix();

    }

    guess(){
        let g=this.sigmoid(this.a);
        console.table(this.a.ar);
        console.table(g.ar);

    }

    train(inputs,anwear){

    }

    sigmoid(t) {
        if (t instanceof matrix){
            let newmatrix=new matrix(t.rows,t.cols);
            for (let i=0; i<t.rows; i++){
                for (let j=0; j<t.cols; j++){
                    newmatrix.ar[i][j]= 1/(1+Math.pow(Math.E, -t.ar[i][j]));
                }
            }
            return newmatrix;
        }
        return 1/(1+Math.pow(Math.E, -t));
    }
}