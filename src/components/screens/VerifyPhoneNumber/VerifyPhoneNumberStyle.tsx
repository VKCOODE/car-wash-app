import {StyleSheet} from 'react-native';
import {colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  mainStyle: 
    { flex: 1, backgroundColor: '#fff' },
    viewContainor:{ flex: 1, paddingHorizontal: 30, },
    washerIconView:{ height: '30%', }, 
    washericon:{ height: 130, top: 30, width: 178, resizeMode: 'contain' }, 
    verifyText:{ color: colors.primarycolor },
    textView:{ paddingVertical: 7 }, 
    inputView:{ width: '100%', justifyContent: 'center', alignItems: 'center', }, 
    verifyBtn:{ width: '100%', marginTop: 50, }, 
    rowText:{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', },
    textStyle:{ fontSize: 14 }, 


});
