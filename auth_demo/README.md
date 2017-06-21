# Installation
Create a `virtualenv`
```
$ python3 -m venv <somewhere>
```

Activate it
```
$ . <somewhere>/bin/activate
```

Install required packages
```
$ pip install -r requirements.txt
```

# Run the server
Inside the virtualenv

```
$ ./manage.py migrate
$ ./manage.py createsupersuer
...
$ ./manage.py runserver
```

# Django Admin
The `Django Admin` is available at (http://localhost:8000/admin/)
