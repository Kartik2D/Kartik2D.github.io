Vue.component('vid', {
  props: ['path'],
  template: `
  	<div class="vid-container">
 	<video loop autoplay class="vid" onclick="play()" onmouseover="play()" muted playsinline>
		<source :src='path' type="video/mp4">
	</video>
	</div>
  `,
})

Vue.component('vidcontrol', {
  props: ['path'],
  template: `
  	<div class="vid-container">
 	<video class="vid" controls loop playsinline>
		<source :src='path' type="video/mp4">
	</video>
	</div>
  `,
})

Vue.component('kvimg', {
  props: ['path'],
  template: `
  	<div class="vid-container">
  	<img :src='path' class="vid"></img>
	</div>
  `,
})




var app = new Vue({
  el: '#app',
  data: {
//     message: 'Hello Vue!'
  }
});