import express, { Application, Request, Response, NextFunction} from 'express';
import { Router } from 'express';
import cors from 'cors';
import path from 'path';
import { data } from './data';

const PORT = process.env.PORT || 4000;
const app: Application = express();
const router = Router();

app.use(express.static(path.resolve(__dirname, "./app/src")));
app.use(cors());

//simple message
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "hi" });
});

interface Users {
  id: any, 
  name: string, 
  lastName: string, 
  age?: number, 
  hobbies: string
}

//get all users
app.get("/users", function (req: Request, res: Response) {
  let data: Users[] = [
    {
      id: "1",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "3",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "4",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "5",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "6",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
    {
      id: "7",
      name: "Name",
      lastName: "Last name",
      age: 21,
      hobbies: "hobbies",
    },
  ];
  res.json(data);
});


let data2 = [];

//create new user
app.post('/create', function(req, res) {
  const newUser = {
    id: Math.random() + 1,
    name: req.body.name, 
    lastName: req.body.lastName, 
    age: req.body.age, 
    hobbies: req.body.hobbies
  };

  data2.push(newUser);
  console.log(newUser);
});

app.post('/sth', function(req, res) {
  let name = req.body;
  data2.push(name);
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./app/src", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});