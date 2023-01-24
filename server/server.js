const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");
const { getAllUsers } = require("./controller/userController");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoute"));``
app.use("/api/branches", require("./routes/branchRoute"));
app.use("/api/clients", require("./routes/clientRoute"));
app.use("/api/paidleave", require("./routes/paidleaveRoute"));
app.use("/api/holiday", require("./routes/holidayRoute"));
app.use("/api/credentials", require("./routes/credentialsRoute"));
app.use("/api/burderngroup", require("./routes/burdernGroupRoute"));
app.use("/api/mailinglabel", require("./routes/mailingLabelRoute"));
app.use("/api/glAcount", require("./routes/glAcountRoute"));
app.use("/api/region", require("./routes/regionRoute"));
app.use("/api/salestaxcode", require("./routes/salesTaxCodeRoute"));
app.use("/api/skilldetail", require("./routes/skillDetailRoute"));
app.use("/api/discipline", require("./routes/disciplineRoute"));
app.use("/api/dropdown", require("./routes/dropDownRoute"));
app.use("/api/invoiceprofile", require("./routes/invoiceProfileRoute"));
app.use("/api/payor", require("./routes/payorRoute"));
app.use("/api/specialitydetail", require("./routes/specialityDetailRoute"));
app.use("/api/userdetail", require("./routes/userDetailRoute"));
app.use("/api/vendor", require("./routes/vendorRoute"));
app.use("/api/earningdeduction", require("./routes/earningDeductionRoute"));
app.use("/api/registrant", require("./routes/registrantRoute"));
app.use("/api/payroll", require("./routes/payrollRoute"));
app.use("/api/company", require("./routes/companyProfileRoute"));
app.use("/api/workhistory/", require("./routes/workHistoryRoute"));
app.use("/api/intouch/", require("./routes/intouchRoutes"));
app.use("/api/securitygroup/", require("./routes/securityGroupRoute"));
app.use("/api/notificationtemplate/", require("./routes/notificationTemplateRoute"))
app.use("/api/profitmarginranking/", require("./routes/profitMarginRankingRoute"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(errorHandler);

// const express = require("express")
// const dotenv = require("dotenv").config()
// const connectDB = require("./config/db")
// const errorHandler = require("./middleware/errorHandler")
// const app = express()
// const PORT = process.env.PORT || 5000

// connectDB()

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use("/api/users", require("./routes/userRoute"))
// app.listen(PORT,()=>{console.log(`Server is Running op PORT ${PORT}`)})
// app.use(errorHandler)
