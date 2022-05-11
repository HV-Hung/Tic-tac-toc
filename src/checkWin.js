

const checkGame = (mapGame) =>{

    //3 Kiểm tra 3 cột ngang
    if(mapGame[0] !== 0 && mapGame[0] === mapGame[1] && mapGame[0]=== mapGame[2] ){
        return true;
    }
    if(mapGame[3] !== 0 && mapGame[3] === mapGame[4] && mapGame[3]=== mapGame[5] ){
        return true;
    }
    if(mapGame[6] !== 0 && mapGame[6] === mapGame[7] && mapGame[6]=== mapGame[8] ){
        return true;
    }
    //kiểm tra 3 cột dọc
    if(mapGame[0] !== 0 && mapGame[3] === mapGame[0] && mapGame[0]=== mapGame[6] ){
        return true;
    }
    if(mapGame[1] !== 0 && mapGame[1] === mapGame[4] && mapGame[1]=== mapGame[7] ){
        return true;
    }
    if(mapGame[2] !== 0 && mapGame[2] === mapGame[5] && mapGame[2]=== mapGame[8] ){
        return true;
    }
    //Kiểm tra 2 đường chéo
    if(mapGame[0] !== 0 && mapGame[0] === mapGame[4] && mapGame[0]=== mapGame[8] ){
        return true;
    }
    if(mapGame[2] !== 0 && mapGame[2] === mapGame[4] && mapGame[2]=== mapGame[6] ){
        return true;
    }

    else return false;
}
export default checkGame;