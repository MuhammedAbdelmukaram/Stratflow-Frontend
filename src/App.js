import logo from './logo.svg';
import './App.css';
import NavigationBar from "./Common/NavBar";
import Signup from "./Common/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Common/Login";
import SidebarMenu from "./Common/SideBar";
import MyAccount from "./Secondary Menu/My Account";
import Settings from "./Secondary Menu/Settings";
import Integrations from "./Secondary Menu/Integrations";
import Billing from "./Secondary Menu/Billing";
import Dashboard from "./Menu/Dashboard";
import CustomMetrics from "./Menu/Custom Metrics";
import Strategies from "./Menu/Strategies";
import Reports from "./Menu/Reports";
import Flows from "./Menu/Flows";
import Loader from "./Common/Loader";
import Plans from "./Header Menu/Plans";
import Support from "./Header Menu/Support";
import SideNavBar from "./Common/SideNavBar";
import FlowHeader from "./Flow Logic/Flow Header";
import FlowSidebar from "./Flow Logic/Flow Sidebar";
import FlowWorkspace from "./Flow Logic/Flow Workspace";
import FlowLogicParrent from "./Flow Logic/FlowLogic Parrent";

function App() {
    return (
        <Router>
                <Routes>

                    <Route path="/signup" element={<Signup/>}>
                    </Route>

                    <Route path="/login" element={<Login />}>
                    </Route>

                    <Route path="/account" element={<> <NavigationBar /> <SidebarMenu /> <MyAccount /> </>}>
                    </Route>

                    <Route path="/settings" element={<> <NavigationBar /> <SidebarMenu /> <Settings /> </>}>
                    </Route>

                    <Route path="/billing" element={<> <NavigationBar /> <SidebarMenu /> <Billing /> </>}>
                    </Route>

                    <Route path="/integrations" element={<> <NavigationBar /> <SidebarMenu /> <Integrations /> </>}>
                    </Route>

                    <Route path="/dashboard" element={<> <NavigationBar /> <SidebarMenu /> <Dashboard /> </>}>
                    </Route>

                    <Route path="/flows" element={<> <NavigationBar /> <SidebarMenu /> <Flows /> </>}>
                    </Route>

                    <Route path="/custommetrics" element={<> <NavigationBar /> <SidebarMenu /> <CustomMetrics /> </>}>
                    </Route>

                    <Route path="/strategies" element={<> <NavigationBar /> <SidebarMenu /> <Strategies /> </>}>
                    </Route>

                    <Route path="/reports" element={<> <NavigationBar /> <SidebarMenu /> <Reports /> </>}>
                    </Route>

                    <Route path="/loader" element={<>  <Loader /> </>}>
                    </Route>

                    <Route path="/support" element={<> <NavigationBar /> <SideNavBar/>  </>}>
                    </Route>

                    <Route path="/plans" element={<> <NavigationBar /> <SidebarMenu /> <Plans /></>}>
                    </Route>

                    <Route path="/flowlogic" element={<> <FlowLogicParrent />   </>}>
                    </Route>

                    <Route path="/" element={<> <NavigationBar /> <SidebarMenu /> </>}>
                    </Route>



                </Routes>
        </Router>
    );
}

export default App;
