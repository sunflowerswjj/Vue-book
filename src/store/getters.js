const getters={
  count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0)
  // count(state){
  //   state.cartList.reduce((prev,next)=>{
  //       return prev+next.bookCount
  //   },0)
  // }
};
export default getters;
