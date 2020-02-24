Vue.component('vid', {
  props: ['path'],
  template: `
  	<div class="vid-container">
 	<video loop class="vid" autoplay muted playsinline>
		<source :src='path' type="video/mp4">
	</video>
	</div>
  `,
})

var app = new Vue({
  el: '#app',
  data: {
//     message: 'Hello Vue!'
  }
});