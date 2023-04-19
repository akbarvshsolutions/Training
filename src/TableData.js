import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const TableData = (props) => {
  const {
    data,
    isLoading,
    error,
    dataHeaders,
    handleUserDelete,
    handleUserEdit,
  } = props;

  // console.log('props data',data)
  // console.log('props length ',props.dataHeaders.length)

  return (
    <TableContainer
      style={{ margin: "auto", width: "1100px" }}
      component={Paper}
    >
      {isLoading && <div>A moment please...</div>}
      {Object.keys(error).length !== 0 ? (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      ) : (
        ""
      )}
      <Table aria-label="simple table">
        <TableHead style={{ background: "black" }}>
          <TableRow>
            {dataHeaders.map((rowHead) => (
              <TableCell
                align="center"
                key={rowHead}
                style={{ color: "white", fontSize: "22px" }}
              >
                {rowHead}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {props.dataHeaders.length === 2 && (
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" style={{ fontSize: "16px" }}>
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleUserEdit(row)}
                    style={{ marginRight: 10, background: "black" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleUserDelete(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}

        {props.dataHeaders.length === 4 && (
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" style={{ fontSize: "16px" }}>
                  {row.artistName}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "16px" }}>
                  {row.albumName}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "16px" }}>
                  {row.albumArt}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleUserEdit(row)}
                    style={{ marginBottom: 4, background: "black" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleUserDelete(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default TableData;
