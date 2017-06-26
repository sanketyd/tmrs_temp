from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'railways/index.html', {})


def goals(request):
    return render(request, 'railways/goals.html', {})


def fog(request):
    return render(request, 'railways/side-menu/fog.html', {})


def signals(request):
    return render(request, 'railways/side-menu/signals.html', {})


def corrosion(request):
    return render(request, 'railways/side-menu/corrosion.html', {})


def fastenings(request):
    return render(request, 'railways/side-menu/fastenings.html', {})


def tracks(request):
    return render(request, 'railways/side-menu/tracks.html', {})


def derailment(request):
    return render(request, 'railways/side-menu/derailment.html', {})


def sensors(request):
    return render(request, 'railways/side-menu/sensors.html', {})


def diagnostics(request):
    return render(request, 'railways/side-menu/diagnostics.html', {})


def wheels(request):
    return render(request, 'railways/side-menu/wheels.html', {})


def measuringwheel(request):
    return render(request, 'railways/side-menu/measuring-wheel.html', {})


def toilets(request):
    return render(request, 'railways/side-menu/toilets.html', {})


def flaws(request):
    return render(request, 'railways/side-menu/flaw-detection.html', {})


def budget(request):
    return render(request, 'railways/budget.html', {})


def media(request):
    return render(request, 'railways/media.html', {})


def contacts(request):
    return render(request, 'railways/contacts.html', {})


def stats(request):
    return render(request, 'railways/stats.html', {})
