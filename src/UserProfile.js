import React, { useEffect, useState } from 'react'
import "./SellerDashboard.css"
import AdminUserList from './AdminUserList';
import AdminSellerList from './AdminSellerList';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserService from './UserService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SellerProfile from './SellerProfile';
import AddProduct from './AddProduct';
import GetVerified from './GetVerified';
import Header from './Header';
import BuyerProfile from './BuyerProfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function UserProfile(){
  const [value, setValue] = React.useState(0);
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [users, setUsers] = useState([])
  const [userList, setUserList] = useState([])
  useEffect(()=>{
      UserService.getAllUsers().then((response) => {
          setUserList(response.data)
          setUsers(response.data)
      }).catch(error =>{
          console.log(error)
      })
  },[])
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
  });

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8080/api/product/getAll");
    setData(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/api/product/save", formData);
    fetchData();
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image:"",
    });
  };

  const type = "seller";
  return(
    <div>
        <Header/>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 750 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Payment" {...a11yProps(1)} />
            <Tab label="Requests" {...a11yProps(2)} />
            <Tab label="Add Product" {...a11yProps(3)} />
            <Tab label="Get Verified" {...a11yProps(4)} />
            <Tab label="Buyer Requests" {...a11yProps(5)} />
          </Tabs>
          <div className='panelContainer'>
          <TabPanel className="tablePanel" value={value} index={0}>
          <div className='profile'>
            <div>
              <BuyerProfile/>
            </div>

            </div>
          </TabPanel>
          <TabPanel className="tablePanel" value={value} index={1}>

          </TabPanel>
          <TabPanel className="tablePanel" value={value} index={2}>
          <div className='userList'>
        <div className='tableContainer'>
        <div className='userTable'>
          <table>
            <thead>
              <th>Product Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
            </thead>
            <tbody>
              {users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("seller");}).map((user) => (
                <tr key={user.id}>
                  <td className='td'>
                    {user.id}
                  </td>
                  <td className='td'>
                    {user.firstName}
                  </td>
                  <td className='td'>
                    {user.lastName}
                  </td>
                  <td className='td'>
                    {user.email}
                  </td>
                  <td>Verified</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
                <AddProduct/>
          </TabPanel>
          <TabPanel value={value} index={4}>
          <GetVerified/>
          </TabPanel>
          <TabPanel value={value} index={5}>

          </TabPanel>
          </div>
        </Box>
        </div>
      );
    }

