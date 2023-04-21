//-------------------- SETTINGS --------------------------------

const express = require("express");
const v1CoursesRouter = require("./v1/routes/courses.routes")

const app = express();
const PORT = process.env.PORT || 3003;

//-------------------- ROUTES -------------------------------------------

// app.use(require('./routes/admins.routes'));

// app.use(require('./routes/students.routes'));

// app.use(require('./routes/courses.routes'));

// app.use(require('./routes/survey.routes'));

// app.use(require('./routes/events.routes'));

app.use("/api/v1/courses",v1CoursesRouter);

//-------------------- START SERVER ------------------------------------
app.listen(PORT, () =>
  console.log(`¡Aplicación escuchando en el puerto ${PORT}!`),
);