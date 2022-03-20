from copyreg import constructor
from re import L
from subprocess import CREATE_NEW_CONSOLE
import requests
prodata = requests.get("https://disease.sh/v3/covid-19/countries/").json()
mydata = requests.get("http://localhost:6900/").json()["WORLD"]


def sss():

    myFile = open("res.txt", "r")
    data = myFile.readlines()[0]
    myFile.close()
    myFile = open("bb.txt", "w")
    response = ""
    for i in range(len(data)):
        if data[i] == ",":
            response += data[i] + "\n"
        else:
            response += data[i]
    myFile.write(response)

    myFile.close()


def shit():
    myFile = open("bb.txt", "r")
    j = myFile.readlines()
    datas = "".join(c for c in j)
    a = list(datas)
    print(len(a))


def findIndex(elem: str, arr: list):
    for i in range(len(arr)):
        if elem == arr[i]["country"].upper():
            return i
    return -1


def fetchData():

    myFile = open("res.txt", "w")
    for i in range(len(mydata)):
        try:
            find = findIndex(mydata[i]["countryName"].upper(), prodata)
            if find != -1:
                mydata[i]["continent"] = prodata[find]["continent"]
        except:
            f = mydata[i]["countryName"]
            if findIndex(f[0].upper(), prodata) != -1:
                mydata[i]["continent"] = prodata[findIndex(
                    f[0].upper(), prodata)]["continent"]
            elif findIndex(f[1].upper(), prodata) != -1:
                mydata[i]["continent"] = prodata[findIndex(
                    f[1].upper(), prodata)]["continent"]
            else:
                pass

    myFile.write(str(mydata))
    myFile.close()


myFile = open("bb.txt", "r")
lines = myFile.readlines()
myFile.close()
myFile = open("kk.txt", "w")
ll = []
for line in lines:
    for i in range(len(line)):
        a = ""
        for i in range(len(line)):
            if (line[i] == "'"):
                a += chr(34)
            else:
                a += line[i]
        ll.append(a)

myFile.write(str(ll))
