#!/usr/bin/python2

import web
import requests

urls = (
    '/', 'index',
    '/another', 'another'
)

app = web.application(urls, globals())
render = web.template.render('templates/')

class index:
    def GET(self):
        return render.index()

class another:
    def GET(self):
        return render.another()


if __name__ == '__main__':
    app.run()
