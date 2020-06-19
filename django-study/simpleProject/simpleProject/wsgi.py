""" 
WSGI - Web Server Gateway Interface 
Server ile Django Uygulaması arasındaki bir interface (arayüz)

"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'simpleProject.settings')

application = get_wsgi_application()
