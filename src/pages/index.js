import { useState } from "react";
import Header from "@/components/Header";
import Layouts from "../layouts/Layouts";
import { Box } from "@mui/material";
import DynamicTable from "@/components/customComp/table/DynamicTable";
import employTableColumn from "@/json/employTableColumn";
import Actions from "@/components/customComp/action/Actions";
import AddEmployModal from "@/components/modal/AddEditEmployModal";
import DeleteEmployeeConfirmation from "@/components/modal/DeleteEmployeeConfirmation";

export default function Home() {
  // // local state
  const [openModal, setOpenModal] = useState(false);
  const demo = [
    {
      _id: 1,
      fullName: "Somyaranjan",
      email: "somya@text.com",
      address: "at:bh,po:ann,dist:js pur",
      phone: "9090909",
    },
  ];

  // // function
  const handelEdit = (data) => {
    console.log(data);
    setOpenModal("edit");
  };
  const handelDelete = (data) => {
    console.log(data);
    setOpenModal("delete");
  };

  // // insert icon and data
  let rows = [];
  rows = demo?.map((item, index) => {
    const actions = (
      <Actions
        key={index}
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

  return (
    <Layouts title="Next Crud App">
      <Header setOpenModal={setOpenModal} />
      <Box mx="auto" maxWidth="1000px">
        <DynamicTable columns={employTableColumn} rows={rows} loading={false} />
      </Box>
      <AddEmployModal open={openModal} setOpen={setOpenModal} />
      <DeleteEmployeeConfirmation
        open={openModal === "delete"}
        setOpen={setOpenModal}
      />
    </Layouts>
  );
}
