//-------------------- SETTINGS --------------------------------

const express = require("express");
const v1CoursesRouter = require("./v1/routes/courses.routes")
const moment = require('moment');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const morgan = require('morgan');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3003;
const SECRET = "614f4f4a6568e9ae881c76e8753f65c9";

app.use(express.json({limit: '500mb'}));
app.use(cors());
app.use(morgan('dev'));

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