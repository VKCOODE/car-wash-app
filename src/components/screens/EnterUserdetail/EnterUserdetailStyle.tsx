import {StyleSheet} from 'react-native';
import {colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  mainContainor: { flex: 1, backgroundColor: '#fff' },
  textStyle: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  mainview:{ flex: 1, paddingHorizontal: 30, }, 
  rowtext:{ flexDirection: 'row', marginTop: 40 }, 
  hellotxt:{ color: colors.primarycolor, fontSize: 32 },
  inputview:{ marginTop: 15 },
  btnview:{ width: '100%', justifyContent: 'center', alignItems: 'center', },
});
