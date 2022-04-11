export const calculateTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600); ;
    const minutes = Math.floor((seconds - (hours * 3600)) / 60); ;
    const sec =  seconds - (hours * 3600) - (minutes * 60);
    let totalHours : number | string = Math.floor(hours);
    let totalMinutes : number | string = Math.floor(minutes);
    let totalSeconds : number | string= Math.floor(sec)

    const addZero = (number:number) : string => {
        if(number < 10) return `0${number}`
        return `${number}`

    }

    

    totalHours = addZero(totalHours);
    totalMinutes = addZero(totalMinutes);
    totalSeconds = addZero(totalSeconds);
    if(!Math.floor(hours)){
        if(!Math.floor(minutes)){
            if(Math.floor(seconds) < 10){
                return `${Math.floor(sec)}`
            }
            return `${totalSeconds}`

        }
        
        return `${totalMinutes}:${totalSeconds}`
    }
    
    
    return `${totalHours}:${totalMinutes}:${totalSeconds}`
}
