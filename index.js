{
    function migatoryBirds(arr) {
        let seenBirds = {}

        arr.forEach(bird => { 
            if(!seenBirds[bird]) {
                seenBirds[bird] = 1
            }else{
                seenBirds[bird]++
            }
            
        })

        let birdId = 999;
        let total = 0;

        for(let key in seenBirds){
            //is it seen more?
            if(seenBirds[key] > total){
                total = seenBirds[key]
                birdId = key
            } else if(seenBirds[key] == total) {
                // is it the same?
                //is the birds id less than the current birdID
                if(birdId > key){
                birdId = key
                }
            }
        }
    
    return birdId
}
    let arr = [1,4,4,4,5,3] //4
    // let arr = [1 ,2 ,3 ,4 ,5 ,4 ,3 ,2 ,1 ,3 ,4]  
    //3

    migatoryBirds(arr)
}

