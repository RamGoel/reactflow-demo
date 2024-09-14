from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

class Item(BaseModel):
    nodes: list
    edges: list

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/pipelines/parse")
async def parse_pipeline(item: Item) -> dict:
    return {
        "num_nodes": len(item.nodes),
        "num_edges": len(item.edges),
        "is_dag": is_dag(item.nodes, item.edges),
    }

def is_dag(nodes, edges):
    # check if the graph is a dag
    # use topological sort to check if the graph is a dag
    # if the graph is a dag, return True
    # otherwise, return False
    return True