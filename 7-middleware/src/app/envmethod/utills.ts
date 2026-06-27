import 'server-only'
//! .env file key ka server file sara anno file kas kola na


export async function getServerApiKey(){
    //* .env file  
    if(process.env.MY_SECRET_KEY){
        return process.env.MY_SECRET_KEY ;
    }
    return new Promise((resolve) =>setTimeout(()=>{
        //* MY_SECRET_KEY ai key na thakay new key make
        resolve("jihad12345678") ;
    },300) 
    )
}