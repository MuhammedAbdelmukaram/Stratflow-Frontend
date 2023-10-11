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
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <MyAccount />
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/settings"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Settings />
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/billing"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Billing />
                                        </Provider>
                                    </>
                                }
                            />

                            <Route
                                path="/scheduler"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Scheduler />
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/integrations"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Integrations />
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Dashboard />
                                        </Provider>
                                    </>
                                }
                            />

                                <Route
                                    element={
                                        <>
                                            <NavigationBar />
                                            <Provider store={store}>
                                                <SidebarMenu />

                                                <Flows />
                                            </Provider>
                                        </>
                                    }
                                    path="/flows"
                                    exact
                                />

                                <Route path="/strategies" element={<>
                                    <NavigationBar />
                                    <Provider store={store}>
                                        <SidebarMenu />
                                        <Strategies />
                                    </Provider>
                                </>} />

                            <Route
                                path="/custommetrics"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <CustomMetrics />
                                        </Provider>
                                    </>
                                }
                            />



                            <Route
                                path="/analytics"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Analytics/>
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/reports"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Reports />
                                        </Provider>
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
                                        <Provider store={store}>
                                            <SidebarMenu />
                                        </Provider>
                                    </>
                                }
                            />
                            <Route
                                path="/plans"
                                element={
                                    <>
                                        <NavigationBar />
                                        <Provider store={store}>
                                            <SidebarMenu />
                                            <Plans />
                                        </Provider>
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
