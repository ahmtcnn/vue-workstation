from django.shortcuts import render, HttpResponse
from .models import Book
from .forms import BookForm
from django.contrib import messages
# Create your views here.

def index(request):
    books = Book.objects.all()
    context = {
        'books':books,
    }
    return render(request, "book/index.html", context)

def add(request):
    if request.method == "GET":
        return render(request, 'book/add.html')
        
    if request.method == "POST":
        form = BookForm(request.POST,request.FILES)
        if form.is_valid():
            name    = form.cleaned_data.get('name')
            author  = form.cleaned_data.get('author')
            date    = form.cleaned_data.get('date')
            rate    = form.cleaned_data.get('rate')
            photo   = form.cleaned_data.get('photo')
            Book.objects.create(name=name, author=author, date=date, rate=rate, photo=photo)
        else:
            messages.error(request, form.errors)

        return render(request, 'book/add.html')

def edit(request, id):
    if request.method == "GET":
        book = Book.objects.get(pk=id)
        context = {
            'book':book
        }
        return render(request, 'book/edit.html', context)
    elif request.method == "POST":
        book = Book.objects.get(pk=id)
        context = {
            'book':book
        }
        form = BookForm(request.POST,request.FILES)
        if form.is_valid():
            name    = form.cleaned_data.get('name')
            author  = form.cleaned_data.get('author')
            date    = form.cleaned_data.get('date')
            rate    = form.cleaned_data.get('rate')
            photo   = form.cleaned_data.get('photo')
            Book.objects.create(name=name, author=author, date=date, rate=rate, photo=photo)
        else:
            messages.error(request, form.errors)
    return render(request, 'book/edit.html', context)

        