import {createStore} from 'vuex'

export default {
    //开启命名空间
    namespaced:true,
    state:{
        sum:2,
    },

    actions:{

    },

    mutations:{
        JIA(state,value){
        console.log('A中的JIA被调用了');
        state.sum +=value;
      },
    
    }
}