import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import { CWF } from '../../api/CWF';
import END_POINT from '../../EndPoints';


export const registerUser = ({}) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
       {
        CWF.post(
          // END_POINT.CHECK_EMAIL_EXIST,
          // {
          //   email: email,
          // },
          {
            headers: {
              contentType: 'application/json',
            },
          },
        )
          .then(response => {
            console.log('reg' + JSON.stringify(response));
            resolve(true);
          }).catch(error => {
            console.log('register error---------' + JSON.stringify(error));
            reject(false);
          });
      }
    });
  };
};
// export const emptyRegister = () =>{
//   return dispatch =>{
//     dispatch({type: "empty_register"})
//   }
// }


