import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css"
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

export default function AdminDashboard(){

  const [value, setValue] = React.useState("");
    
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
    const result = await axios.get("http://localhost:8082/api/user/getAll");
    setData(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/api/user/save", formData);
    fetchData();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      type: "",
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8082/api/user/delete/${id}`);
    fetchData();
  };

  const type = "seller";
  return(
    <div>
      <div className='header'>
        <h1>Admin Dashboard</h1>
        <Link to="/login"><button className='header__button'>Sign Out</button></Link>
        
      </div>
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
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Users" {...a11yProps(1)} />
            <Tab label="Sellers" {...a11yProps(2)} />
            <Tab label="Buyers" {...a11yProps(3)} />
            <Tab label="Products" {...a11yProps(4)} />
            <Tab label="Articles" {...a11yProps(5)} />
          </Tabs>
          <div className='panelContainer'>
          <TabPanel className="tablePanel" value={value} index={0}>
            <div className='count'>
              <div className='count__container'>
                <p>Registered Users</p>
                <h2>{users.length}</h2>
              </div>
              <div className='count__container'>
                <p>Buyers</p>
                <h2>{users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("buyer");}).length}</h2>
              </div>
              <div className='count__container'>
                <p>Sellers</p>
                <h2>{users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("seller");}).length}</h2>
              </div>
              <div className='count__container'>
                <p>Verified Sellers</p>
                <h2>{users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("seller");}).length}</h2>
              </div>
              <div className='count__container'>
                <p>Products</p>
                <h2>{users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("buyer");}).length}</h2>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="tablePanel" value={value} index={1}>
            <div>
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
                <input
          type="email"
          name="email"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
                <input
          type="email"
          name="email"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">Add User</button>
      </form>
            </div>
          <div className='userList'>
        <div className='tableContainer'>
        <div className='userTable'>
          <table>
            <thead>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type</th>
            </thead>
            <tbody>
              {users.map((user) => (
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
                  <td className='td'>
                    {user.type}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}><DeleteIcon/></button>

                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
          </TabPanel>
          <TabPanel className="tablePanel" value={value} index={2}>
          <div className='userList'>
        <div className='tableContainer'>
        <div className='userTable'>
          <table>
            <thead>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Status</th>
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
                  <td><button>Verify</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <div className='userList'>
        <div className='tableContainer'>
        <div className='userTable'>
          <table>
            <thead>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Status</th>
            </thead>
            <tbody>
              {users.filter((user)=>{return type.toLowerCase() === "" ? user : user.type.toLowerCase().includes("buyer");}).map((user) => (
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
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          </div>
        </Box>
        </div>
      );
    }

