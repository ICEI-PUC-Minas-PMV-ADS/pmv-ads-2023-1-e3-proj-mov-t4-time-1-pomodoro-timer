import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TimerCountDown } from "./TimerCountDown";

const focusTimeMinutes = 25 * 60 * 1000; // 25 minutes in milliseconds
const breakTimeMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

const Pomodoro = ({ navigation }) => {
  const [timerCount, setTimerCount] = useState(focusTimeMinutes);
  const [timerInterval, setTimerInterval] = useState(null);
  const [timerBreakInterval, setTimerBreakInterval] = useState(null);
  const [timerBreak, setTimerBreak] = useState(breakTimeMinutes);

  const startTimer = () => {
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
    setTimerInterval(id);
  }

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
  }

  const startBreakTimer = () => {
    const id = setInterval(() => setTimerBreak(prev => prev - 1000), 1000);
    setTimerBreakInterval(id);
  }

  const stopBreakTimer = () => {
    if (timerBreakInterval !== null) {
      clearInterval(timerBreakInterval);
    }
  }

  useEffect(() => {
    if (timerCount === 0) {
      clearInterval(timerInterval);
      setTimerCount(focusTimeMinutes);
    }
  }, [timerCount]);

  useEffect(() => {
    if (timerBreak === 0) {
      clearInterval(timerBreakInterval);
      setTimerBreak(breakTimeMinutes);
    }
  }, [timerBreak]);

  const timerDate = new Date(timerCount);
  const timerDateBreak = new Date(timerBreak);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btnStart} onPress={startTimer}>
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timerContainer}>
        <TimerCountDown timerDate={timerDate} />
      </View>
      <View>
        <TouchableOpacity style={styles.btnStop} onPress={stopTimer}>
          <Text style={styles.btnText}>Parar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btnStart} onPress={startBreakTimer}>
          <Text style={styles.btnText}>Iniciar Pausa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timerContainer}>
        <TimerCountDown timerDate={timerDateBreak} />
      </View>
      <View>
        <TouchableOpacity style={styles.btnStop} onPress={stopBreakTimer}>
          <Text style={styles.btnText}>Encerrar Pausa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  btnStart: {
    width: '100%',
    height: 40,
    backgroundColor: '#1e293b',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  btnStop: {
    width: '100%',
    height: 40,
    backgroundColor: '#dc2626',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  timerContainer: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
});

export default Pomodoro;
