// export default defineEventHandler((evt)=>{
//     const result = fetch('https://dummyjson.com/products',evt)
//     .then(res => res.json())
//     // .then(console.log);

//     return result
// })

export default defineEventHandler((evt)=> ({
   path : "https://dummyjson.com/products",
   query : getQuery(evt)
}))