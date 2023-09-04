<script lang="ts">
const name = 'World';

function onClick(e: Event) {
  console.log(e);
}
</script>

<h1>Hello {name}!</h1>
<label for="input" tabindex="0" on:click={onClick}>Click me</label>
<input id="input">
