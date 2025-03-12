import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../context/AuthProvider';

interface Props {}

const Profile: FC<Props> = () => {
  const {logout, profile} = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../source/pattern.jpg')}
          style={styles.bannerImage}
        />

        <View style={styles.profileImageSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>

      <Text style={styles.profileName}>{profile?.name}</Text>
      <Pressable style={styles.logoutBtn} onPress={logout}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'center',
  },
  profileImageSection: {
    borderWidth: 6,
    borderColor: 'lightgray',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    left: '50%',
    transform: [{translateX: '-50%'}, {translateY: '50%'}],
    bottom: 0,
    padding: 4,
  },
  profileImageContainer: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  profileImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  profileName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  logoutBtn: {
    alignSelf: 'center',
    paddingTop: 5,
  },
  logoutBtnText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Profile;
