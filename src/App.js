import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Common/NavBar';
import Login from './Common/Login';
import SidebarMenu from './Common/SideBar';
import Signup from './Common/Signup';
import MyAccount from './Secondary Menu/My Account';
import Settings from './Secondary Menu/Settings';
import Integrations from './Secondary Menu/Integrations';
import Billing from './Secondary Menu/Billing';
import Dashboard from './Menu/Dashboard';
import CustomMetrics from './Menu/Custom Metrics';
import Strategies from './Menu/Strategies';
import Reports from './Menu/Reports';
import Flows from './Menu/Flows';
import Loader from './Common/Loader';
import Plans from './Header Menu/Plans';
import Support from './Header Menu/Support';
import SideNavBar from './Common/SideNavBar';
import FlowLogicParrent from './Flow Logic/FlowLogic Parrent';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Scheduler from './Menu/Scheduler';
import {AuthProvider} from "./Auth/authContext";
import ProtectedRoute from "./Auth/protectedRoutes";
import Analytics from "./Menu/Analytics";

function App() {
    return (
        <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />

                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/account"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <MyAccount />
                                    </>
                                }
                            />
                            <Route
                                path="/settings"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Settings />
                                    </>
                                }
                            />
                            <Route
                                path="/billing"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Billing />
                                    </>
                                }
                            />

                            <Route
                                path="/scheduler"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Scheduler />
                                    </>
                                }
                            />
                            <Route
                                path="/integrations"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Integrations />
                                    </>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Provider store={store}>
                                            <Dashboard />
                                        </Provider>
                                    </>
                                }
                            />

                                <Route
                                    element={
                                        <>
                                            <NavigationBar />
                                            <SidebarMenu />
                                            <Provider store={store}>
                                                <Flows />
                                            </Provider>
                                        </>
                                    }
                                    path="/flows"
                                    exact
                                />

                                <Route path="/strategies" element={<>
                                    <NavigationBar />
                                    <SidebarMenu />
                                    <Strategies />
                                </>} />

                            <Route
                                path="/custommetrics"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <CustomMetrics />
                                    </>
                                }
                            />



                            <Route
                                path="/analytics"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Analytics/>
                                    </>
                                }
                            />
                            <Route
                                path="/reports"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Reports />
                                    </>
                                }
                            />
                            <Route
                                path="/loader"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Loader />
                                    </>
                                }
                            />
                            <Route
                                path="/support"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SideNavBar />
                                    </>
                                }
                            />
                            <Route
                                path="/plans"
                                element={
                                    <>
                                        <NavigationBar />
                                        <SidebarMenu />
                                        <Plans />
                                    </>
                                }
                            />
                            <Route
                                path="/flowlogic/:flowId"
                                element={
                                    <>
                                        <Provider store={store}>
                                            <FlowLogicParrent />
                                        </Provider>
                                    </>
                                }
                            />
                        </Route>

                        <Route
                            path="/"
                            element={
                                <>
                                    <NavigationBar />
                                    <SidebarMenu />
                                </>
                            }
                        />


                    </Routes>
                </Router>
            </AuthProvider>
    );
}

export default App;
