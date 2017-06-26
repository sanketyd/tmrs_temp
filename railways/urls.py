
from django.conf.urls import url
from . import views

app_name = 'railways'
urlpatterns = [
    url(r'^index', views.index, name='index'),
    url(r'^goals', views.goals, name='goals'),
    # multi menu links
    url(r'^projects/fogVision', views.fog, name='fog'),
    url(r'^projects/sig&comm', views.signals, name='signals'),
    url(r'^projects/corrosion', views.corrosion, name='corrosion'),
    url(r'^projects/fastenings', views.fastenings, name='fastenings'),
    url(r'^projects/flaws', views.flaws, name='flaws'),
    url(r'^projects/tracks', views.tracks, name='tracks'),
    url(r'^projects/derailment', views.derailment, name='derailment'),
    url(r'^projects/sensors', views.sensors, name='sensors'),
    url(r'^projects/diagnostics', views.diagnostics, name='diagnostics'),
    url(r'^projects/wheels', views.wheels, name='wheels'),
    url(r'^projects/measuring-wheel', views.measuringwheel, name='measuring-wheel'),
    url(r'^projects/toilets', views.toilets, name='toilets'),

    url(r'^budget', views.budget, name='budget'),
    url(r'^media', views.media, name='media'),
    url(r'^contacts', views.contacts, name='contacts'),
    url(r'^stats', views.stats, name='stats'),
]
