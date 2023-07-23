import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import { CoinCultApi } from '../../api/CWF';
import END_POINT from '../../EndPoints';
import {
  REGISTER_FORM_UPDATE,
 
} from './types';
import * as constants from '../../Constants';
import { Alert } from 'react-native';
import { getMultiLingualData } from '../../../Utils';
import { reject } from 'lodash';
import Singleton from '../../Singleton';

export const registerFormUpdate = ({ prop, value }) => {
  return {
    type: REGISTER_FORM_UPDATE,
    payload: { prop, value },
  };
};
// export const registerUserDetailUpdate = ({ prop, value }) => {
//   return {
//     type: REGISTER_FORM_UPDATE,
//     payload: { prop, value },
//   };
// };

export const resetRegisterForm = () => {
  return {
    type: RESET_REGISTER,
  };
};

export const registerUser = ({
  email,
  // recaptchaCheck,
}) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: REGISTER_USER });
      console.log('REGISTER_USER========', {
        email: email,
      });
       {
        CoinCultApi.post(
          END_POINT.CHECK_EMAIL_EXIST,
          {
            email: email,
          },
          {
            headers: {
              contentType: 'application/json',
            },
          },
        )
          .then(response => {
            console.log('reg' + JSON.stringify(response));
            registerUserSuccess(dispatch, response.data);
            resolve(true);
          })
          .catch(error => {
            console.log('register error---------' + JSON.stringify(error));
            reject(false);
          });
      }
    });
  };
};
export const emptyRegister = () =>{
  return dispatch =>{
    dispatch({type: "empty_register"})
  }
}

export const registerUserDetail = ({
  email,
  firstName,
  lastName,
  country,
  mobileNumber,
  password,
  confirmPassword,
  phoneCode


}) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: REGISTER_USER });
       {
        console.log(END_POINT.NEW_USER_REGISTER);
    
        let newParams ={
          email: email,
          firstName: firstName,
          lastName: lastName,
          countryName: country,
          password: password,
          confirmPassword:confirmPassword,
          mobileNumber: mobileNumber,
          capReq: "0",
          captchatext: "",
          code: "",
          registered_by: "3",
          device_token: "",
          hash: "",
          device_type: "3",
          phoneCode: phoneCode,
          ip: ""
        }

        console.log("==>>>>>>>>>>>>>>>>",newParams)

          CoinCultApi.post(END_POINT.NEW_USER_REGISTER, newParams, {
            headers: {
              contentType: 'application/json',
              // Authorization: JSON.parse(userData).access_token,
            },
          },
        
        )
          .then(response => {
            
            console.log('response---registerUserSuccess--' + JSON.stringify(response.data));
            Singleton.showAlert(response.data.message)
            registerUserSuccess(dispatch, response.data);
            resolve(response.data);
          })
          .catch(error => {
            Singleton.showAlert(error.esponse.data.message)
            console.log('register error---------------++++++' + JSON.stringify(error));
            reject(error);
          });
      }
    });
  };
};

const registerUserFail = (disptach, errorMessage) => {
  disptach({
    type: REGISTER_USER_FAIL,
    payload: errorMessage,
  });
};
const registerUserSuccess = (disptach, user) => {
  disptach({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });
  // Alert.alert(
  //   constants.APP_NAME,
  //   'Registration successfully.\n Please verify your email address',
  //   [
  //     {
  //       text: 'ok',
  //       onPress: () => {
  //         Actions.Login();
  //       },
  //     },
  //   ],
  //   {cancelable: false},
  // );
};
