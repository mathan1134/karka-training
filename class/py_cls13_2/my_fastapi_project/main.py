from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "good"}

@app.post("/items/add")
async def create_item(item_id: int, data: "dict"):
    return {"message": "Item created successfully", "item_id": item_id, "data": data}

@app.get("/item/{item_id}")
async def read_item(item_id: int):
         datas={
               "10":"hi",
               "11":"how are you",
               "12":"fine"
         }
         return {"item_id:{} and detail :{}".format()}
            