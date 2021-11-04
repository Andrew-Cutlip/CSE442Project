import bcrypt
import pymongo
import os


class Database:
    def __init__(self):
        self.users = []
        self.cities = []
        self.friends = []

    def add_city(self, city_name: str):
        pass

    def get_cities(self) -> list:
        pass

    def insert_user(self, user: dict):
        pass

    def get_user(self, username: str) -> dict:
        pass

    def is_username_available(self,username: str) -> bool:
        pass

    def remove_user(self, user_id: int):
        pass

    def salt_hash_password(self, password: str):
        pass

    def check_user_password(self, username: str, password: str) -> bool:
        pass

    def add_friend(self, username:str):
        pass

    def get_all_friends(self):
        pass

    def get_a_friend(self, username:str):
        pass



class DBStub(Database):
    def __init__(self):
        super().__init__()

    def add_city(self, city_name: str):
        self.cities.append(city_name)

    def get_cities(self) -> list:
        return self.cities

    def insert_user(self, user: dict):
        self.users.append(user)

    def remove_user(self, user_id: int):
        pass

    def get_user(self, username: str) -> dict:
        for user in self.users:
            if username == user["username"]:
                return user
        return {}

    def is_username_available(self,username: str) -> bool:
        usernames = [user["username"] for user in self.users]
        return username not in usernames

    def salt_hash_password(self, password: str):
        return password

    def check_user_password(self, username: str, password: str) -> bool:
        user = self.get_user(username)
        if user is None:
            return False
        hashed = user["password_hash"]
        return hashed == password

    def add_friend(self, username:str):
        user = self.get_user(username)
        if user is None:
            return False
        self.friends.append(user)

    def get_all_friends(self):
        return self.friends

    def get_a_friend(self, username:str):
        return self.friends


class RealDatabase(Database):
    def __init__(self):
        super().__init__()
        self.PASSWORD = os.environ.get("dbPassword")
        print(self.PASSWORD)
        if self.PASSWORD is None:
            self.PASSWORD = "Supersecurepassword"

        self.client = pymongo.MongoClient(
            f"mongodb+srv://app442:{self.PASSWORD}@cluster0.zrs6a.mongodb.net/test?retryWrites=true&w=majority",
            connectTimeoutMS=30000, socketTimeoutMS=None, socketKeepAlive=True, connect=False, maxPoolsize=1,
            authSource='admin')

        self.db = self.client["test"]
        # Collection (Table)
        self.users = self.db.users
        self.cities = self.db.cities
        self.friends = self.db.friends

    def add_city(self, cityname: str):
        city = {
            "name": cityname
        }
        self.cities.insert_one(city)

    def get_cities(self):
        ret = []
        print("Getting cities")
        for city in self.cities.find():
            ret.append(city)
        return ret

    def insert_user(self, user: dict):
        self.users.insert_one(user)

    def remove_user(self, user_id: int):
        pass

    def check_user_password(self, username: str, password: str) -> bool:
        user = self.get_user(username)
        if user is None:
            return False
        hashed = user["password_hash"]
        pass_check = self.compare_password(password, hashed)
        return pass_check

    def compare_password(self, password, hashed) -> bool:
        pass_check = bcrypt.checkpw(password.encode('utf8'), hashed)
        return pass_check

    def get_user(self, username: str) -> dict:
        user = self.users.find_one({"username": username})
        print(f"Got user {username}\n")
        return user

    def is_username_available(self, username: str) -> bool:
        user = self.users.find_one(username)
        if user is None:
            return True
        return False

    def salt_hash_password(self, password: str):
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf8'), salt)
        return hashed

    def add_friend(self, username:str):
        self.friends.insert_one(self.get_user(username))

    def get_all_friends(self):
        allfriends = []
        for f in self.friends.find():
            allfriends.append(f)
        return allfriends

    def get_a_friend(self,username:str):
        allfriends = []
        for f in self.friends.find({"username": username}):
            allfriends.append(f)
        return allfriends



