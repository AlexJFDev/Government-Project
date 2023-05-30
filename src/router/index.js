import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {title: 'Home - Government and AI'}
  },
  {
    path: '/how-ai-works',
    name: 'how-ai-works',
    component: () => import('../views/HowAIWorksView.vue'),
    meta: {title: 'How AI Works - Government and AI'}
  },
  {
    path: '/ai-ethics',
    name: 'ai-ethics',
    component: () => import('../views/AIEthicsView.vue'),
    meta: {title: 'AI Ethics - Government and AI'}
  },
  {
    path: '/the-current-impact-of-ai',
    name: 'the-current-impact-of-ai',
    component: () => import('../views/TheCurrentImpactOfAIView.vue'),
    meta: {title: 'The Current Impact Of AI - Government and AI'}
  },
  {
    path: '/the-future-impact-of-ai',
    name: 'the-future-impact-of-ai',
    component: () => import('../views/TheFutureImpactOfAIView.vue'),
    meta: {title: 'The Future Impact Of AI - Government and AI'}
  },
  {
    path: '/the-opportunities-and-challenges-of-ai',
    name: 'the-opportunities-and-challenges-of-ai',
    component: () => import('../views/TheOpportunitiesAndChallengesOfAIView.vue'),
    meta: {title: 'The Opportunities and Chellenges of AI - Government and AI'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Government and AI'
  }
  next()
})

export default router
