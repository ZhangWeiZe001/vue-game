export default {
  namespaced:true,
  actions:{
   
  },
  mutations:{
    ADD_PERSON(state,value){
      state.personList.unshift(value);
    }
  }, 
  state:{
    personList:[
      {id:'001',name:'张三'},
    ]
  },
  getters:{
    firstName(state){
      return state.personList[0].name
    }
  },
}