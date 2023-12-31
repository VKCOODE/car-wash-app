import React from 'react';
import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';
import {  Alert } from 'react-native';
import {
  Welcome,
  Splash
} from './components/screens/index';
import VerifyPhoneNumber from './components/screens/VerifyPhoneNumber/VerifyPhoneNumber';
import EnterUserdetail from './components/screens/EnterUserdetail/EnterUserdetail';
import Dashboard from './components/screens/Dashboard/Dashboard';
import Home from './components/screens/Home/Home';
import MianSearch from './components/screens/MianSearch/MianSearch';
import PastSearch from './components/screens/PastSearch/PastSearch';
import ServiceCenter from './components/screens/ServiceCenter/ServiceCenter';
import MyBookings from './components/screens/MyBookings/MyBookings';
import MyBookingsDetails from './components/screens/MyBookingsDetails/MyBookingsDetails';
import Profile from './components/screens/Profile/Profile';

const RouterComponent = ({ onRouteChanged }: any) => {

  return (
    <Router
      onStateChange={onRouteChanged}
      navigationBarStyle={{
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 0,
      }}
      hideNavBar={false}
      leftButtonIconStyle={{ width: 21, height: 18 }}
      titleStyle={{ color: '#fff' }}>
      <Scene wrap={false} key="root" hideNavBar>
        <Scene
          initial
          key="Splash"
          hideNavBar={true}
          component={Splash}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="Welcome"
          hideNavBar={true}
          component={Welcome}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="VerifyPhoneNumber"
          hideNavBar={true}
          component={VerifyPhoneNumber}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="EnterUserdetail"
          hideNavBar={true}
          component={EnterUserdetail}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="Profile"
          hideNavBar={true}
          component={Profile}
          gestureEnable={false}
          panHandlers={null}
        />
        
             <Scene
          key="PastSearch"
          hideNavBar={true}
          component={PastSearch}
          gestureEnable={false}
          panHandlers={null}
        />
         <Scene
          key="ServiceCenter"
          hideNavBar={true}
          component={ServiceCenter}
          gestureEnable={false}
          panHandlers={null}
        />
         <Scene
          key="MyBookings"
          hideNavBar={true}
          component={MyBookings}
          gestureEnable={false}
          panHandlers={null}
        />
           <Scene
          key="MyBookingsDetails"
          hideNavBar={true}
          component={MyBookingsDetails}
          gestureEnable={false}
          panHandlers={null}
        />


        
        <Scene
          key="Dashboard"
          hideNavBar={true}
          component={Dashboard}
          gestureEnable={false}
          panHandlers={null}
        />
{/* ///////////////////////////////TABS VIEW/////////////////////////////// */}
        <Scene
          key='Dashboard'
          hideNavBar
          tabs={true}
        >
          <Scene
            key='Home'
            component={Home}
            gestureEnable={false}
            panHandlers={null}
            hideNavBar
          />
          <Scene
            component={Dashboard}
            gestureEnable={false}
            panHandlers={null}
            hideNavBar
            initial
          />
          <Scene
            component={MianSearch}
            gestureEnable={false}
            panHandlers={null}
            hideNavBar
          />

        </Scene>
{/* ////////////////////////////////////////////////////////////////////// */}

       
      </Scene>
    </Router>
  );
};

export default RouterComponent;
