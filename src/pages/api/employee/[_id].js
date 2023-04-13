import nc from "next-connect";
import employeeModel from "../../../models/employeeModel";
const handler = nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async (req, res) => {
    const { _id } = req.query;
    try {
      const employee = await employeeModel.findById(_id);
      res.send(employee);
    } catch (error) {
      res.json({ message: error });
    }
  })
  .put(async (req, res) => {
    const { _id } = req.query;
    try {
      const newData = await employeeModel.findOneAndUpdate(
        { _id },
        { ...req.body }
      );
      res.json({
        data: { newData },
        message: "Employee updated successfully",
      });
    } catch (error) {
      res.json({ message: error });
    }
  })

  .delete(async (req, res) => {
    const { _id } = req.query;
    try {
      const newData = await employeeModel.findOneAndDelete({ _id });
      res.json({
        message: "Employee deleted successfully",
      });
    } catch (error) {
      res.json({ message: error });
    }
  });

export default handler;
