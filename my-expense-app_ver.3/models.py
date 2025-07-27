# models.py
from dataclasses import dataclass, asdict

@dataclass
class Expense:
    id: str
    date: str  # YYYY-MM-DD
    store: str
    amount: int
    tag: str = "その他"
    details: str = ""

    def to_dict(self):
        return asdict(self)
