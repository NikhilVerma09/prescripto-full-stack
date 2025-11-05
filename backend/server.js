import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
// app.use(express.json())
// app.use(cors())

// middlewares
app.use(express.json())

// CORS Configuration
const allowedOrigins = [
    'https://prescripto-full-stack-admin-94ii.onrender.com', // आपका Admin URL
    'https://prescripto-full-stack-frontend-0d78.onrender.com' // **यहाँ अपना लाइव Frontend URL जोड़ें**
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Session या Token के लिए ज़रूरी
}));

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
