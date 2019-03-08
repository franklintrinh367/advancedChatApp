;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    49: function(e, t, a) {},
    55: function(e, t, a) {
      e.exports = a(92)
    },
    60: function(e, t, a) {},
    61: function(e, t, a) {},
    64: function(e, t, a) {},
    65: function(e, t, a) {},
    66: function(e, t, a) {},
    88: function(e, t) {},
    92: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(1),
        r = a.n(n),
        s = a(20),
        c = a.n(s),
        o = (a(60), a(8)),
        l = a(9),
        m = a(12),
        i = a(10),
        u = a(11),
        h = (a(61), a(93)),
        d = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(m.a)(this, Object(i.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'nav',
                    {
                      className:
                        'navbar navbar-expand-lg navbar-light bg-light',
                    },
                    r.a.createElement(
                      h.a,
                      { className: 'navbar-brand', to: '/' },
                      'Chat App'
                    ),
                    r.a.createElement(
                      'button',
                      {
                        className: 'navbar-toggler',
                        type: 'button',
                        'data-toggle': 'collapse',
                        'data-target': '#navbarNavDropdown',
                        'aria-controls': 'navbarNavDropdown',
                        'aria-expanded': 'false',
                        'aria-label': 'Toggle navigation',
                      },
                      r.a.createElement('span', {
                        className: 'navbar-toggler-icon',
                      })
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className: 'collapse navbar-collapse',
                        id: 'navbarNavDropdown',
                      },
                      r.a.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        r.a.createElement(
                          'li',
                          { className: 'nav-item ' },
                          r.a.createElement(
                            h.a,
                            { className: 'nav-link', to: '/rooms' },
                            'Room Chat'
                          )
                        ),
                        r.a.createElement(
                          'li',
                          { className: 'nav-item' },
                          r.a.createElement(
                            h.a,
                            { className: 'nav-link', to: '/users' },
                            'Users'
                          )
                        ),
                        r.a.createElement(
                          'li',
                          { className: 'nav-item' },
                          r.a.createElement(
                            h.a,
                            { className: 'nav-link', to: '/eventHistory' },
                            'Event History'
                          )
                        ),
                        r.a.createElement(
                          'li',
                          { className: 'nav-item' },
                          r.a.createElement(
                            h.a,
                            { className: 'nav-link', to: '/chatHistory' },
                            'Chat History'
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        v = a(3),
        E = (a(64), a(50)),
        p = a(94),
        f = a(104),
        g = a(95),
        b = a(101),
        N = (function(e) {
          function t(e) {
            var a
            return (
              Object(o.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).handleJoin = function(e) {
                var t = a.props.socket,
                  n = new Date(),
                  r = n.toLocaleDateString(),
                  s = n.toLocaleTimeString(),
                  c = r + ' ' + s
                console.log(e),
                  t.emit('joinRoom', {
                    roomName: e,
                    userName: a.state.username,
                    date: r,
                    time: s,
                    timeStamp: c,
                  })
              }),
              (a.renderRooms = function() {
                return a.state.rooms.map(function(e, t) {
                  return r.a.createElement(
                    'tr',
                    { key: t },
                    r.a.createElement('th', { scope: 'row' }, t + 1),
                    r.a.createElement('td', null, e.name),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement(
                        h.a,
                        {
                          to: '/chat/'
                            .concat(e.name, '&')
                            .concat(a.state.username),
                        },
                        r.a.createElement(
                          E.a,
                          {
                            color: 'info',
                            onClick: function() {
                              return a.handleJoin(e.name)
                            },
                          },
                          'Join'
                        )
                      )
                    )
                  )
                })
              }),
              (a.handleChange = function(e) {
                a.setState({ roomName: e.target.value })
              }),
              (a.createRoom = function() {
                var e = a.props.socket,
                  t = a.state.roomName
                e.emit('createRoom', { name: t }),
                  e.on('createFail', function(e) {
                    a.setState({ errors: e.message, success: '' })
                  })
              }),
              (a.selectUser = function(e) {
                a.setState({
                  dropdownOpen: !a.state.dropdownOpen,
                  username: e.target.innerText,
                })
              }),
              (a.renderUsers = function() {
                return a.state.users.map(function(e, t) {
                  return r.a.createElement(
                    p.a,
                    { key: t, onClick: a.selectUser },
                    e.name
                  )
                })
              }),
              (a.toggle = a.toggle.bind(Object(v.a)(Object(v.a)(a)))),
              (a.state = {
                roomName: '',
                rooms: [],
                errors: '',
                success: '',
                dropDownOpen: !1,
                users: [],
                username: 'Anonymous',
              }),
              a
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  fetch('/room/get/all')
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      e.setState({ rooms: t })
                    })
                  var t = this.props.socket
                  fetch('/user/get/all')
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      e.setState({ users: t })
                    }),
                    t.on('createSuccess', function(t) {
                      var a = e.state.rooms
                      a.push(t.newRoom),
                        e.setState({ rooms: a, success: t.message, errors: '' })
                    })
                },
              },
              {
                key: 'toggle',
                value: function() {
                  this.setState({ dropdownOpen: !this.state.dropdownOpen })
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      'div',
                      { className: 'dropdown-user' },
                      r.a.createElement(
                        f.a,
                        {
                          direction: 'right',
                          isOpen: this.state.dropdownOpen,
                          toggle: this.toggle,
                        },
                        r.a.createElement(g.a, { caret: !0 }, 'Choose a User'),
                        r.a.createElement(b.a, null, this.renderUsers())
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'ml-100' },
                      r.a.createElement(
                        'h2',
                        null,
                        'You will be joining a room as ',
                        r.a.createElement('b', null, ' ', this.state.username)
                      )
                    ),
                    r.a.createElement(
                      'table',
                      { className: 'table rooms-table-container' },
                      r.a.createElement(
                        'thead',
                        { className: 'thead-dark' },
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement('th', { scope: 'col' }, '#'),
                          r.a.createElement('th', { scope: 'col' }, 'Rooms'),
                          r.a.createElement('th', null)
                        )
                      ),
                      r.a.createElement('tbody', null, this.renderRooms())
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'container1' },
                      r.a.createElement(
                        'div',
                        { className: 'rooms-container' },
                        r.a.createElement('input', {
                          type: 'text',
                          placeholder: 'Create room',
                          value: this.state.roomName,
                          onChange: this.handleChange,
                        }),
                        r.a.createElement(
                          E.a,
                          { color: 'info', onClick: this.createRoom },
                          'Create'
                        )
                      ),
                      this.state.errors &&
                        r.a.createElement(
                          'p',
                          { className: 'error-container' },
                          r.a.createElement('small', null, this.state.errors)
                        ),
                      this.state.success &&
                        r.a.createElement(
                          'p',
                          { className: 'success-container' },
                          r.a.createElement('small', null, this.state.errors)
                        )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        y = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(m.a)(this, Object(i.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'landing' },
                    r.a.createElement(
                      'div',
                      { className: 'dark-overlay landing-inner' },
                      r.a.createElement(
                        'div',
                        { className: 'container' },
                        r.a.createElement(
                          'div',
                          { className: 'row' },
                          r.a.createElement(
                            'div',
                            { className: 'col-md-12 text-center' },
                            r.a.createElement(
                              'h1',
                              { className: 'display-3 mb-4' },
                              'Chat App'
                            ),
                            r.a.createElement(
                              'p',
                              { className: 'lead' },
                              'Welcome to a Chat App using React and Socket.IO'
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        k = (a(65),
        (function(e) {
          function t(e) {
            var a
            return (
              Object(o.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(i.a)(t).call(this, e)
              )).renderUsers = function() {
                return a.state.users.map(function(e, t) {
                  return r.a.createElement(
                    'tr',
                    { key: t },
                    r.a.createElement('th', { scope: 'row' }, t + 1),
                    r.a.createElement('td', null, e.name)
                  )
                })
              }),
              (a.handleChange = function(e) {
                a.setState({ userName: e.target.value })
              }),
              (a.registerUser = function() {
                var e = a.props.socket,
                  t = a.state.userName
                e.emit('registerUser', { name: t }),
                  e.on('registerFail', function(e) {
                    a.setState({ errors: e.message, success: '' })
                  })
              }),
              (a.state = { userName: '', users: [], errors: '', success: '' }),
              a
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  fetch('/user/get/all')
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      e.setState({ users: t })
                    }),
                    this.props.socket.on('registerSuccess', function(t) {
                      var a = e.state.users
                      a.push(t.newUser),
                        e.setState({ users: a, success: t.message, errors: '' })
                    })
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      'table',
                      { class: 'table users-table-container' },
                      r.a.createElement(
                        'thead',
                        { class: 'thead-dark' },
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement('th', { scope: 'col' }, '#'),
                          r.a.createElement('th', { scope: 'col' }, 'Users')
                        )
                      ),
                      r.a.createElement('tbody', null, this.renderUsers())
                    ),
                    r.a.createElement(
                      'div',
                      { class: 'container1' },
                      r.a.createElement(
                        'div',
                        { class: 'users-container' },
                        r.a.createElement('input', {
                          type: 'text',
                          placeholder: 'Create user',
                          value: this.state.roomName,
                          onChange: this.handleChange,
                        }),
                        r.a.createElement(
                          E.a,
                          { color: 'info', onClick: this.registerUser },
                          'Register'
                        )
                      ),
                      this.state.errors &&
                        r.a.createElement(
                          'p',
                          { class: 'error-container' },
                          r.a.createElement('small', null, this.state.errors)
                        ),
                      this.state.success &&
                        r.a.createElement(
                          'p',
                          { class: 'success-container' },
                          r.a.createElement('small', null, this.state.errors)
                        )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)),
        O = (a(66), a(96)),
        j = a(97),
        S = a(98),
        w = (function(e) {
          function t() {
            var e
            return (
              Object(o.a)(this, t),
              ((e = Object(m.a)(
                this,
                Object(i.a)(t).call(this)
              )).isActiveUser = function(t) {
                var a = !0,
                  n = !1,
                  r = void 0
                try {
                  for (
                    var s, c = e.state.activeUsers[Symbol.iterator]();
                    !(a = (s = c.next()).done);
                    a = !0
                  ) {
                    if (s.value.name === t) return !0
                  }
                } catch (o) {
                  ;(n = !0), (r = o)
                } finally {
                  try {
                    a || null == c.return || c.return()
                  } finally {
                    if (n) throw r
                  }
                }
                return !1
              }),
              (e.removeActiveUser = function(t) {
                for (var a = e.state.activeUsers, n = 0; n < a.length; n++)
                  a[n].name === t && a.splice(n, 1)
                e.setState({ activeUsers: a })
              }),
              (e.getActiveUsers = function() {
                return e.state.activeUsers.map(function(e, t) {
                  return r.a.createElement(
                    'p',
                    { key: t },
                    r.a.createElement('span', { className: 'dot dot-success' }),
                    ' ',
                    e.name
                  )
                })
              }),
              (e.getEvents = function() {
                return e.state.events.map(function(e, t) {
                  return r.a.createElement(
                    'div',
                    { key: t },
                    '['.concat(e.timeStamp, ']  ').concat(e.event)
                  )
                })
              }),
              (e.messageChange = function(t) {
                e.setState({ message: t.target.value })
              }),
              (e.getMessages = function() {
                return e.state.messageLog.map(function(e, t) {
                  return r.a.createElement(
                    'div',
                    { key: t },
                    r.a.createElement(
                      'span',
                      { className: 'mw' },
                      e.message,
                      ' '
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'right-0' },
                      r.a.createElement('i', null, ' ', e.timeStamp),
                      ' '
                    )
                  )
                })
              }),
              (e.handleSend = function(t) {
                var a = e.props.socket,
                  n = new Date(),
                  r = n.toLocaleDateString(),
                  s = n.toLocaleTimeString(),
                  c = r + ' ' + s
                a.emit('chat', {
                  room: t,
                  user: e.state.userName,
                  message: e.state.message,
                  timeStamp: c,
                  date: r,
                  time: s,
                })
              }),
              (e.state = {
                roomName: '',
                userName: '',
                message: '',
                activeUsers: [],
                events: [],
                messageLog: [],
                error: '',
              }),
              e
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this,
                    t = this.props.match.params.name.replace('%20', ' '),
                    a = this.props.match.params.username,
                    n = this.state.activeUsers
                  this.setState({ roomName: t, userName: a })
                  var r = this.props.socket
                  fetch('/room/get/'.concat(t))
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      var a = []
                      t.chatHistories.map(function(e) {
                        a.push({
                          message: ''
                            .concat(e.userName, ': ')
                            .concat(e.message),
                          timeStamp: e.timestamp,
                        })
                      })
                      var n = []
                      t.eventHistories.map(function(e) {
                        'JOIN_ROOM' === e.type
                          ? n.unshift({
                              event: ''.concat(e.username, ' joined this room'),
                              timeStamp: e.timeStamp,
                            })
                          : 'LEAVE_ROOM' === e.type &&
                            n.unshift({
                              event: ''.concat(e.username, ' left this room'),
                              timeStamp: e.timeStamp,
                            })
                      }),
                        e.setState({ messageLog: a, events: n })
                    }),
                    r.on('chat', function(t) {
                      var a = e.state.messageLog
                      a.push({
                        message: ''.concat(t.user, ': ').concat(t.message),
                        timeStamp: t.timeStamp,
                      })
                      var n = e.state.activeUsers
                      e.isActiveUser(t.user) || n.push({ name: t.user }),
                        e.setState({ messageLog: a, activeUsers: n })
                    })
                  var s = new Date(),
                    c = s.toLocaleDateString(),
                    o = s.toLocaleTimeString(),
                    l = c + ' ' + o
                  r.emit('activeUser', {
                    userName: a,
                    roomName: t,
                    date: c,
                    time: o,
                    timeStamp: l,
                  }),
                    r.on('leftGroup', function(t) {
                      var a = e.state.events
                      a.unshift({
                        event: ''.concat(t.userName, ' has left this room'),
                        timeStamp: t.timeStamp,
                      }),
                        e.setState({ events: a }),
                        e.isActiveUser && e.removeActiveUser(t.userName)
                    }),
                    r.on('activeUser', function(t) {
                      var a = e.state.events
                      n.push({ name: t.userName }),
                        a.unshift({
                          event: ''.concat(t.userName, ' joined this room'),
                          timeStamp: t.timeStamp,
                        }),
                        e.setState({ activeUsers: n, events: a })
                    })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  var e = this.props.socket,
                    t = new Date(),
                    a = t.toLocaleDateString(),
                    n = t.toLocaleTimeString(),
                    r = a + ' ' + n
                  e.emit('leftGroup', {
                    roomName: this.state.roomName,
                    userName: this.state.userName,
                    date: a,
                    time: n,
                    timeStamp: r,
                  })
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement(
                      'h1',
                      null,
                      ' Room ',
                      this.state.roomName
                    ),
                    r.a.createElement(
                      h.a,
                      { to: '/rooms' },
                      r.a.createElement(
                        E.a,
                        { className: 'leaveBtn', color: 'secondary' },
                        'Leave Room'
                      )
                    ),
                    r.a.createElement(
                      j.a,
                      null,
                      r.a.createElement(
                        S.a,
                        { xs: '3' },
                        r.a.createElement(
                          'div',
                          { className: 'window' },
                          r.a.createElement(
                            'div',
                            { className: 'window-head' },
                            r.a.createElement('h2', null, 'Active User')
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'list' },
                            this.getActiveUsers()
                          )
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        null,
                        r.a.createElement(
                          'div',
                          { id: 'mario-chat' },
                          r.a.createElement('h2', null, 'Chat'),
                          r.a.createElement(
                            'div',
                            { id: 'chat-window' },
                            r.a.createElement(
                              'div',
                              { id: 'output' },
                              this.getMessages()
                            )
                          ),
                          r.a.createElement('input', {
                            id: 'handle',
                            type: 'text',
                            placeholder: 'Handle',
                            value: 'Username: '.concat(this.state.userName),
                            disabled: !0,
                          }),
                          r.a.createElement('input', {
                            id: 'message',
                            type: 'text',
                            placeholder: 'Message',
                            onChange: this.messageChange,
                          }),
                          r.a.createElement(
                            'button',
                            {
                              id: 'send',
                              onClick: function() {
                                return e.handleSend(e.state.roomName)
                              },
                            },
                            'Send'
                          )
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        { xs: '4' },
                        r.a.createElement(
                          'div',
                          { className: 'window' },
                          r.a.createElement(
                            'div',
                            { className: 'window-head' },
                            r.a.createElement('h2', null, 'Room History')
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'list' },
                            this.getEvents()
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        C = a(103),
        U = a(102),
        R = a(53),
        D = a.n(R),
        L = a(99),
        H = (a(49),
        (function(e) {
          function t() {
            var e
            return (
              Object(o.a)(this, t),
              ((e = Object(m.a)(
                this,
                Object(i.a)(t).call(this)
              )).renderRoomEvents = function(e) {
                return e.eventHistories.map(function(e, t) {
                  return r.a.createElement(
                    'tr',
                    { key: t },
                    r.a.createElement('th', null, ' ', t + 1, ' '),
                    r.a.createElement('td', null, ' ', e.username, ' '),
                    r.a.createElement('td', null, ' ', e.type, ' '),
                    r.a.createElement('td', null, ' ', e.date, ' '),
                    r.a.createElement('td', null, ' ', e.time, ' ')
                  )
                })
              }),
              (e.renderEvents = function() {
                return e.state.rooms.map(function(t, a) {
                  return r.a.createElement(
                    'div',
                    { key: a },
                    r.a.createElement('h2', null, ' Room: ', t.name),
                    r.a.createElement(
                      L.a,
                      { striped: !0 },
                      r.a.createElement(
                        'thead',
                        null,
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement('th', null, ' # '),
                          r.a.createElement('th', null, ' User '),
                          r.a.createElement('th', null, ' Type '),
                          r.a.createElement('th', null, ' Date '),
                          r.a.createElement('th', null, ' Time ')
                        )
                      ),
                      r.a.createElement('tbody', null, e.renderRoomEvents(t))
                    )
                  )
                })
              }),
              (e.state = { rooms: [] }),
              e
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  fetch('/room/get/all')
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      e.setState({ rooms: t })
                    })
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement('h1', null, ' Event History'),
                    r.a.createElement('div', null, this.renderEvents())
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)),
        x = (function(e) {
          function t() {
            var e
            return (
              Object(o.a)(this, t),
              ((e = Object(m.a)(
                this,
                Object(i.a)(t).call(this)
              )).renderRoomChat = function(e) {
                return e.chatHistories.map(function(e, t) {
                  return r.a.createElement(
                    'tr',
                    { key: t },
                    r.a.createElement('th', null, ' ', t + 1, ' '),
                    r.a.createElement('td', null, ' ', e.userName, ' '),
                    r.a.createElement('td', null, ' ', e.message, ' '),
                    r.a.createElement('td', null, ' ', e.date, ' '),
                    r.a.createElement('td', null, ' ', e.time, ' ')
                  )
                })
              }),
              (e.renderChats = function() {
                return e.state.rooms.map(function(t, a) {
                  return r.a.createElement(
                    'div',
                    { key: a },
                    r.a.createElement('h2', null, ' Room: ', t.name),
                    r.a.createElement(
                      L.a,
                      { striped: !0 },
                      r.a.createElement(
                        'thead',
                        null,
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement('th', null, ' # '),
                          r.a.createElement('th', null, ' Sender '),
                          r.a.createElement('th', null, ' Message '),
                          r.a.createElement('th', null, ' Date '),
                          r.a.createElement('th', null, ' Time ')
                        )
                      ),
                      r.a.createElement('tbody', null, e.renderRoomChat(t))
                    )
                  )
                })
              }),
              (e.state = { rooms: [] }),
              e
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  fetch('/room/get/all')
                    .then(function(e) {
                      return e.json()
                    })
                    .then(function(t) {
                      e.setState({ rooms: t })
                    })
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    O.a,
                    null,
                    r.a.createElement('h1', null, ' Chat History '),
                    r.a.createElement('div', null, ' ', this.renderChats())
                  )
                },
              },
            ]),
            t
          )
        })(n.Component),
        A = (function(e) {
          function t() {
            var e
            return (
              Object(o.a)(this, t),
              ((e = Object(m.a)(this, Object(i.a)(t).call(this))).state = {
                socket: D()('/'),
              }),
              e
            )
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(d, null),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(U.a, {
                        exact: !0,
                        path: '/',
                        component: y,
                      }),
                      r.a.createElement(U.a, {
                        path: '/rooms',
                        render: function() {
                          return r.a.createElement(N, {
                            socket: e.state.socket,
                          })
                        },
                      }),
                      r.a.createElement(U.a, {
                        path: '/users',
                        render: function() {
                          return r.a.createElement(k, {
                            socket: e.state.socket,
                          })
                        },
                      }),
                      r.a.createElement(U.a, {
                        path: '/chat/:name&:username',
                        render: function(t) {
                          return r.a.createElement(
                            w,
                            Object.assign({}, t, { socket: e.state.socket })
                          )
                        },
                      }),
                      r.a.createElement(U.a, {
                        path: '/eventHistory',
                        component: H,
                      }),
                      r.a.createElement(U.a, {
                        path: '/chatHistory',
                        component: x,
                      })
                    )
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      )
      var M = a(100)
      c.a.render(
        r.a.createElement(M.a, null, r.a.createElement(A, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    },
  },
  [[55, 1, 2]],
])
//# sourceMappingURL=main.fd99239c.chunk.js.map
