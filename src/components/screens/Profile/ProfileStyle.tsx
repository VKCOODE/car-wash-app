import {StyleSheet} from 'react-native';
import {colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  searchbtnView:{marginTop: 20,width:'100%', }, 
  timetext:{ fontSize: 14, marginLeft: 12, color: '#5391C6' }, 
  renderView:{
    backgroundColor: colors.iconBg, width: '29%', margin: 7, borderRadius: 10, shadowColor: colors.primaryBlue,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    height: 73
  },timeicon:{ height: 20, width: 20, resizeMode: 'contain', }, 
  timeview:{
    justifyContent: 'space-around', flexDirection: 'row',
    width: '45%', shadowColor: 'blue',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, height: '100%', borderWidth: 1, borderColor: '#5391C6', backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 5, justifyContent: 'center'
  },
  datetxt:{ fontSize: 14, marginLeft: 12, color: '#5391C6' }, 
  calandericon:{ height: 20, width: 20, resizeMode: 'contain', }, 
  pressdtae:{
    flexDirection: 'row',
   width: '45%', shadowColor: 'blue',
   shadowOpacity: 0.26,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 10,
   elevation: 3, height: '100%', borderWidth: 1, borderColor: '#5391C6', backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 5, justifyContent: 'center'
 }, 
  dateview:{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, height: 44, width: '100%', }, 
  services:{ fontSize: 20, paddingVertical: 10, }, 
  renderRow:{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-around' }, 
  renderimage:{ height: 50, width: 50, resizeMode: 'contain' }, 
  infoicon:{ height: 10, width: 10, resizeMode: 'contain' }, 
  itemtxt:{ fontSize: 12, fontWeight: '500', color: 'black', width: 60 }, 
  dropdown:{ alignItems: 'flex-start', justifyContent: 'flex-start' }, 
  selectedtext:{ color: 'black', }, 
  rowtextstyle:{ color: 'grey', justifyContent: 'flex-start' }, 
  btntext:{ color: colors.textColor, left:10, fontSize: 16, }, 
  searchinput:{ width: '100%', backgroundColor: '#fff' }, 
  // rowstyle:{ width: '100%', backgroundColor: colors.iconBg, borderRightColor: 'pink' }, 
  // btnstyle:{ width: '100%', backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: colors.inputBorder, opacity: 2 }, 
});
