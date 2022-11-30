import { createApp } from 'vue'
import AdminMaster from './components/AdminMaster.vue'
import router from './router'
import store from './store'

import Vuesax from 'vuesax3'
import ElementPlus from 'element-plus'
import Notifications from '@kyvg/vue3-notification'

import 'element-plus/dist/index.css'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// import { QuillEditor } from '@vueup/vue-quill'

import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(AdminMaster)

app.component('admin-master', AdminMaster)

app.use(Vuesax)
app.use(ElementPlus)
app.use(Notifications)

// app.use(mavonEditor)

// app.component('QuillEditor', QuillEditor)

app.use(CKEditor)

app.use(router)
app.use(store)

app.mount('#admin')
