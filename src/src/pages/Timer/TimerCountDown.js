import React from "react";
import {Text, View, StyleSheet} from "react-native";

type Props  =  {
  timerDate: Date,
}

export const TimerCountDown = ({timerDate}) => {
  return <View> 
          <Text style={styles.timerCountDownText} > {timerDate.getMinutes().toString().padStart(2,"0")}:
                 {timerDate.getSeconds().toString().padStart(2,"0")} 
          </Text>
        </View>
  
}

const styles = StyleSheet.create({
  timerCountDownText: {
    fontSize: 30,
    fontWeight: '700'
  } 
})