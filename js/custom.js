document.getElementById("btnSubmit").addEventListener("click", ranNums);


function ranNums(){
    

    let randNums = document.getElementById("ranNums")
    let input = parseInt(document.getElementById("fearInput").value)
    let outPut3 = document.getElementById("Sums")

    outPut3.innerText == ""

    let randomGen = [];
    for (let index=0; index < 10; index++) {  
        randomGen.push(Math.floor( Math.random () * 20) +1 );
    }
    randNums.innerHTML = randomGen;

    // Loop over randomGen
    for (let index = 0; index < randomGen.length-1; index++) {
        let value = randomGen[index];
        if(randomGen.includes(input-value,index+1)){
            outPut3.innerText = `${input} was found in the array`;
            break;
        }  
    }
    if (outPut3.innerText == ""){
        outPut3.innerText = `${input} was not found in the array`;
    }

}



