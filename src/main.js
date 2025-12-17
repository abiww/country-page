import { createApp } from 'vue'
import App from './App.vue'

// CSS STYLES
import './css/style.css';

// PRIME VUE
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)

// PRIME VUE - COMPONENTS
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);

import Dropdown from 'primevue/dropdown';
app.component('Dropdown', Dropdown);

import Checkbox from 'primevue/checkbox';
app.component('Checkbox', Checkbox);

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Row from 'primevue/row';                  
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);

app.mount('#app')
