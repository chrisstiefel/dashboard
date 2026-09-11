//
// SPDX-FileCopyrightText: Contributors to the Gardener project
//
// SPDX-License-Identifier: Apache-2.0
//

// Components
import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import App from './App.vue'

// Composables

// Plugins

// protect against Prototype Pollution vulnerabilities
for (const ctor of [Object, Function, Array, String, Number, Boolean]) {
  Object.freeze(ctor)
  Object.freeze(ctor.prototype)
}

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
