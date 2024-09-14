from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from utils.validators import is_dag

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Item(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/pipelines/parse")
async def parse_pipeline(item: Item) -> dict:
    parsed_nodes=[]
    parsed_edges=[]
    for node in item.nodes:
        parsed_nodes.append(node.id)
    for edge in item.edges:
        parsed_edges.append([edge.source, edge.target])
    return {
        "num_nodes": len(item.nodes),
        "num_edges": len(item.edges),
        "is_dag": is_dag(parsed_nodes, parsed_edges),
    }

