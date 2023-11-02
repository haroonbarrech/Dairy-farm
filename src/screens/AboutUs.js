import React from "react";
import { Text,View } from "react-native";
import { GlobalStyles} from "../libs/layout/constants/Styles";
import { ScrollView } from "react-native-gesture-handler";



const AboutUs =props=>{
    const GlobalStyle=GlobalStyles();
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={[
            GlobalStyle.height100
            ,{padding:20,alignItems:'center'}]}>
            <Text style={[
                GlobalStyle.font30,


            ,{}]}>
             About US
            </Text>
            <Text style={[
                GlobalStyle.font16,
            ,{}]}>
              Dairy farming is a class of agriculture for long-term production of milk,
               which is processed (either on the farm or at a dairy plant, either of which 
               may be called a dairy) for eventual sale of a dairy product. Dairy farming has 
               a history that goes back to the early Neolithic era, around the seventh millennium BC,
                in many regions of Europe and Africa. Before the 20th century, milking was done by hand
                 on small farms. Beginning in the early 20th century, milking was done in large scale dairy
                  farms with innovations including rotary parlors, the milking pipeline, and automatic milking
                   systems that were commercially developed in the early 1990s.
                   It takes the average cow three to five minutes to give her milk.
                    Some cows are faster or slower. Slow-milking cows may take up to fiftee
                    n minutes to let down all their milk. Though milking speed is not related to the quality of
                     milk produced by the cow, it does impact the management of the milking process.
                      Because most milkers milk cattle in groups, the milker can only process a group 
                      of cows at the speed of the slowest-milking cow. For this reason, many farmers will 
                      group slow-milking cows so as not to stress the faster milking cows.
            </Text>

        </View>
        </ScrollView>
    )
}
export default AboutUs;