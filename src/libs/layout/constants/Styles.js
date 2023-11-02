import { StyleSheet } from "react-native";
import normalize from '../normalize/normalized';
import {useDefaultQuery, useMediaQuery,applyMedia} from '../quries/useGridQuries';


export const GlobalStyles = () => {
    const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
    return StyleSheet.create({
            /*--------------------Responsive Text 1-------------------------------*/
            font30:[ {
                fontSize: normalize(30),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(30),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(36),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(38),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(40),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(42),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(30),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(34),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(36),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(40),
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(46),    
                    }),
                   
                ],
                       /*--------------------Responsive Text 2-------------------------------*/
            font28:[ {
                fontSize: normalize(28),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(28),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(32),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(34),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(36),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(42),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(28),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(32),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(34),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(36),
                        
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(42),    
                    }),
                   
                ],
                                /*--------------------Responsive Text 3-------------------------------*/
            font26:[ {
                fontSize: normalize(26),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(26),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(30),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(32),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(34),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(46),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(26),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(28),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(30),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(32),
                        
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(38),    
                    }),
                   
                ],
            /*--------------------Responsive Text 4-------------------------------*/
            font24:[ {
                fontSize: normalize(24),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(24),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(28),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(30),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(32),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(34),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(24),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(26),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(28),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(30),
                        
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(36),    
                    }),
                   
                ],
                                               /*--------------------Responsive Text 5-------------------------------*/
            font22:[ {
                fontSize: normalize(22),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(22),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(26),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(28),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(30),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(32),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(22),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(24),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(26),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(28),
                        
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(34),    
                    }),
                   
                ],
                                                        /*--------------------Responsive Text 6-------------------------------*/
            font20:[ {
                fontSize: normalize(20),
                   
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(20),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(24),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(26),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(28),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(30),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(20),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(22),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(24),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(26),
                        
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(32),    
                    }),
                   
                ],
    /*--------------------Responsive Text 7-------------------------------*/
        font18:[ {
            fontSize: normalize(18),
              
                }
                ,
                applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                    fontSize: normalize(18),
                }),
                applyMedia(smp, { // i pad mini 6 th gen
                    fontSize: normalize(22),
                }),
                applyMedia(mdp, {   //i pad pro 9.7 ich
                    fontSize: normalize(24),
                }),
                applyMedia(xlp, { //i pad pro 12.9 inch
                    fontSize: normalize(26),  
                }),
                applyMedia(xxlp, {    // apple  tv   
                    fontSize: normalize(28),          
                }),
                applyMedia(xsl, {
                    fontSize: normalize(18),     
                }),
                applyMedia(sml, { //i phone 8 ,i phone se 
                    fontSize: normalize(20),  
                }),
                applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                    fontSize: normalize(22),
                }),
                applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                    fontSize: normalize(24),
                }),
                applyMedia(xxll, { // i pad pro 12.9     
                    fontSize: normalize(30),    
                }),
               
            ],
                /*--------------------Responsive Text 8-------------------------------*/
            font16:[ {
                fontSize: normalize(16),
                    }
                    ,
                    applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                        fontSize: normalize(16),
                    }),
                    applyMedia(smp, { // i pad mini 6 th gen
                        fontSize: normalize(20),
                    }),
                    applyMedia(mdp, {   //i pad pro 9.7 ich
                        fontSize: normalize(22),
                    }),
                    applyMedia(xlp, { //i pad pro 12.9 inch
                        fontSize: normalize(24),  
                    }),
                    applyMedia(xxlp, {    // apple  tv   
                        fontSize: normalize(26),          
                    }),
                    applyMedia(xsl, {
                        fontSize: normalize(16),     
                    }),
                    applyMedia(sml, { //i phone 8 ,i phone se 
                        fontSize: normalize(18),  
                    }),
                    applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                        fontSize: normalize(20),
                    }),
                    applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                        fontSize: normalize(22),
                    }),
                    applyMedia(xxll, { // i pad pro 12.9     
                        fontSize: normalize(28),    
                    }),
                   
                ],
                    /*--------------------Responsive Text 9-------------------------------*/
                font14:[ {
                    fontSize: normalize(14),
                        }
                        ,
                        applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                            fontSize: normalize(14),
                        }),
                        applyMedia(smp, { // i pad mini 6 th gen
                            fontSize: normalize(18),
                        }),
                        applyMedia(mdp, {   //i pad pro 9.7 ich
                            fontSize: normalize(20),
                        }),
                        applyMedia(xlp, { //i pad pro 12.9 inch
                            fontSize: normalize(22),  
                        }),
                        applyMedia(xxlp, {    // apple  tv   
                            fontSize: normalize(24),          
                        }),
                        applyMedia(xsl, {
                            fontSize: normalize(14),
                    
                        }),
                        applyMedia(sml, { //i phone 8 ,i phone se 
                            fontSize: normalize(16),  
                        }),
                        applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                            fontSize: normalize(18),
                        }),
                        applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                            fontSize: normalize(20),
                        }),
                        applyMedia(xxll, { // i pad pro 12.9     
                            fontSize: normalize(26),    
                        }),
                       
                    ],
                            /*--------------------Responsive Text 10-------------------------------*/
                font12:[ {
                    fontSize: normalize(12),
                     
                        }
                        ,
                        applyMedia(xsp, { //iphone 12 mini // i phone 13 pro max
                            fontSize: normalize(12),
                        }),
                        applyMedia(smp, { // i pad mini 6 th gen
                            fontSize: normalize(16),
                        }),
                        applyMedia(mdp, {   //i pad pro 9.7 ich
                            fontSize: normalize(18),
                        }),
                        applyMedia(xlp, { //i pad pro 12.9 inch
                            fontSize: normalize(20),  
                        }),
                        applyMedia(xxlp, {    // apple  tv   
                            fontSize: normalize(22),          
                        }),
                        applyMedia(xsl, {
                            fontSize: normalize(12),
                    
                        }),
                        applyMedia(sml, { //i phone 8 ,i phone se 
                            fontSize: normalize(14),  
                        }),
                        applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
                            fontSize: normalize(16),
                        }),
                        applyMedia(xll, { // i  pad mini 6 th generation  //i pad pro 9.7 inch
                            fontSize: normalize(18),
                        }),
                        applyMedia(xxll, { // i pad pro 12.9     
                            fontSize: normalize(24),    
                        }),
                       
                    ],

                    fw1: {
                    fontWeight: '100'
                    },
                    fw2: {
                    fontWeight: '200'
                    },
                    fw3: {
                    fontWeight: '300'
                    },
                    fw4: {
                    fontWeight: '400'
                    },
                    fw5: {fontWeight: '500'
                    },
                     fw6: {
                    fontWeight: '600'
                    },
                    fw7: {
                    fontWeight: '700'
                    },
                 fw8: {
                  fontWeight: '800'
                  },
                  fw9: {
                  fontWeight: '900'
                 },
                 fwb: {
                 fontWeight:'bold'
                  },
                  fwn: {
                 fontWeight:'normal'
                 },
    //----------------------------------------#Text------------------------------------------------------
    textAuto: { textAlign: 'auto' },
    textLeft: { textAlign: 'left' },
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right' },
    textJustify: { textAlign: 'justify' },
                                                                         
    textUppercase: { textTransform: 'uppercase' },
    textLowercase: { textTransform: 'lowercase' },
    textCapitalize: { textTransform: 'capitalize' },
    textNoTransform: { textTransform: 'none' },
    
    textUnderline: { textDecorationLine: 'underline' },
    textStrike: { textDecorationLine: 'line-through' },
    textNoDecoration: { textDecorationLine: 'none' },
//----------------------------------------#End-Text------------------------------------------------------

    row: { flexDirection: 'row' },
    rowReversed: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
                                                          
   stack: { flexDirection: 'column' },
  stackReversed: { flexDirection: 'column-reverse' },
   
  spaceBetween: { justifyContent: 'space-between' },
 spaceEvenly: { justifyContent: 'space-evenly' },
 spaceAround: { justifyContent: 'space-around' },
 fill: { flex: 1 },
                                                          
    //----------------------------------------#Width------------------------------------------------------
   width0: { width: 0 },
   width10: { width: '10%' },
   width15: { width: '15%' },
   width20: { width: '20%' },
   width25: { width: '25%' },
   width33: { width: '33.5%' },
   width50: { width: '50%' },
   width66: { width: '66.5%' },
   width75: { width: '75%' },
   width80: { width: '80%' },
   width85: { width: '85%' },
   width90: { width: '90%' },
   width100: { width: '100%' },
                                                          
    minWidth0: { minWidth: 0 },
    minWidth10: { minWidth: '10%' },
    minWidth15: { minWidth: '15%' },
    minWidth20: { minWidth: '20%' },
    minWidth25: { minWidth: '25%' },
    minWidth33: { minWidth: '33.5%' },
    minWidth50: { minWidth: '50%' },
    minWidth66: { minWidth: '66.5%' },
    minWidth75: { minWidth: '75%' },
    minWidth80: { minWidth: '80%' },
    minWidth85: { minWidth: '85%' },
    minWidth90: { minWidth: '90%' },
    minWidth100: { minWidth: '100%' },
                                                          
    maxWidth0: { maxWidth: 0 },
    maxWidth10: { maxWidth: '10%' },
    maxWidth15: { maxWidth: '15%' },
    maxWidth20: { maxWidth: '20%' },
    maxWidth25: { maxWidth: '25%' },
    maxWidth33: { maxWidth: '33.5%' },
    maxWidth50: { maxWidth: '50%' },
    maxWidth66: { maxWidth: '66.5%' },
    maxWidth75: { maxWidth: '75%' },
    maxWidth80: { maxWidth: '80%' },
    maxWidth85: { maxWidth: '85%' },
    maxWidth90: { maxWidth: '90%' },
    maxWidth100: { maxWidth: '100%' },
  //----------------------------------------#EndWidth------------------------------------------------------
                                                          
//----------------------------------------#Height------------------------------------------------------
     height0: { height: 0 },
     height10: { height: '10%' },
     height15: { height: '15%' },
     height20: { height: '20%' },
     height25: { height: '25%' },
     height33: { height: '33.5%' },
     height50: { height: '50%' },
     height66: { height: '66.5%' },
     height75: { height: '75%' },
     height80: { height: '80%' },
     height85: { height: '85%' },
     height90: { height: '90%' },
     height100: { height: '100%' },
                                                          
    minHeight0: { minHeight: 0 },
    minHeight10: { minHeight: '10%' },
    minHeight15: { minHeight: '15%' },
    minHeight20: { minHeight: '20%' },
    minHeight25: { minHeight: '25%' },
    minHeight33: { minHeight: '33.5%' },
    minHeight50: { minHeight: '50%' },
    minHeight66: { minHeight: '66.5%' },
    minHeight75: { minHeight: '75%' },
    minHeight80: { minHeight: '80%' },
    minHeight85: { minHeight: '85%' },
    minHeight90: { minHeight: '90%' },
    minHeight100: { minHeight: '100%' },
                                                          
    maxHeight0: { maxHeight: 0 },
    maxHeight10: { maxHeight: '10%' },
    maxHeight15: { maxHeight: '15%' },
    maxHeight20: { maxHeight: '20%' },
    maxHeight25: { maxHeight: '25%' },
    maxHeight33: { maxHeight: '33.5%' },
    maxHeight50: { maxHeight: '50%' },
    maxHeight66: { maxHeight: '66.5%' },
    maxHeight75: { maxHeight: '75%' },
    maxHeight80: { maxHeight: '80%' },
    maxHeight85: { maxHeight: '85%' },
    maxHeight90: { maxHeight: '90%' },
    maxHeight100: { maxHeight: '100%' },
    //----------------------------------------End Height------------------------------------------------------
                                                          
    //----------------------------------------#Align Item------------------------------------------------------
    alignCenter: { alignItems: 'center', justifyContent: 'center' },
                                                          
    alignTop: { justifyContent: 'flex-start' },
    alignBotom: { justifyContent: 'flex-end' },
    alignLeft: { alignItems: 'flex-start' },
    alignRight: { alignItems: 'flex-end' },
    alignCenterVertical: { justifyContent: 'center' },
    alignCenterHorizontal: { alignItems: 'center' },
                                                          
    alignRowTop: { alignItems: 'flex-start' },
    alignRowBotom: { alignItems: 'flex-end' },
    alignRowLeft: { justifyContent: 'flex-start' },
    alignRowRight: { justifyContent: 'flex-end' },
    alignRowCenterVertical: { alignItems: 'center' },
    alignRowCenterHorizontal: { justifyContent: 'center' },
                                                          
    //----------------------------------------#End AlignItem------------------------------------------------------
                                                          
     //----------------------------------------#Margin and Padding------------------------------------------------
    margin0: { margin: 0 },
    margin1: { margin: 4 }, // 1
    margin2: { margin: 8 }, // 2
    margin3: { margin: 12 }, // 3
    margin4: { margin: 16 }, // 4
    margin5: { margin: 20 }, // 5
    margin6: { margin: 24 }, // 6
    margin7: { margin: 28 }, // 7
    margin8: { margin: 32 }, // 8
    margin9: { margin: 36 }, // 9
    margin10: { margin: 40 }, // 10
    margin11: { margin: 44 }, // 11
    margin12: { margin: 48 }, // 12
                                                          
    marginTop0: { marginTop: 0 },
    marginTop1: { marginTop: 4 }, // 1
    marginTop2: { marginTop: 8 }, // 2
    marginTop3: { marginTop: 12 }, // 3
    marginTop4: { marginTop: 16 }, // 4
    marginTop5: { marginTop: 20 }, // 5
    marginTop6: { marginTop: 24 }, // 6
    marginTop7: { marginTop: 28 }, // 7
    marginTop8: { marginTop: 32 }, // 8
    marginTop9: { marginTop: 36 }, // 9
    marginTop10: { marginTop: 40 }, // 10
    marginTop11: { marginTop: 44 }, // 11
    marginTop12: { marginTop: 48 }, // 12
                                                          
    marginRight0: { marginRight: 0 },
    marginRight1: { marginRight: 4 }, // 1
    marginRight2: { marginRight: 8 }, // 2
    marginRight3: { marginRight: 12 }, // 3
    marginRight4: { marginRight: 16 }, // 4
    marginRight5: { marginRight: 20 }, // 5
    marginRight6: { marginRight: 24 }, // 6
    marginRight7: { marginRight: 28 }, // 7
    marginRight8: { marginRight: 32 }, // 8
    marginRight9: { marginRight: 36 }, // 9
    marginRight10: { marginRight: 40 }, // 10
    marginRight11: { marginRight: 44 }, // 11
    marginRight12: { marginRight: 48 }, // 12
                                                          
    marginBottom0: { marginBottom: 0 },
    marginBottom1: { marginBottom: 4 }, // 1
    marginBottom2: { marginBottom: 8 }, // 2
    marginBottom3: { marginBottom: 12 }, // 3
    marginBottom4: { marginBottom: 16 }, // 4
    marginBottom5: { marginBottom: 20 }, // 5
    marginBottom6: { marginBottom: 24 }, // 6
    marginBottom7: { marginBottom: 28 }, // 7
    marginBottom8: { marginBottom: 32 }, // 8
    marginBottom9: { marginBottom: 36 }, // 9
    marginBottom10: { marginBottom: 40 }, // 10
    marginBottom11: { marginBottom: 44 }, // 11
    marginBottom12: { marginBottom: 48 }, // 12
                                                          
    marginLeft0: { marginLeft: 0 },
    marginLeft1: { marginLeft: 4 }, // 1
    marginLeft2: { marginLeft: 8 }, // 2
    marginLeft3: { marginLeft: 12 }, // 3
    marginLeft4: { marginLeft: 16 }, // 4
    marginLeft5: { marginLeft: 20 }, // 5
    marginLeft6: { marginLeft: 24 }, // 6
    marginLeft7: { marginLeft: 28 }, // 7
    marginLeft8: { marginLeft: 32 }, // 8
    marginLeft9: { marginLeft: 36 }, // 9
    marginLeft10: { marginLeft: 40 }, // 10
    marginLeft11: { marginLeft: 44 }, // 11
    marginLeft12: { marginLeft: 48 }, // 12
                                                          
    marginVertical0: { marginVertical: 0 },
    marginVertical1: { marginVertical: 4 }, // 1
    marginVertical2: { marginVertical: 8 }, // 2
    marginVertical3: { marginVertical: 12 }, // 3
    marginVertical4: { marginVertical: 16 }, // 4
    marginVertical5: { marginVertical: 20 }, // 5
    marginVertical6: { marginVertical: 24 }, // 6
    marginVertical7: { marginVertical: 28 }, // 7
    marginVertical8: { marginVertical: 32 }, // 8
    marginVertical9: { marginVertical: 36 }, // 9
    marginVertical10: { marginVertical: 40 }, // 10
    marginVertical11: { marginVertical: 44 }, // 11
    marginVertical12: { marginVertical: 48 }, // 12
                                                          
    marginHorizontal0: { marginHorizontal: 0 },
    marginHorizontal1: { marginHorizontal: 4 }, // 1
    marginHorizontal2: { marginHorizontal: 8 }, // 2
    marginHorizontal3: { marginHorizontal: 12 }, // 3
    marginHorizontal4: { marginHorizontal: 16 }, // 4
    marginHorizontal5: { marginHorizontal: 20 }, // 5
    marginHorizontal6: { marginHorizontal: 24 }, // 6
    marginHorizontal7: { marginHorizontal: 28 }, // 7
    marginHorizontal8: { marginHorizontal: 32 }, // 8
    marginHorizontal9: { marginHorizontal: 36 }, // 9
    marginHorizontal10: { marginHorizontal: 40 }, // 10
    marginHorizontal11: { marginHorizontal: 44 }, // 11
    marginHorizontal12: { marginHorizontal: 48 }, // 12
                                                          
    padding0: { padding: 0 },
    padding1: { padding: 4 }, // 1
    padding2: { padding: 8 }, // 2
    padding3: { padding: 12 }, // 3
    padding4: { padding: 16 }, // 4
    padding5: { padding: 20 }, // 5
    padding6: { padding: 24 }, // 6
    padding7: { padding: 28 }, // 7
    padding8: { padding: 32 }, // 8
    padding9: { padding: 36 }, // 9
    padding10: { padding: 40 }, // 10
    padding11: { padding: 44 }, // 11
    padding12: { padding: 48 }, // 12
                                                          
    paddingTop0: { paddingTop: 0 },
    paddingTop1: { paddingTop: 4 }, // 1
    paddingTop2: { paddingTop: 8 }, // 2
    paddingTop3: { paddingTop: 12 }, // 3
    paddingTop4: { paddingTop: 16 }, // 4
    paddingTop5: { paddingTop: 20 }, // 5
    paddingTop6: { paddingTop: 24 }, // 6
    paddingTop7: { paddingTop: 28 }, // 7
    paddingTop8: { paddingTop: 32 }, // 8
    paddingTop9: { paddingTop: 36 }, // 9
    paddingTop10: { paddingTop: 40 }, // 10
    paddingTop11: { paddingTop: 44 }, // 11
    paddingTop12: { paddingTop: 48 }, // 12
                                                          
    paddingRight0: { paddingRight: 0 },
    paddingRight1: { paddingRight: 4 }, // 1
    paddingRight2: { paddingRight: 8 }, // 2
    paddingRight3: { paddingRight: 12 }, // 3
    paddingRight4: { paddingRight: 16 }, // 4
    paddingRight5: { paddingRight: 20 }, // 5
    paddingRight6: { paddingRight: 24 }, // 6
    paddingRight7: { paddingRight: 28 }, // 7
    paddingRight8: { paddingRight: 32 }, // 8
    paddingRight9: { paddingRight: 36 }, // 9
    paddingRight10: { paddingRight: 40 }, // 10
    paddingRight11: { paddingRight: 44 }, // 11
    paddingRight12: { paddingRight: 48 }, // 12
                                                          
    paddingBottom0: { paddingBottom: 0 },
    paddingBottom1: { paddingBottom: 4 }, // 1
    paddingBottom2: { paddingBottom: 8 }, // 2
    paddingBottom3: { paddingBottom: 12 }, // 3
    paddingBottom4: { paddingBottom: 16 }, // 4
    paddingBottom5: { paddingBottom: 20 }, // 5
    paddingBottom6: { paddingBottom: 24 }, // 6
    paddingBottom7: { paddingBottom: 28 }, // 7
    paddingBottom8: { paddingBottom: 32 }, // 8
    paddingBottom9: { paddingBottom: 36 }, // 9
    paddingBottom10: { paddingBottom: 40 }, // 10
    paddingBottom11: { paddingBottom: 44 }, // 11
    paddingBottom12: { paddingBottom: 48 }, // 12
                                                          
    paddingLeft0: { paddingLeft: 0 },
    paddingLeft1: { paddingLeft: 4 }, // 1
    paddingLeft2: { paddingLeft: 8 }, // 2
    paddingLeft3: { paddingLeft: 12 }, // 3
    paddingLeft4: { paddingLeft: 16 }, // 4
    paddingLeft5: { paddingLeft: 20 }, // 5
    paddingLeft6: { paddingLeft: 24 }, // 6
    paddingLeft7: { paddingLeft: 28 }, // 7
    paddingLeft8: { paddingLeft: 32 }, // 8
    paddingLeft9: { paddingLeft: 36 }, // 9
    paddingLeft10: { paddingLeft: 40 }, // 10
    paddingLeft11: { paddingLeft: 44 }, // 11
    paddingLeft12: { paddingLeft: 48 }, // 12
                                                          
    paddingVertical0: { paddingVertical: 0 },
    paddingVertical1: { paddingVertical: 4 }, // 1
    paddingVertical2: { paddingVertical: 8 }, // 2
    paddingVertical3: { paddingVertical: 12 }, // 3
    paddingVertical4: { paddingVertical: 16 }, // 4
    paddingVertical5: { paddingVertical: 20 }, // 5
    paddingVertical6: { paddingVertical: 24 }, // 6
    paddingVertical7: { paddingVertical: 28 }, // 7
    paddingVertical8: { paddingVertical: 32 }, // 8
    paddingVertical9: { paddingVertical: 36 }, // 9
    paddingVertical10: { paddingVertical: 40 }, // 10
    paddingVertical11: { paddingVertical: 44 }, // 11
    paddingVertical12: { paddingVertical: 48 }, // 12
                                                          
    paddingHorizontal0: { paddingHorizontal: 0 },
    paddingHorizontal1: { paddingHorizontal: 4 }, // 1
    paddingHorizontal2: { paddingHorizontal: 8 }, // 2
    paddingHorizontal3: { paddingHorizontal: 12 }, // 3
    paddingHorizontal4: { paddingHorizontal: 16 }, // 4
    paddingHorizontal5: { paddingHorizontal: 20 }, // 5
    paddingHorizontal6: { paddingHorizontal: 24 }, // 6
    paddingHorizontal7: { paddingHorizontal: 28 }, // 7
    paddingHorizontal8: { paddingHorizontal: 32 }, // 8
    paddingHorizontal9: { paddingHorizontal: 36 }, // 9
    paddingHorizontal10: { paddingHorizontal: 40 }, // 10
    paddingHorizontal11: { paddingHorizontal: 44 }, // 11
    paddingHorizontal12: { paddingHorizontal: 48 }, // 12
                                                          
     //----------------------------------------#Margin and Padding------------------------------------------------
                                                          
    //----------------------------------------#Utilities------------------------------------------------
    show: { display: 'flex' },
    hidden: { display: 'none' },
                                                          
    imageCenter: { resizeMode: 'center' },
    imageContain: { resizeMode: 'contain' },
    imageCover: { resizeMode: 'cover' },
    imageRepeat: { resizeMode: 'repeat' },
    imageStretch: { resizeMode: 'stretch' },
                                                          
    relative: { position: 'relative' },
    absolute: { position: 'absolute' },
                                                          
    absoluteBottom: { position: 'absolute', bottom: 0, left: 0, right: 0 },
    absoluteTop: { position: 'absolute', top: 0, left: 0, right: 0 },
    absoluteFill: StyleSheet.absoluteFillObject,
                                                          
    opacity0: { opacity: 0 },
    opacity1: { opacity: 0.1 },
    opacity2: { opacity: 0.2 },
    opacity3: { opacity: 0.3 },
    opacity4: { opacity: 0.4 },
    opacity5: { opacity: 0.5 },
    opacity6: { opacity: 0.6 },
    opacity7: { opacity: 0.7 },
    opacity8: { opacity: 0.8 },
    opacity9: { opacity: 0.9 },
    opacity10: { opacity: 1 },
                                                          
    zIndex0: { zIndex: 0 },
    zIndex1: { zIndex: 1 },
    zIndex2: { zIndex: 2 },
    zIndex3: { zIndex: 3 },
    zIndex4: { zIndex: 4 },
    zIndex5: { zIndex: 5 },
    zIndex6: { zIndex: 6 },
    zIndex7: { zIndex: 7 },
    zIndex8: { zIndex: 8 },
    zIndex9: { zIndex: 9 },
    zIndex10: { zIndex: 10 },
    zIndexTop: { zIndex: 9999999999 },
                                                          
     bordered: {
             borderWidth: 2,
             borderColor: '#000',
                 },
    square: { aspectRatio: 1 / 1 },
                                                          
    rounded0: { borderRadius: 0 },
    rounded1: { borderRadius: 8 },
    rounded2: { borderRadius: 16 },
    rounded3: { borderRadius: 24 },
                                                          
    rounded: { borderRadius: 99999 },
    //----------------------------------------#End Utilities------------------------------------------------
    
    });
}
