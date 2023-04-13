import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import SpinnerLoader from "../loader/SpinnerLoader";
import NoData from "../noData/NoData";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";

function DynamicTable({ columns, rows, loading, noDataMsg }) {
  return (
    <Paper>
      <TableContainer
        sx={{
          minHeight: 400,
          position: "relative",
          background: "lightGray",
        }}>
        <Table border stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={nanoid()}
                  sx={{ fontWeight: 700, fontSize: 17, textAlign: "center" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {loading ? (
            <SpinnerLoader />
          ) : (
            <TableBody>
              {rows?.length === 0 || rows === undefined ? (
                <NoData noDataMsg={noDataMsg} />
              ) : (
                rows?.map((row) => {
                  return (
                    <TableRow hover key={nanoid()}>
                      {columns.map((column) => {
                        const value = row[column._id];
                        return (
                          <TableCell
                            key={nanoid()}
                            sx={{ textAlign: "center" }}>
                            {value || "----"}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DynamicTable;
// export default dynamic(() => Promise.resolve(DynamicTable), { ssr: false });
