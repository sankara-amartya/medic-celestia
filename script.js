        let arr=new Array(5).fill(0);

        function calculateOutcome() {
           let total=0;
           for(i=0;i<arr.length;i++){
            if(arr[i]==0){
                console.log("Enter ans to all quizes");
                return;
            }
            total+=arr[i];
           }

            const outcome = (total / 50) * 50;

            const outcomeElement = document.getElementById("outcome");
            outcomeElement.textContent = `Your outcome out of 50 is: ${outcome}`;
        }
    
        addScore=(value,index)=>{
            arr[index]=value;
            console.log(arr[index]);
        }