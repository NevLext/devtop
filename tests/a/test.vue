<template>
    <div>
        <h2 class="some">{{ title }}</h2>
        <p>{{ message }}</p>
        <button class="some-more" @click="incrementCounter">Increment</button>
        <p>Counter: {{ counter }}</p>
        <div v-text="display" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Options API Component',
            message: 'Hello, this is an example using Vue Options API!',
            counter: 0
        }
    },
    computed: {
        display() {
            return `Maybe ${this.counter}`
        }
    },
    badFunction() {
        return 0
    },
    methods: {
        incrementCounter() {
            this.counter++
        },
        decrementCounter() {
            this.counter--
        }
    },
    mounted() {
        console.log('hello')
    }
}
</script>

<style>
.some {
    background-color: red;
}
.some-more {
    color: blue;
}
</style>
