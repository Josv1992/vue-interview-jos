<template>
    <header>
<div>
  <b-navbar class="menu" toggleable="lg" type="dark">
    <b-navbar-brand><router-link to="/">To Do List</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
        <b-nav-item><router-link to="/legal">Legal</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </header>
</template>
<style lang="sass">
.menu 
    background-color: dimgray
    color: white
    // height: 4rem 
    // line-height: 2rem 
    // padding: 1rem 
    // position: fixed 
    // top: 0 
    // width: 100%
    box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)
    -moz-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.33)

</style>