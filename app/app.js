import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import RadListView from 'nativescript-ui-listview/vue';
import contentTools from './shared/contentTools'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon'

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './assets/font-awesome.css'
};
TNSFontIcon.loadCss();

Vue.use(RadSideDrawer);
Vue.use(RadListView);

Vue.filter('fonticon', fonticon)

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
