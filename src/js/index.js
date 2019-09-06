import './utils/console.js';
import Router from '@nocapdeveloper/router';

const titles = {
  '/': 'Home'
};

let router = new Router(titles);
router.on('/', () => console.log('Handle root route here'));
router.on('/some/:subpage', e => console.log('/some/' + e.subpage));
router.on('404', () => console.log('Not Found'));
router.goTo(location.pathname);