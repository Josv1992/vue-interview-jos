<template>
    <nav class="menu navbar">
        <router-link to="/">To Do List</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/legal">Legal</router-link>
        <router-link to="/about">About</router-link>
    </nav>
</template>
<style lang="sass">
.menu 
    background-color: dimgray 
    color: white 
    height: 4rem 
    line-height: 2rem 
    padding: 1rem 
    position: fixed 
    top: 0 
    width: 100%
    box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)
    -moz-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)

</style>