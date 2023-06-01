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
    component: () => import('../views/HowAIWorks.vue'),
    meta: {title: 'How AI Works - Government and AI'}
  },
  {
    path: '/ai-ethics',
    name: 'ai-ethics',
    component: () => import('../views/AIEthics.vue'),
    meta: {title: 'AI Ethics - Government and AI'}
  },
  {
    path: '/the-current-impact-of-ai',
    name: 'the-current-impact-of-ai',
    component: () => import('../views/TheCurrentImpactOfAI.vue'),
    meta: {title: 'The Current Impact Of AI - Government and AI'}
  },
  {
    path: '/the-future-impact-of-ai',
    name: 'the-future-impact-of-ai',
    component: () => import('../views/TheFutureImpactOfAI.vue'),
    meta: {title: 'The Future Impact Of AI - Government and AI'}
  },
  {
    path: '/the-opportunities-and-challenges-of-ai',
    name: 'the-opportunities-and-challenges-of-ai',
    component: () => import('../views/TheOpportunitiesAndChallengesOfAI.vue'),
    meta: {title: 'The Opportunities and Challenges of AI - Government and AI'}
  },
  {
    path: '/conclusions',
    name: 'conclusions',
    component: () => import('../views/Conclusions.vue'),
    meta: {title: 'Conclusions - Government and AI'}
  },
  {
    path: '/citations',
    name: 'citations',
    component: () => import('../views/Citations.vue'),
    meta: {title: 'Citations - Government and AI'}
  }
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
