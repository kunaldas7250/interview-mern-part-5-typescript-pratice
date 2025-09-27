
// async function ProductsFetch_api<t extends Array<number>|Array<string>|undefined>(params:t):Promise<any> {
//     try {
//         const responce = await fetch("https://dummyjson.com/products")
//         return responce.json() 
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//     }
// }

// async function api_result<t extends Array<number>|Array<string>|undefined>(params:t):Promise<any> {
//     try {
//        const responce = await ProductsFetch_api(params) 
//        console.log(responce.products);   // ✅ moved before return
//        return responce.products 
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//     }
// }
// api_result([]).then((item)=>{
//     if(item){
//         item.map((i:any)=>{
//             console.log(i.title);
            
//         })
//     }
// })

// interface Products {
//     id: number
//     title: string
//     description: string
//     category: string
// }

// async function Products_api_result<t extends Products>(params: t): Promise<t> {
//     try {
//         // ✅ fetch one product instead of all
//         const responce = await fetch("https://dummyjson.com/products/1")
//         return responce.json()
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//         throw error
//     }
// }

// async function api_k<t extends Products>(params: t) {
//     try {
//         const responce = await Products_api_result(params)
//         console.log(responce)   // ✅ single product object
//         return responce
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//     }
// }


//  api_k({ id: 1, title: "", description: "", category: "" })


// interface Products {
//     id: number
//     title: string
//     description: string
//     category: string
// }

// async function Products_api(id:number):Promise<Products|undefined> {
//     try {
//         const responce=await fetch(`https://dummyjson.com/products/${id}`)
//         return await responce.json() 
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//     }
// }
// async function api(id:number) {
//     try {
//         const responce=await Products_api(id)
//         if(responce){
//         console.log(responce);
//         return responce
//         }
        
        
//     } catch (error) {
//         console.error(`something went wrong ${error}`)
//     }
// }
// api(5).then((item)=>{
//     if(item){
//         console.log(item.title);
        
//     }
// })