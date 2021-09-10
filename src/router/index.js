import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from "../views/coaches/CoachDetails.vue";
import CoachesList from "../views/coaches/CoachesList.vue";
import CoachRegistration from "../views/coaches/CoachRegistration.vue";

import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    name: "Coach Info",
    component: CoachDetails,
    children: [
      {
        path: "contact",
        name: "Coach Contact",
        component: ContactCoach,
      },
    ],
  },
  {
    path: "/register",
    name: "Coach Registration",
    component: CoachRegistration,
  },
  {
    path: "/requests",
    name: "Requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    name: "Not found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
