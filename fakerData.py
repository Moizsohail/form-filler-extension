from ast import arg
import json
import re
from glob import glob
import os
files = glob("./node_modules/@faker-js/faker/dist/types/*.d.ts")


def getArgs(func):
    argsDump = re.findall(r"(\w+\??:\s\w+)", func)
    return [{"optional": "?" in argsRaw, "type": argsRaw.split(":")[1].strip(), "name": re.findall("^(\w+)", argsRaw)[0]} for argsRaw in argsDump]


def getName(func):
    return re.findall(r"^(\w+)", func)[0]


data = {}
for file in files[1:]:
    with open(file, 'r') as f:
        content = f.read()
        funcs = re.findall(r'\s(\w+\(.*\).*);', content)

        key = os.path.basename(file)[:-5]
        if key in ["datatype", "index"]:
            continue

        broken = {getName(func): {
            "args": getArgs(func),
            "returnType": [x.strip() for x in re.findall(r":\s?([\w |\[\]]+)$", func)[0].split("|")]} for func in funcs[1:] if re.findall(r"^(\w+)", func)[0] not in ['protocol', 'httpMethod']}
        if(len(broken) > 0):
            data[key] = broken

with open("fakeDataOut.json", "w") as f:
    json.dump(data, f)
