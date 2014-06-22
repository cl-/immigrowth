from django.conf.urls import patterns, include, url
import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'immigrow.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^api/', views.api),
    url(r'^admin/', include(admin.site.urls)),
)
