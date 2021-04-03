/**
 * Tambien se puede definir con una funcion anomima en vez de
 * pasar un Objeto como
 *
 * Vue.directive('change-styles',{
    inserted(el){
    }
  });
 *
 */
Vue.directive('change-styles', (el, binding)=>{

  binding.value.backgroundColor && (el.style.backgroundColor = binding.value.backgroundColor);
  binding.value.color && (el.style.color = binding.value.color);
  binding.value.padding && (el.style.padding = binding.value.padding);

});

