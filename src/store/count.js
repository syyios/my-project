// count组件相关配置
export default {
    namespaced: true,
    actions: {
        additionWithOddNumber(context, value){
            if(context.state.sum % 2) {
                context.commit('addition', value)
            }
        },
        additionWait(context, value){
            setTimeout(() => {
                context.commit('addition', value)
            }, 500)
        }
    },
    mutations: {
        addition(state, value) {
            state.sum += value
        },
        substruction(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        location: 'Cognizant',
        subject: 'Vue',
    },

    getters: {
        bigSum(state){
            return state.sum * 10
        }
    }
}