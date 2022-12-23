import Cookies from 'js-cookie';

export default defineNuxtRouteMiddleware((to, from) => {
  console.debug('middleware/authMiddleware/to', to); //DELETE
  console.debug('middleware/authMiddleware/from', from); //DELETE

  const token: UserToken = Cookies.get('token') || '';

  console.debug('middleware/authMiddleware/cookie/token', token); //DELETE

  if (token) {
    console.debug('middleware/authMiddleware/have-token'); //DELETE

    if (to.name === 'signin') {
      return navigateTo('/');
    }
  } else {
    console.debug('middleware/authMiddleware/dont-have-token'); //DELETE

    if (to.name !== 'signin') {
      return navigateTo('/signin');
    }
  }

  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }

  // return navigateTo('/')
});