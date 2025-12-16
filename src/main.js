import { createApp } from 'vue'
import App from './App.vue'

// PRIME VUE
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)

// PRIME VUE - COMPONENTS
import Button from 'primevue/button'
app.component('Button', Button)

app.mount('#app')
