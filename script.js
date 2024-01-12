const btn = document.getElementById('some');
function myScript1(){

  btn.style.background = 'yellow';
}
function myScript2(arra){
btn.style.background = 'yellow';

    var count = 0;
    var microcount = 0;
try{
    for(let i =0;i<5;i++){
      for(let j =0;j<5;j++){
        if(arra[i][j] == 0){

         if(i==0){
        if(arra[i][j] == 0){
          if(arra[i][j+1]==1){
            microcount +=1;
          }
          if(arra[i+1][j]==1){
            microcount +=1;
          }

          if(arra[i][j-1]==1){
            microcount +=1;
          }
            if(microcount>2){
              count+=1;
              microcount=0;
            }
            else {
              microcount=0;
            }
          }
        }
        else if(j==0){
        if(arra[i][j] == 0){
          if(arra[i+1][j]==1){
            microcount +=1;
          }
          if(arra[i-1][j]==1){
            microcount +=1;
          }
          if(arra[i][j+1]==1){
            microcount +=1;
          }
            if(microcount>2){
              count+=1;
              microcount=0;
            }
            else {
              microcount=0;
            }
          }
        }
        else if(i==5){
        if(arra[i][j] == 0){
          if(arra[i][j+1]==1){
            microcount +=1;
          }
          if(arra[i-1][j]==1){
            microcount +=1;
          }
          if(arra[i][j-1]==1){
            microcount +=1;
          }
          if(arra[i][j+1]==1){
            microcount +=1;
          }
            if(microcount>2){
              count+=1;
              microcount=0;
            }
            else {
              microcount=0;
            }
          }
        }
        else if(j==5){
        if(arra[i][j] == 0){
          if(arra[i][j+1]==1){
            microcount +=1;
          }
          if(arra[i][j-1]==1){
            microcount +=1;
          }
          if(arra[i-1][j]==1){
            microcount +=1;
          }

            if(microcount>2){
              count++;
              microcount=0;
            }
            else {
              microcount=0;
            }
          }
        }
        else if(j!=5&&j!=0&&i!=0&i!=5){
        if(arra[i][j] == 0){
          if(arra[i][j+1]==1){
            microcount +=1;
          }
          if(arra[i][j-1]==1){
            microcount +=1;
          }
          if(arra[i-1][j]==1){
            microcount +=1;
          }
          if(arra[i+1][j]==1){
            microcount +=1;
          }

            if(microcount>2){
              count++;
              microcount=0;
            }
            else {
              microcount=0;
            }
          }
        }
      }
    }
  }
}
catch(e){

}


    alert(count);
}

function myScript3(){
btn.style.background = 'yellow';
}
