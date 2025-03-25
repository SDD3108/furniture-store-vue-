import { createApp } from 'vue'
import './styles/components/reset.scss'
import './styles/components/vars.scss'
import './styles/components/mixins-extends.scss'
import './styles/components/main.scss'
import './styles/components/header.scss'
import './styles/components/footer.scss'
// import './styles/components/modal.scss'
import './styles/blocks/home.scss'
import './styles/blocks/card.scss'
import './styles/blocks/catalog.scss'
import './styles/blocks/busket.scss'
import './styles/blocks/buying.scss'
// import './styles/blocks/registration.scss'
// import './styles/blocks/login.scss'
import './styles/blocks/account.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
