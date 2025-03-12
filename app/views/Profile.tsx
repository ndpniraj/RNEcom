import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../context/AuthProvider';
import Icon from '@react-native-vector-icons/ant-design';

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

        <Pressable
          onPress={() => console.log('Opening image picker')}
          style={styles.profileImageSection}>
          {profile?.image ? (
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri: profile?.image,
                }}
                style={styles.profileImage}
              />
            </View>
          ) : (
            <View style={[styles.profileImageContainer, styles.iconContainer]}>
              <Icon name="user-add" size={40} color="white" />
            </View>
          )}
        </Pressable>
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
    resizeMode: 'cover',
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
    zIndex: 10,
  },
  profileImageContainer: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
