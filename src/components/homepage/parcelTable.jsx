import React from "react";
import { Box, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Headline } from "../../commons";

const ParcelTable = ({ data }) => {
  return (
    <>
      <Box marginBottom={[6, 8]}>
        <Headline title={"latest parcels"} />
        <Container maxWidth={"md"}>
          <Box marginY={2}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      No
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      drop-off location
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      pickup location
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      sender name
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      receiver name
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      amount
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      {" "}
                      status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#e0e0e0",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {row.parcel_meta.sender_city.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                        }}
                      >
                        {row.parcel_meta.recipient_city.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {row.sender.first_name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {row.recipient.first_name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "0.7rem",
                        }}
                      >
                        {row.payment.amount}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "0.7rem",
                          color: "green",
                        }}
                      >
                        {row.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ParcelTable;
