window.onload = function(){
    var incrementBtn = document.getElementById('increment-btn');
    let width = 0;
    var increaseProgress = function(){
        if(width <100){
            width = width + 10;
            document.getElementById('inner').style.width = width + '%';
            document.getElementById('inner').textContent = width + '%';
        }else{
            incrementBtn.removeEventListener("click", increaseProgress);
        }
        
    }
    incrementBtn.addEventListener("click", increaseProgress);
    function getCount(){
        var str = 'helloo';
    var strLength = str.length;
    var strObj = {};
    for(let i=0; i<strLength; i++){
        let j=0;
        if(strObj[str[i]]){

            strObj[str[i]] = strObj[str[i]] + 1;
       }else{
        strObj[str[i]] = 1;
       }
        
       
    }
    console.log(strObj);
    }
    
    getCount();
}