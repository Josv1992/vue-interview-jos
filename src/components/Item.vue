<template>
  <div class="item">
    <slot></slot>
    <button class="remove">
        Remove
    </button>
  </div>
</template>
<style>
.item {
  height: 3rem;
  padding: 0.5rem 2rem;
  line-height: 2rem;
  border-bottom: 1px solid #f0f0f0;
}
.remove {
    background-color: crimson;
}
</style>
