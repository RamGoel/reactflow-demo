def is_dag(nodes, edges):
    adj_list = {node: [] for node in nodes}
    
    for u, v in edges:
        adj_list[u].append(v)

    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return True  

        if node in visited:
            return False  

        visited.add(node)
        rec_stack.add(node)

        for neighbor in adj_list[node]:
            if dfs(neighbor):
                return True  

        rec_stack.remove(node)
        return False

    for node in nodes:
        if node not in visited:
            if dfs(node):
                return False  

    return True  