import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FolderIcon from "@mui/icons-material/Folder";
import CloseIcon from '@mui/icons-material/Close';

const Table = () => {
  const columns = [
    { field: "deal_size", headerName: "Deal Size", width: 70 },
    { field: "dealCat", headerName: "Deal Category", width: 200 },
    { field: "dealEmp", headerName: "Deal Employee", width: 150 },
    { field: "dealLoc", headerName: "Deal Location", width: 150 },
    { field: "pipeline", headerName: "PIpeline", width: 150 },
    { field: "stage", headerName: "Stage", width: 150 },
    { field: "lastUpdated", headerName: "Last Updated", width: 150 },
    { field: "action", headerName: "", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      deal_size: 7500,
      dealCat: "Fitness Equipments",
      dealEmp: "dilshan",
      dealLoc: " Purchasing",
      pipeline: " eZuite",
      stage: "Product Demo",
      lastUpdated: "2020-12-08 4:33:33",

    },
    {
      id: 1,
      deal_size: 7500,
      dealCat: "Fitness Equipments",
      dealEmp: "dilshan",
      dealLoc: " Purchasing",
      pipeline: " eZuite",
      stage: "Product Demo",
      lastUpdated: "2020-12-08 4:33:33",

    },
    {
      id: 1,
      deal_size: 7500,
      dealCat: "Fitness Equipments",
      dealEmp: "dilshan",
      dealLoc: " Purchasing",
      pipeline: " eZuite",
      stage: "Product Demo",
      lastUpdated: "2020-12-08 4:33:33",

    },
    {
      id: 1,
      deal_size: 7500,
      dealCat: "Fitness Equipments",
      dealEmp: "dilshan",
      dealLoc: " Purchasing",
      pipeline: " eZuite",
      stage: "Product Demo",
      lastUpdated: "2020-12-08 4:33:33",

    },
    {
      id: 1,
      deal_size: 7500,
      dealCat: "Fitness Equipments",
      dealEmp: "dilshan",
      dealLoc: " Purchasing",
      pipeline: " eZuite",
      stage: "Product Demo",
      lastUpdated: "2020-12-08 4:33:33",

    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Table;
