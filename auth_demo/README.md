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

![Django Admin](http://i.imgur.com/1dWwo4D.png)
![Global Permissions](http://i.imgur.com/p3YOVpT.png)

# Custom permissions
The code is inside the file `fw_auth/models.py`. It shows how to define _global permissions_.
Is it possible to add/change/remove global permissions from the Django Admin

The file `fw_auth/migrations.002_new permissions.py` show how to write a migration to add permissions.


