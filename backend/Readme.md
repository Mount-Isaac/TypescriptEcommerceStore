# Django Django REST Backend 

<p>
Create a virtual environment 

```bash
pip install virtualenv 
virtualenv env
```

Activate the virtual environment

```bash
source /env/bin/activate # UNIX
env\Scripts\activate # Windows
```

Install requirements

```bash
pip install -r requirements.txt
```

Run the server: bind port 8000 (root of the project)

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Happy coding :)
</p>
