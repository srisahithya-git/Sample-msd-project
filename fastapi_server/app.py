from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Student(BaseModel):
    stuname: str
    studept: str
    stuusername: str
    stupassword: str
    stage: int
    stumarks: float


@app.get("/getStudents")
def get_students():
    return {"message": "Get Students method called"}


@app.post("/addStudent")
def add_student(stu: Student):
    return {"student_details": stu}