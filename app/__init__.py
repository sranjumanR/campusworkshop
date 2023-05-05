"""Setup at app startup"""
from flask import Flask
import psycopg2


app = Flask(__name__)
postgres = psycopg2.connect(
        host="dpg-chaa96e7avj5o48f17vg-a.oregon-postgres.render.com",
        database="aa_61lx",
        user="aa_61lx_user",
        password="JlEV9YWG7yQiQODeBTNBJ2iwgCA1zflu")
# To prevent from using a blueprint, we use a cyclic import
# This also means that we need to place this import here
# pylint: disable=cyclic-import, wrong-import-position
from app import routes
