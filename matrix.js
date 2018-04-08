class matrix{
    constructor(rows,cols){
        this.rows=rows;
        this.cols=cols;
        this.ar=[];

        for(let e=0; e<this.rows; e++){
            this.ar[e]=[];
            for (let j=0; j<this.cols; j++){
                this.ar[e][j]=0;
            }
        }

    }
    //Randomize the matrix values does not return
    randomize(n,num){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]=this.random(n,num);
            }
        }
    }
    // Randomize this matrix with integer values
    intrandomize(n,num){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]=floor(this.random(n,num));
            }
        }
    }
    // multiply two matrix and return a new one
    multiplyr(matobject){
        let nm=new matrix(this.rows,this.cols);
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                nm.ar[i][j]=this.ar[i][j]*matobject.ar[i][j];
            }
        }
        return nm;
    }
    //multiply this matrix with an other
    //this matrix Changes
    multiply(matobject){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]*=matobject.ar[i][j];
            }
        }
    }
    //The dot product return new matrix
    //Not working
    dot(matobject){
        let nm=new matrix(this.rows,matobject.cols);
        if(this.rows!=matobject.cols){
            console.log("To Perform this matrixA rows must equal matrixB colums ");
            return undefined;
        }else{
      for(let i=0; i<nm.rows; i++){
          for (let j=0; j<nm.cols; j++){
              let sum=0;
              for(let e=0; e<this.cols; e++){
                sum+=this.ar[i][e]*matobject.ar[e][j];
              }
              nm.ar[i][j]=sum;
            }
        }
        return nm;
    }
        
      }

    //Add Other matrix to this one
    add(matobject){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]+=matobject.ar[i][j];
            }
        }

    }
    addnum(num){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]+=num;
            }
        }
    }
    //Add two matrix and return a new one
    //matrix
    addr(matobject){
        let nm=new matrix(this.rows,this.cols);
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                nm.ar[i][j]=this.ar[i][j]+matobject.ar[i][j];
            }
        }
        return nm;
    }
    //Matrix scalar  Does not return
    scalar(num){
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                this.ar[i][j]*=num;
            }
        }
    }
    //Matrix scalar returns
    scalarr(num){
        let nm=new matrix(this.rows,this.cols);
        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                nm.ar[i][j]=this.ar[i][j]*=num;
            }
        }
        return nm;
    }
    //Return a 3,2 matrix from a 2,3 matrix Transpose
    transpose(){
    let nm=new matrix(this.cols,this.rows);

        for(let i=0; i<this.rows; i++){
            for (let j=0; j<this.cols; j++){
                nm.ar[j][i]=this.ar[i][j];
                }
            }
            return nm;
        }
        //Return the Array of the matrix
        toarray(){
          let narr=[];
          for(let e=0; e<this.rows; e++){
            narr[e]=[];
          }
          for (let i=0; i<this.rows; i++){
              for (let j=0; j<this.cols; j++){
                narr[i][j]=this.ar[i][j];
              }
            }
            return narr;
        }
        //From Array to this matrix
        fromarray(arr){
          for(let i=0; i<this.rows; i++){
              for (let j=0; j<this.cols; j++){
                this.ar[i][j]=arr[i][j];
              }
            }
        }
        //Random number between min max;
        random(min, max) {
            return Math.random() * (max - min + 1) + min;
            }
        table(){
            console.table(this.ar);
        }

}
