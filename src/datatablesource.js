import moment from 'moment';
export const userColumns = [
    { field: "id",
     headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "number",
      headerName: "number",
      width: 150,
    },
  
    {
      field: "releaseDate",
      headerName: "releaseDate",
      width: 150,
      valueFormatter: params => 
      moment(params?.value).format("DD/MM/YYYY"),
    },
    {
      field: "deadline",
      headerName: "deadline",
      width: 150,
      valueFormatter: params => 
      moment(params?.value).format("DD/MM/YYYY"),
    },
    {
      field: "budget",
      headerName: "budget",
      width: 200,
      
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate: "May 15, 2023",
      deadline: "June 30, 2023",
      budget: "$200,000 - $250,000",
    },
    {
      id: 2,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate: "May 15, 2023",
      deadline: "June 30, 2023",
      budget: "$200,000 - $250,000",
    },
    {
      id: 3,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate: "May 15, 2023",
      deadline: "June 30, 2023",
      budget: "$200,000 - $250,000",
    },
    {
      id: 4,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate: "May 15, 2023",
      deadline: "June 30, 2023",
      budget:"$200,000 - $250,000" ,
    },
    {
      id: 5,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate:"May 15, 2023",
      deadline:  "June 30, 2023",
      budget:"$200,000 - $250,000",
    },
    {
      id: 6,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate:"May 15, 2023",
      deadline: "June 30, 2023",
      budget:"$200,000 - $250,000" ,
    },
    {
      id: 7,
      title: "IT Infrastructure Upgrade",
      number: "RFP2023IT002",
      releaseDate:"May 15, 2023",
      deadline: "June 30, 2023",
      budget:"$200,000 - $250,000" ,
    },
   
  ];