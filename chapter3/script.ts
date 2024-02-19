import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const course = await addCourse();
  // const course = await findCourse();
  // return course;
  const videos = await prisma.video.findMany({ include: { Course: true } });
  console.log(videos);
  return videos;
}

const addCourse = async () => {
  const course = await prisma.course.create({
    data: { title: "Math 4", desc: "Math4 is fun", duration: 4 },
  });

  console.log(course);

  return course;
};

const findCourse = async () => {
  const course = await prisma.course.findMany();
  console.log(course);

  return course;
};

const addVideo = async () => {
  const video = await prisma.video.create({
    data: {
      title: "Math 4 video",
      desc: "Video Math4 is fun",
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      courseId: 1,
    },
  });

  console.log(video);
};

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
    process.exit(1);
  });

  // api/courses GET
  // api/course POST
  // api/course PUT
  // api/course/:id GET
  // api/course/:id DELETE

  
