import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import sessionData from '@/assets/session.json';
export const createApp = ViteSSG(
  App,
  {
    base: '/2022/',
    routes: [
      // 
      ...Object.entries(import.meta.glob('./pages/**/*.vue')).map(
        ([p, component]) => {
          const PAGE_DIR = '../pages'
          const PAGE_EXT = '.vue'
          const PAGE_INDEX = 'index'

          let path = p.substring(PAGE_DIR.length, p.length - PAGE_EXT.length)
          if (path.endsWith(PAGE_INDEX)) {
            path = path.substring(0, path.length - PAGE_INDEX.length - 1)
          }
          if (!path) {
            path = '/'
          }
          if (!path.startsWith('/')) {
            path = '/' + path
          }
          return {
            path,
            component,
          }
        },
      ),
      ...sessionData.sessions
        .map(x => x.id)
        .map(x => ({
          path: `/agenda/${x}`,
          component: () => import(`./pages/agenda.vue`),
          meta: {
            id: x,
          }
        }))
    ]
  },
  ({ app, router, routes, isClient, initialState }) => {

  },
) 