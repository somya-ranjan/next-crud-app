import nc from "next-connect";
import connectDb from "../../../utils/db/connectDb";
import employeeModel from "../../../models/employeeModel";
connectDb();
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async (req, res) => {
    try {
      const employee = await employeeModel.find({});
      res.json({ data: employee, totalList: employee.length });
    } catch (error) {
      res.json({ message: error });
    }
  })
  .post(async (req, res) => {
    const { name, email, designation, phoneNumber } = req.body;
    const newEmployee = new employeeModel({
      name,
      email,
      designation,
      phoneNumber,
    });
    try {
      await newEmployee.save();
      res.json({ data: { newEmployee }, message: "Employee add successfully" });
    } catch (error) {
      res.json({ message: error });
    }
  });

export default handler;
