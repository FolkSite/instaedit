Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#app',
  data: {
    input: '',
    showModal: true
  },
  methods: {
    onInput() {
      this.input = this.input.split('!hi').join('👋')
        .split('!heart').join('💕')
        .split('!monkey').join('🙈')
        .split('!lol').join('😂')
        .split('!love').join('😍')
        .split('!cup').join('☕️')
        .split('!thumb').join('👍')
        .split('!drop').join('💧')
        .split('!wink').join('😉')
        .split('!fire').join('🔥')
        .split('!down').join('👇')
        .split('!two').join('✌️')
    },
    onEnter(e) {
      var pos = e.target.selectionEnd
      this.input = this.input.slice(0, pos) + '⠀\n' + this.input.slice(pos)
      this.$nextTick(() => e.target.selectionEnd = pos + 2)
    }
  }
});

const button = document.getElementById('copy');
const inputText = document.getElementById('input-text');
const clipboard = new Clipboard('.copy-text');

function setFocus() {
  inputText.focus();
}

function defaultBtn() {
  button.textContent = 'Копировать'
  button.style.backgroundColor = 'transparent';
  button.style.color = '#007AFF';
}

button.addEventListener('click', function() {
  if (inputText.value.length > 0) {
    this.textContent = 'Готово!'
    this.style.backgroundColor = '#007AFF';
    this.style.color = 'white';
    setTimeout(defaultBtn, 2000);
  }
})

inputText.addEventListener('click', function() {
  this.textContent = ''
})
