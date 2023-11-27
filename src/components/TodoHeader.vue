<template>
  <div class="todo-header">
    <input type="text" placeholder="输入你的任务, 按回车确认!" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: "TodoHeader",
    data() {
        return {
            title: '',
        }
    },
    methods: {
        add() {
            if(!this.title.trim()) {
                alert('输入不能为空!')
            }
            const todoObj = {
                id: nanoid(),
                title: this.title,
            }
            this.$emit('addTodo', todoObj)
            this.title = ''
        }
    }

}
</script>

<style>

</style>