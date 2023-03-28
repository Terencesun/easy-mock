import Vue from 'vue'
import Router from 'vue-router'

import docs from 'pages/docs'
import login from 'pages/login'
import group from 'pages/group'
import project from 'pages/project'
import profile from 'pages/profile'
import createProject from 'pages/new'
import logOut from 'components/log-out'
import dashboard from 'pages/dashboard'
import detail from 'pages/project-detail'
import layout from 'components/layout/index'

import conf from 'config'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      { name: 'login', path: `${conf.serverPublicPath}/login`, component: login },
      { name: 'log-out', path: `${conf.serverPublicPath}/log-out`, component: logOut },
      {
        path: conf.serverPublicPath ? conf.serverPublicPath : '/',
        component: layout,
        children: [
          { name: 'p', path: '/', component: project },
          { name: 'p-workbench', path: 'workbench', component: project },
          { name: 'p-group_id', path: 'group/:id', component: project },
          { name: 'p-group', path: 'group', component: group },
          { name: 'p-docs', path: 'docs', component: docs },
          { name: 'p-changelog', path: 'changelog', component: docs },
          { name: 'p-dashboard', path: 'dashboard', component: dashboard },
          { name: 'p-profile', path: 'profile', component: profile },
          { name: 'p-new', path: 'new', component: createProject },
          { name: 'p-project_id', path: 'project/:id', component: detail }
        ]
      }
    ]
  })

  return router
}
