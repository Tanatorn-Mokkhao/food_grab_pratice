import '../styles/globals.css'
import { Provider } from "react-redux"
import store from "../store/store"
import { createWrapper } from 'next-redux-wrapper'

if (typeof window !== "undefined") { 
  window.store = store;
}

function MyApp ({ Component, pageProps }){
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => { 
  console.log('hello world')
  let pageProps = {};

  if (appContext.Component.getInitialProps) { 
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return pageProps
}





const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)