<template>
  <div>
    <!-- <p class="text-center"> Bu çok güzel bir anıdır...{{ content }}</p> -->
    <slot name="heading">
    </slot>
      <div>
    <slot name="content">
    </slot>
      </div>

      <div>
        <slot name="author">
          <h3>default content if no content came to slot</h3>
        </slot>
      </div>
  </div>
</template>
<script>

export default {
  // props : ['content'],
}
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
