//求和相关配置
export default {
    namespaced:true,
    actions:{
      jiaOdd(context,value){
        if(context.state.sum %2){
           context.commit('JIAODD',value) 
        }
      },
    
      jiaWait(context,value){
        setTimeout(()=>{
           context.commit('JIAWAIT',value);
        },500)
      }
    },
    mutations:{
      JIA(state,value){
        console.log('JIA被调用了');
        state.sum +=value;
      },
    
      JIAN(state,value){
        state.sum -=value
      },
      
      JIAODD(state,value){
        state.sum +=value;
      },
    
      JIAWAIT(state,value){
        state.sum += value;
      },
    },
    state:{
      sum:0,
      school:'科技中专',
      subject:'汽车维修',
    },
    getters:{
      bigSum(state){
        return state.sum*10
      }
    },
  }