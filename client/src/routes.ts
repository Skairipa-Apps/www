import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Refund from "./pages/refund";
import Terms from "./pages/terms";
import PrivacyRights from "./pages/privacyRights";
import Cookies from "./pages/cookies";
import SubscriptionTerms from "./pages/subscriptionTerms";
import NotFound from "./pages/not-found";

export const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/about", component: About },
  { path: "/careers", component: Careers },
  { path: "/contact", component: Contact },
  { path: "/privacy", component: Privacy },
  { path: "/refund-policy", component: Refund },
  { path: "/terms", component: Terms },
  { path: "/privacy-rights", component: PrivacyRights },
  { path: "/cookies", component: Cookies },
  { path: "/subscription-terms", component: SubscriptionTerms },
  { path: "*", component: NotFound },
];
