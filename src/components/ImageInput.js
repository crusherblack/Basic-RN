import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageInput = ({imageUri, onChangeImage}) => {
  const chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
    };
    ImagePicker.showImagePicker(options, (response) => {
      /* console.log('Response = ', response); */

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;

        onChangeImage(source.uri);
      }
    });
  };

  const handlePress = () => {
    if (!imageUri) chooseFile();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {
          text: 'No',
        },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.container}>
        {!imageUri && <Icon name="camera" size={40} color={Colors.medium} />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 100,
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
