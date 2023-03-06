
import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
background: #111111
`

const Tabs = styled(NavLink)`
font-size :20px;
margin-right :20px;
color : inherit;
`
const Navbar = () =>{
    return(
        <Header position='static'>
            <Toolbar>
<Tabs to = "/">Welome Gourav</Tabs>
<Tabs to = "/allusers"> All Users</Tabs>
<Tabs to= "/adduser"> Add User</Tabs>
            </Toolbar>
        </Header>
        
    )
}
export default Navbar;