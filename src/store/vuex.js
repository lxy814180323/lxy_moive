import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city: '地球',
        _token: '',
    },
    mutations: {
        setCity:function(state,cityName){
            state.city = cityName ;
        },
        updateToken:function(state,_token){
            state._token = _token 
            localStorage.setItem("_token",_token);
        }
    }

})

