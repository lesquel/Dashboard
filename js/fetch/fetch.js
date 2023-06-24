export const ajax = async (url)=>{
    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText)
        let json = await res.json()
        
        return json
    } catch (error) {
        console.log(error)   
    }
}