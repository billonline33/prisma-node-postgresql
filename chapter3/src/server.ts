import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(bodyParser.json());
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// api/courses GET
app.get("/api/courses", (req, res) => {
  prisma.course.findMany().then((courses) => {
    res.status(200);
    res.json(courses);
  });
});

// api/course POST
app.post("/api/course", (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  prisma.course
    .create({
      data: {
        title: bodyData.title,
        desc: bodyData.desc,
        duration: bodyData.duration,
      },
    })
    .then((course) => {
      res.status(201);
      res.json(course);
    });
});

// api/course PUT

// api/course/:id GET
app.get("/api/course/:id", (req, res) => {
  const id = Number(req.params.id);
  prisma.course.findUnique({ where: { id: id } }).then((course) => {
    res.status(200);
    res.json(course);
  });
});

// api/course/:id DELETE
app.delete("/api/course/:id", (req, res) => {
  const id = Number(req.params.id);
  prisma.course.delete({ where: { id: id } }).then((course) => {
    res.status(200);
    res.json(course);
  });
});

export default app;
