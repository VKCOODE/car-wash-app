import {StyleSheet} from 'react-native';
import {colors, Fonts} from '../../../theme';

export default StyleSheet.create({
mainContainor:{ flex: 1, backgroundColor: '#fff' },
viewcontainor:{ flex: 1, paddingHorizontal: 30 },
imageRowheader:{ flexDirection: 'row', height: '30%', },
cwFicon:{ height: 130, top: 50, width: 178, resizeMode: 'contain' }, 
staricon:{ height: 125, marginLeft: 20, width: 125, resizeMode: 'contain' },
Icon2:{ right: 30, height: 45, width: 45, resizeMode: 'contain' },
toptextRow:{ flexDirection: 'row' },
textStyle1:{ color: colors.primarycolor }, 
inputcontainor:{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop:20}, 
codeView:{ height: 63, marginBottom: 20, flexDirection: 'row', width: '100%', borderWidth: 1, borderRadius: 5, borderColor: colors.inputBorder }, 
codeTextView:{ width: '20%', backgroundColor: colors.inputBorder, alignItems: 'center', justifyContent: 'center' }, 
codeText:{ fontSize: 16, color: 'black' }, 
input:{ width: '70%', justifyContent: 'center', }, 

});
