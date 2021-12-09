
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Sound from 'react-native-sound';

import logo from './images/setlistgenius.png';
import apad from './audio/APad1.wav';
import ashpad from './audio/AshPad1.wav';
import bpad from './audio/BPad1.wav';
import cpad from './audio/CPad1.wav';
import cshpad from './audio/CshPad1.wav';
import dpad from './audio/DPad1.wav';
import dshpad from './audio/DshPad1.wav';
import epad from './audio/EPad1.wav';
import fpad from './audio/FPad1.wav';
import fshpad from './audio/FshPad1.wav';
import gpad from './audio/GPad1.wav';
import gshpad from './audio/GshPad1.wav';
import nomehit from './audio/nome.wav';
import _BackgroundTimer from 'react-native-background-timer';



const App = () => {

  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState(null);
  const [text4, onChangeText4] = React.useState(null);
  const [text5, onChangeText5] = React.useState(null);
  const [text6, onChangeText6] = React.useState(null);
  const [text7, onChangeText7] = React.useState(null);
  const [text8, onChangeText8] = React.useState(null);
  const [text9, onChangeText9] = React.useState(null);
  const [text10, onChangeText10] = React.useState(null);
  const [text11, onChangeText11] = React.useState(null);
  const [text12, onChangeText12] = React.useState(null);
  const [text13, onChangeText13] = React.useState(null);
  const [text14, onChangeText14] = React.useState(null);
  const [text15, onChangeText15] = React.useState(null);
  const [text16, onChangeText16] = React.useState(null);
  const [text17, onChangeText17] = React.useState(null);
  const [text18, onChangeText18] = React.useState(null);
  const [tempo1, onChangeTempo1] = React.useState('4/4');
  const [tempo2, onChangeTempo2] = React.useState('4/4');
  const [tempo3, onChangeTempo3] = React.useState('4/4');
  const [tempo4, onChangeTempo4] = React.useState('4/4');
  const [tempo5, onChangeTempo5] = React.useState('4/4');
  const [tempo6, onChangeTempo6] = React.useState('4/4');
  const [tempostore1, showtempostore1] = React.useState(false);
  const [tempostore2, showtempostore2] = React.useState(false);
  const [tempostore3, showtempostore3] = React.useState(false);
  const [tempostore4, showtempostore4] = React.useState(false);
  const [tempostore5, showtempostore5] = React.useState(false);
  const [tempostore6, showtempostore6] = React.useState(false);
  const [play1, showplay1] = React.useState(true);
  const [play2, showplay2] = React.useState(true);
  const [play3, showplay3] = React.useState(true);
  const [play4, showplay4] = React.useState(true);
  const [play5, showplay5] = React.useState(true);
  const [play6, showplay6] = React.useState(true);

  const [Apad] = React.useState(new Sound(apad));
  const [Ashpad] = React.useState(new Sound(ashpad));
  const [Bpad] = React.useState(new Sound(bpad));
  const [Cpad] = React.useState(new Sound(cpad));
  const [Cshpad] = React.useState(new Sound(cshpad));
  const [Dpad] = React.useState(new Sound(dpad));
  const [Dshpad] = React.useState(new Sound(dshpad));
  const [Epad] = React.useState(new Sound(epad));
  const [Fpad] = React.useState(new Sound(fpad));
  const [Fshpad] = React.useState(new Sound(fshpad));
  const [Gpad] = React.useState(new Sound(gpad));
  const [Gshpad] = React.useState(new Sound(gshpad));
  const [currentPad, setCurrentPad] = React.useState(undefined);
  const [nome] = React.useState(new Sound(nomehit));
  

  
  const listpads = [Apad, Ashpad, Bpad, Cpad, Cshpad, Dpad, Dshpad, Epad, Fpad, Fshpad, Gpad, Gshpad];
  const tempostores = [tempostore1, tempostore2, tempostore3, tempostore4, tempostore5, tempostore6];
  const playstore = [play1, play2, play3, play4, play5, play6];
  let bpm = undefined;
  //UI

  keyvalidation = (e, key) => {
    let letters = /^[a-gA-G][#]?$/;
    const input = e;
    if (letters.test(input) && input != 'B#' && input != 'E#' || input === "") {

      switch (key) {
        case 3: onChangeText3(input);
          break;
        case 6: onChangeText6(input);
          break;
        case 9: onChangeText9(input);
          break;
        case 12: onChangeText12(input);
          break;
        case 15: onChangeText15(input);
          break;
        case 18: onChangeText18(input);
          break;
      }
    }
  }

  bpmvalidation = (e, song) => {
    const input = e;
    if (input < 301 || input === "") {

      switch (song) {
        case 2: onChangeText2(input);
          break;
        case 5: onChangeText5(input);
          break;
        case 8: onChangeText8(input);
          break;
        case 11: onChangeText11(input);
          break;
        case 14: onChangeText14(input);
          break;
        case 17: onChangeText17(input);
          break;
      }
    }
  }


  closestores = (val) => {

    for (let i = 0; i < tempostores.length; i++) {
      if (tempostores[i] === true) {
        switch (i + 1) {
          case 1: showtempostore1(false);
            break;
          case 2: showtempostore2(false);
            break;
          case 3: showtempostore3(false);
            break;
          case 4: showtempostore4(false);
            break;
          case 5: showtempostore5(false);
            break;
          case 6: showtempostore6(false);
            break;
        }
      }
    }

    switch (val) {
      case 1: showtempostore1(true);
        break;
      case 2: showtempostore2(true);
        break;
      case 3: showtempostore3(true);
        break;
      case 4: showtempostore4(true);
        break;
      case 5: showtempostore5(true);
        break;
      case 6: showtempostore6(true);
        break;
    }
  }

  changetempo = (song, val) => {

    switch (song) {
      case 1:
        showtempostore1(false);
        switch (val) {
          case 1: onChangeTempo1('4/4');
            break;
          case 2: onChangeTempo1('3/4');
            break;
          case 3: onChangeTempo1('6/8');
            break;
          case 4: onChangeTempo1('2/4');
            break;
          case 5: onChangeTempo1('5/4');
            break;
        }
        break;
      case 2:
        showtempostore2(false);
        switch (val) {
          case 1: onChangeTempo2('4/4');
            break;
          case 2: onChangeTempo2('3/4');
            break;
          case 3: onChangeTempo2('6/8');
            break;
          case 4: onChangeTempo2('2/4');
            break;
          case 5: onChangeTempo2('5/4');
            break;
        }
        break;
      case 3:
        showtempostore3(false);
        switch (val) {
          case 1: onChangeTempo3('4/4');
            break;
          case 2: onChangeTempo3('3/4');
            break;
          case 3: onChangeTempo3('6/8');
            break;
          case 4: onChangeTempo3('2/4');
            break;
          case 5: onChangeTempo3('5/4');
            break;
        }
        break;
      case 4:
        showtempostore4(false);
        switch (val) {
          case 1: onChangeTempo4('4/4');
            break;
          case 2: onChangeTempo4('3/4');
            break;
          case 3: onChangeTempo4('6/8');
            break;
          case 4: onChangeTempo4('2/4');
            break;
          case 5: onChangeTempo4('5/4');
            break;
        }
        break;
      case 5:
        showtempostore5(false);
        switch (val) {
          case 1: onChangeTempo5('4/4');
            break;
          case 2: onChangeTempo5('3/4');
            break;
          case 3: onChangeTempo5('6/8');
            break;
          case 4: onChangeTempo5('2/4');
            break;
          case 5: onChangeTempo5('5/4');
            break;
        }
        break;
      case 6:
        showtempostore6(false);
        switch (val) {
          case 1: onChangeTempo6('4/4');
            break;
          case 2: onChangeTempo6('3/4');
            break;
          case 3: onChangeTempo6('6/8');
            break;
          case 4: onChangeTempo6('2/4');
            break;
          case 5: onChangeTempo6('5/4');
            break;
        }
    }
  }

  closepauses = (val) => {

    for (let i = 0; i < playstore.length; i++) {
      if (playstore[i] === false) {
        switch (i + 1) {
          case 1: showplay1(true);
            break;
          case 2: showplay2(true);
            break;
          case 3: showplay3(true);
            break;
          case 4: showplay4(true);
            break;
          case 5: showplay5(true);
            break;
          case 6: showplay6(true);
            break;
        }
      }
    }
    

    switch (val) {
      case 1: if (text3 != null) { showplay1(false); bpm=text2; playPad(text3); }
        break;
      case 2: if (text6 != null) { showplay2(false); bpm=text5; playPad(text6); }
        break;
      case 3: if (text9 != null) { showplay3(false); bpm=text8; playPad(text9); }
        break;
      case 4: if (text12 != null) { showplay4(false); bpm=text11; playPad(text12); }
        break;
      case 5: if (text15 != null) { showplay5(false); bpm=text14; playPad(text15); }
        break;
      case 6: if (text18 != null) { showplay6(false); bpm=text17; playPad(text18); }
        break;
    }
  }
  //UX

  // Function for playing the pad sound

  playPad = (pad) => {

    switch (pad) {
      case 'A' || 'a': rollit(Apad);
        break;
      case 'A#' || 'a#': rollit(Ashpad);
        break;
      case 'B' || 'b': rollit(Bpad);
        break;
      case 'C' || 'c': rollit(Cpad);
        break;
      case 'C#' || 'c#': rollit(Cshpad);
        break;
      case 'D' || 'd': rollit(Dpad);
        break;
      case 'D#' || 'd#': rollit(Dshpad);
        break;
      case 'E' || 'e': rollit(Epad);
        break;
      case 'F' || 'f': rollit(Fpad);
        break;
      case 'F#' || 'f#': rollit(Fshpad);
        break;
      case 'G' || 'g': rollit(Gpad);
        break;
      case 'G#' || 'g#': rollit(Gshpad);
        break;
    }
  }

  // Func to fade out, or start at zero then fade in and loop

  rollit = (pad) => {
    if (currentPad != undefined) {
      for (let i = 0; i < listpads.length; i++) {
        listpads[i]._filename == currentPad._filename ? fadeout(listpads[i]) : null;
      }
      setTimeout(() => {
        thefadein(pad);
      }, 2500);

    } else {

      thefadein(pad);
     
    }
  }


  // Function for pausing the pad sound
  pausePad = () => {
    for (let i = 0; i < listpads.length; i++) {
      listpads[i]._filename == currentPad._filename ? fadeout(listpads[i]) : null;
    }
  }

  fadeout = (pad) => {
    pauseclick();
    let invl3 = setInterval(() => {
      pad.setVolume(pad.getVolume() - .04);
      console.log(pad.getVolume());
    }, 100);

    setTimeout(() => {
      clearInterval(invl3);
      pad.setVolume(0);
      console.log(0);
    }, 2500);
  }

  thefadein = (pad) => {
    setCurrentPad(pad);
   goclick();
    pad.setVolume(0);
    pad.setNumberOfLoops(-1);
    pad.setPan(1);
    pad.play(() => { });

    let invl4 = setInterval(() => {
      pad.setVolume(pad.getVolume() + .04);
      console.log(pad.getVolume());
    }, 100);

    setTimeout(() => {
      clearInterval(invl4);
      pad.setVolume(1);
      console.log(1);
    }, 2500);
  }
  // Function for pausing and playing click sound STILL NEEDED

goclick = () => {
  nome.setPan(-1);
  _BackgroundTimer.runBackgroundTimer(()=>{
    nome.stop();
    nome.play(()=>{});
  },(60/bpm)*1000)
}


pauseclick = () => {
  _BackgroundTimer.stopBackgroundTimer();
}





  return (

    <SafeAreaView style={{ backgroundColor: '#1e2427', height: Dimensions.get('window').height }}>
      <View style={styles.container}>
        <Image source={logo} style={styles.header} />
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText1}
            value={text1}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 2)}
              value={text2}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 3)}
              value={text3}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(1)}><Text style={{ fontSize: 20 }}>{tempo1}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(1)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play1 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay1(!play1); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play1 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore1 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(1, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(1, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(1, 3)}><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(1, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(1, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText4}
            value={text4}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 5)}
              value={text5}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 6)}
              value={text6}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(2)}><Text style={{ fontSize: 20 }}>{tempo2}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(2)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play2 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay2(!play2); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play2 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore2 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(2, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(2, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(2, 3)} ><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(2, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(2, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText7}
            value={text7}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 8)}
              value={text8}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 9)}
              value={text9}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(3)}><Text style={{ fontSize: 20 }}>{tempo3}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(3)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play3 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay3(!play3); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play3 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore3 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(3, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(3, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(3, 3)} ><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(3, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(3, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText10}
            value={text10}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 11)}
              value={text11}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 12)}
              value={text12}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(4)}><Text style={{ fontSize: 20 }}>{tempo4}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(4)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play4 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay4(!play4); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play4 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore4 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(4, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(4, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(4, 3)} ><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(4, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(4, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText13}
            value={text13}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 14)}
              value={text14}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 15)}
              value={text15}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(5)}><Text style={{ fontSize: 20 }}>{tempo5}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(5)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play5 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay5(!play5); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play5 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore5 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(5, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(5, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(5, 3)} ><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(5, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(5, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.song}>
        <View style={{ width: '50%' }}>
          <TextInput
            style={styles.input}
            onSubmitEditing={onChangeText16}
            value={text16}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="Song Title"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              style={styles.bpms}
              onChangeText={(e) => bpmvalidation(e, 17)}
              value={text17}
              keyboardType='numeric'
              keyboardAppearance='default'
              maxLength={25}
              placeholder="BPM"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TextInput
              style={styles.keys}
              onChangeText={(e) => keyvalidation(e, 18)}
              value={text18}
              keyboardType='default'
              keyboardAppearance='default'
              maxLength={2}
              placeholder="Key"
              placeholderTextColor="black"
              returnKeyType='done'
            />
            <TouchableOpacity style={styles.tempos} onPress={() => closestores(6)}><Text style={{ fontSize: 20 }}>{tempo6}</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
          <TouchableOpacity onPress={()=> pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#1e2427' }}>Click</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => closepauses(6)}><Text style={{ color: 'black', fontSize: 40, marginBottom: 5, marginRight: 40, display: play6 ? 'flex' : 'none' }}>▶</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { showplay6(!play6); pausePad() }} style={{ position: 'absolute', top: 15, right: 15 }}><Text style={{ color: 'black', fontSize: 40, marginRight: 40, marginBottom: 5, display: play6 ? 'none' : 'flex' }}>II</Text></TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: '#1e2427', bottom: 0, borderColor: 'grey', borderWidth: 2, display: tempostore6 ? 'flex' : 'none' }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(6, 1)}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(6, 2)}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(6, 3)}><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(6, 4)}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={() => changetempo(6, 5)}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2427',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '15%'
  },
  header: {
    height: 100,
    width: 340,
    marginTop: 7,
    marginBottom: 7,
    resizeMode: 'contain'
  },
  song: {
    height: '13%',
    width: Dimensions.get('window').width,
    margin: '1%',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%',
  },
  input: {
    height: 40,
    margin: '1%',
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderColor: 'transparent',
    fontSize: 20,
  },
  bpms: {
    height: 40,
    margin: '2%',
    width: '40%',
    borderWidth: 1,
    padding: 10,
    marginTop: 1,
    borderColor: 'transparent',
    fontSize: 20,
  },
  keys: {
    height: 40,
    margin: '1%',
    width: '20%',
    borderWidth: 1,
    marginTop: 1,
    borderColor: 'transparent',
    fontSize: 20,
  },
  tempos: {
    height: 40,
    margin: '7%',
    width: '20%',
    marginTop: '5%',
    fontSize: 40,
  }
});

export default App;
