import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const testDate = 0;

const today = testDate || new Date().getDate();

const MatchesScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState(today);
  const [translations, setTranslations] = useState(null);

  const renderDates = () => {
    const arr = [];
    for (let i = today; i < today + 5; i++) {
      arr.push(i);
    }
    return arr.map(day => (
      <TouchableOpacity key={day} onPress={() => setCurrentDate(day)}>
        <Text style={styles.data}>{day}.06 </Text>
      </TouchableOpacity>
    ));
  };

  const renderMatches = () => {
    if (translations) {
      return translations
        .filter(m => m.matchDate === currentDate)
        .map(match => (
          <View style={styles.item} key={match.team_1 + match.team_2}>
            <View style={styles.ligaTitleBlock}>
              <Text style={styles.ligaTitle}>{match.ligaOf}</Text>
            </View>
            <View style={styles.cart}>
              <View style={styles.teams}>
                <Text style={styles.teamsname_1}>{match.team_1}</Text>
                <Text style={styles.teamsname_2}>{match.team_2}</Text>
              </View>
              <View style={styles.dateTime}>
                <Text style={styles.date}>{currentDate}.06 - </Text>
                <Text style={styles.time}>{match.matchTime}</Text>
              </View>
            </View>
          </View>
        ));
    }
  };

  useEffect(() => {
    fetch('https://betiltsportspub.site/request.php')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTranslations(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header navigation={navigation} />
      <Text style={styles.title}>Спортивные трансляции</Text>
      <View style={styles.itemsBlock}>{renderDates()}</View>

      <ScrollView>
        <View style={styles.list}>{renderMatches()}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: 'black',
    alignSelf: 'center',
    margin: 15,
  },
  itemsBlock: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  item: {
    width: '48%',
  },
  data: {
    marginHorizontal: 3,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#A5D0A5',
    color: 'black',
    fontSize: 15,
  },
  ligaTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#006600',
    textAlign: 'center',
  },
  ligaTitleBlock: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cart: {
    borderWidth: 0.5,
    alignSelf: 'center',
    width: '100%',
    minHeight: 110,
    borderRadius: 5,
  },
  teams: {
    flex: 1,
  },
  teamsname_1: {
    color: 'white',
    backgroundColor: '#A5D0A5',
    fontSize: 20,
    fontWeight: 400,
    flexGrow: 1,
  },
  teamsname_2: {
    color: 'white',
    backgroundColor: '#94B894',
    fontSize: 20,
    fontWeight: 400,
    flexGrow: 1,
  },
  date: {
    color: 'grey',
    fontSize: 25,
    fontWeight: 400,
  },
  time: {
    color: 'red',
    fontSize: 25,
    fontWeight: 400,
  },
  logo: {
    width: 423 / 4,
    height: 153 / 4,
    alignSelf: 'center',
    marginTop: 300,
  },
  dateTime: {
    flexDirection: 'row',
  },
});

export default observer(MatchesScreen);
