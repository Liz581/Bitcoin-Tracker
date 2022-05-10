import sqlite3
from sqlite3 import Error
from constants import DATABASE_NAME, TABLE_NAME, BITCOIN_CURRENT_PRICE_URL
from datetime import datetime
import requests

# TODO (5.1) 
def get_live_bitcoin_price():
    BITCOIN_CURRENT_PRICE_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

    # make get request
    response = requests.get(BITCOIN_CURRENT_PRICE_URL)

    # check if respons status code is 200
    if response.status_code == 200:
        # convert response body to JSON
        data = response.json()

        price = data['bpi']['USD']['rate'].replace(',', '')
        return float(price)
    # otherwise, print error code
    else:
        print(-1)
        return -1

def create_database():
    """
    creates a bitcoin database with a table of timestamp (TEXT) and price (REAL/float) fields

    :return:
        the database connection object
    :rtype:
        Connection
    """

    # connects to the database if it exists, if not then creates a new database
    try:
        db = sqlite3.connect(DATABASE_NAME)
    except Error as e:
        print(e)

    # get cursor
    cursor = db.cursor()

    sql = 'CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + '''(
        timestamp TEXT PRIMARY KEY NOT NULL,
        price REAL NOT NULL
    );'''
    cursor.execute(sql)
    db.commit()
    cursor.close()

    return db

def convert_text_to_date(date_text: str):
    """
    converts dates from a string to datetime object

    :param date_text:
        the date in text format
    :type date_text:
        str
    :return:
        the date as a datetime object
    :rtype:
        datetime
    """
    return datetime.strptime(date_text, '%Y-%m-%d %H:%M:%S')

def convert_date_to_text(date: datetime):
    """
    converts dates from a string to datetime object

    :param date_text:
        the date in text format
    :type date_text:
        str
    :return:
        the date as a datetime object
    :rtype:
        datetime
    """
    return date.strftime("%Y-%m-%d %H:%M:%S")

if __name__ == '__main__':
    create_database()
