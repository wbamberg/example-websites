#!/usr/bin/python2

import web
import requests

import web
import cherrypy
from web.wsgiserver import CherryPyWSGIServer
from web.wsgiserver.ssl_builtin import BuiltinSSLAdapter
from cherrypy.wsgiserver.ssl_pyopenssl import pyOpenSSLAdapter
from cherrypy.wsgiserver.ssl_pyopenssl import SSL

context = SSL.Context(SSL.SSLv3_METHOD)
context.set_cipher_list('ALL')
context.use_certificate_file("cert.pem")
context.use_privatekey_file("server.pem")

CherryPyWSGIServer.ssl_adapter = pyOpenSSLAdapter("server.pem","server.pem",None)
#CherryPyWSGIServer.ssl_adapter.context.set_cipher_list('RC4-SHA');
CherryPyWSGIServer.ssl_adapter.context = context

urls = (
    '/', 'index',
    '/verify', 'verify',
    '/logout', 'logout'
)

app = web.application(urls, globals())
render = web.template.render('templates/')

class index:
    def GET(self):
        return render.index()

class verify:
    def POST(self):
        audience = "http://0.0.0.0:8080"
        i = web.input()

        try:
            page = requests.post('https://verifier.login.persona.org/verify',
                                 verify=True,
                                 data={ "assertion": i.assertion,
                                        "audience": audience})
            data = page.json()
        except requests.exceptions.SSLError:
            data = { "status": "failed",
                     "reason": "Could not verify SSL certificate" }
        except requests.exceptions.ConnectionError:
            data = { "status": "failed",
                     "reason": "Could not connect to server" }

        if data['status'] == "okay":
            web.setcookie('currentUser', data['email'], 3600)
            message = data['email']
        else:
            message = "Verification error: %s" % data['reason']

        return message

class logout:
    def POST(self):
        web.setcookie('currentUser', '', expires = -1)

if __name__ == '__main__':
    app.run()
