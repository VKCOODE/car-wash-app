import React from 'react';

import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';
import { BackHandler, Alert } from 'react-native';

import {

  Welcome,

} from './components/screens/index';


const RouterComponent = ({ onRouteChanged }:any) => {
  function handleBackButton() {
    BackHandler.exitApp();
    return true;
  }
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
          key="Welcome"
          hideNavBar={true}
          component={Welcome}
          gestureEnable={false}
          panHandlers={null}
        />
        
   

        {/* <Scene key="Main" hideNavBar>
       
          <Tabs

            showLabel={false}
            lazy={true}
            swipeEnabled={false}
            gestureEnable={false}
            panHandlers={null}
            type="reset"

            // tabBarStyle={{
            //   height: 70,
            //   paddingBottom: 20,
            //   borderTopWidth: 0,
            //   shadowColor: 'red',
            //   shadowOffset: {
            //     width: 2,
            //     height: 2,
            //   },
            //   shadowOpacity: 0.4,
            //   shadowRadius: 10,
            //   elevation: 3,
            //   backgroundColor: ThemeManager.colors.tabBG,
            //   borderTopLeftRadius: 12,
            //   borderTopRightRadius: 12,
            // }}
            
            
            
            >
        

            <Scene
              key="HomePage"
              hideNavBar={true}
              component={HomePage}
              gestureEnable={false}
              panHandlers={null}
              initial

            />
            <Scene
              key="BuySellMarket"
              hideNavBar={true}
              component={BuySellMarket}
              gestureEnable={false}
              panHandlers={null}
            />
            <Scene
              hideNavBar={true}
              key="Wallets"
              component={Wallets}
              gestureEnable={false}
              panHandlers={null}
            />
            {/* <Scene
          key="HistoryWallet"
          hideNavBar={true}
          component={HistoryWallet}
          gestureEnable={false}
          panHandlers={null}
        /> */}
            {/* <Scene
              hideNavBar={true}
              key="DebitCard"
              component={DebitCard}
              gestureEnable={false}
              panHandlers={null}
            /> */}
          {/* </Tabs> */}
        {/* </Scene> */} 

        
      
      </Scene>
    </Router>
  );
};

export default RouterComponent;
