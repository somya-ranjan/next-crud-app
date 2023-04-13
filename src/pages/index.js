import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Layouts from "../layouts/Layouts";
import { Box } from "@mui/material";
import DynamicTable from "@/components/customComp/table/DynamicTable";
import employTableColumn from "@/json/employTableColumn";
import Actions from "@/components/customComp/action/Actions";
import AddEditEmployModal from "@/components/modal/AddEditEmployModal";
import DeleteEmployeeConfirmation from "@/components/modal/DeleteEmployeeConfirmation";
import { getAllEmployeeAction } from "@/store/sagaActions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // // initial state
  const dispatch = useDispatch();

  // // Redux state
  const { allEmployeeList, isLoading } = useSelector(
    (state) => state?.employee?.employeeList
  );

  // // local state
  const [openModal, setOpenModal] = useState(false);
  const [currentEmployeeData, setCurrentEmployeeData] = useState("");

  // // function
  const handelEdit = (data) => {
    setOpenModal("edit");
    setCurrentEmployeeData(data);
  };
  const handelDelete = (data) => {
    setOpenModal("delete");
    setCurrentEmployeeData(data);
  };

  // // insert icon and data
  let rows = [];
  rows = allEmployeeList?.map((item) => {
    const actions = (
      <Actions
        edit={() => {
          handelEdit(item);
        }}
        remove={() => {
          handelDelete(item);
        }}
      />
    );

    return { ...item, actions };
  });
  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, []);

  return (
    <Layouts title="Next Crud App">
      <Header setOpenModal={setOpenModal} />
      <Box mx="auto" maxWidth="1000px">
        <DynamicTable columns={employTableColumn} rows={rows} loading={false} />
      </Box>
      <AddEditEmployModal
        open={openModal}
        setOpen={setOpenModal}
        employeeData={currentEmployeeData}
      />
      <DeleteEmployeeConfirmation
        open={openModal === "delete"}
        setOpen={setOpenModal}
        employeeData={currentEmployeeData}
      />
    </Layouts>
  );
}
