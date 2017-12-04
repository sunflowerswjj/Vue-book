import * as Types from "./mutations-type"
const mutations={
    [Types.ADD_CART](state,book){
      let product=state.cartList.find(item=>item.bookId==book.bookId);
      if(product){
        book.bookCount+=1;
        state.cartList=[...state.cartList];
        // localStorage.setItem("data",JSON.stringify(state.cartList));
      }else {
        book.bookCount=1;
        state.cartList=[...state.cartList,book];
        // localStorage.setItem("data",JSON.stringify(state.cartList));
      }


    },
    // [Types.CHANGE_CART](state,book,type){
    //   let product=state.cartList.find(item=>item.bookId==book.bookId);
    //   if(type=="increase"){
    //     if(product){
    //       book.bookCount+=1;
    //       state.cartList=[...state.cartList];
    //     }
    //   }else if(type="decrease"){
    //     if(product>=1){
    //       book.bookCount-=1
    //       state.cartList=[...state.cartList];
    //     }
    //   }
    //
    // }
};
export default mutations;
