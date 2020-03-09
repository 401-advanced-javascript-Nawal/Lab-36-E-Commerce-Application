/******************************************* The intial state ******************************************************/
let initialState = {
    categories : [
        { name:'Bags' , displayName : 'Bags Collections' , desp :'all about bags Categories' },
        { name:'Hats' , displayName : 'Hats Collections' , desp :'all about Hats Categories' },
        { name:'Belts' , displayName : 'Belts Collections' , desp :'all about Belts Categories' }
    ],
    products : [
        { catName : 'Bags', name: 'Gucci Bag' , desc:'famous Gucci Bag' , price: 150 , invCount : 5 },
        { catName : 'Hats', name: 'WSL Hat' , desc:'Windows WSL Hat' , price: 50 , invCount : 4 },
        { catName : 'Belts', name: 'Nike belt' , desc:'Sport Nike belt' , price: 30 , invCount : 1 }, 
        { catName : 'Shirts', name: 'React shirt' , desc:'JS React Shirt , blue' , price: 10 , invCount : 0 },
        { catName : 'Bags', name: 'Dior Bag' , desc:'Dior Bag' , price: 200 , invCount : 3 }
    ],
    activeCat : ''
} // end of initialState object 
/*********************************************** Reducer **********************************************************/ 
export default (state = initialState , action) => {

    console.log('state.products : ', state.products);
    // type = action.type , payload = action.payload  
    let { type , payload } = action;

    switch(type){
        case 'CATTOPRO':
            let activeCat = payload;
        const categories = state.categories.map(cat => {
            // console.log('cat in actions : ', cat);
            if(cat.name === payload){
              return {name:cat.name,displayName:cat.displayName,desp:cat.desp}
            }
            return cat;
        });
        console.log('state.products : ', state.products);
        const products = state.products.map( pro => {
            console.log('pro in actions : ', pro);
            if(pro.catName === payload){
                return {catName:pro.catName,name:pro.name,desc:pro.desc,price:pro.price,invCount:pro.invCount}
            }
            return pro;
        });
        // console.log('categories : ', categories);

        return {categories,products,activeCat};


        case 'RESET':
                return initialState;

        default:
            return state;
    } // end of switch 

} // end of reducer function 

/******************************************* Action Creators ******************************************************/ 
export const catToPro = (name) => {
    return {
        type:'CATTOPRO',
        payload : name
    }
}

export const reset = () => {
    return {
        type :'RESET'
    }
}


