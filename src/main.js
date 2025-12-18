import { createApp } from 'vue'
import App from './App.vue'

// ROUTER
import router from './components/router'

// CSS STYLES
import './css/style.css';

// PRIME VUE
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Initialize the app correctly
const app = createApp(App) 

app.use(router)
app.use(PrimeVue)

// PRIME VUE - COMPONENTS
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Row from 'primevue/row'; 
import InputText from 'primevue/inputtext';


app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('InputText', InputText);

app.mount('#app')