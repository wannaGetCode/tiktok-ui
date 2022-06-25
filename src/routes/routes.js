import { Fragment } from 'react'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import NotFound from '~/pages/NotFound'
import Login from '~/pages/Login'
import { HeaderOnly, FullLayout } from '~/layouts'
import Feedback from '~/pages/Feedback'
import Coin from '~/pages/Coin'
import Setting from '~/pages/Setting'
import config from '~/config'

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile, layout: FullLayout },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: Fragment },
  { path: config.routes.notFound, component: NotFound, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: Fragment },
  { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
  { path: config.routes.coin, component: Coin, layout: HeaderOnly },
  { path: config.routes.settings, component: Setting, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
