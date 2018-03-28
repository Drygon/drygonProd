
import firebase from 'firebase';

var configProd = {
  apiKey: "AIzaSyCT-hG5_-Dm4mFpY7eFfQF8XAPOIlENpXI",
  authDomain: "drygonprod.firebaseapp.com",
  databaseURL: "https://drygonprod.firebaseio.com",
  storageBucket: "drygonprod.appspot.com",
  messagingSenderId: "829435435228"
};

firebase.initializeApp(configProd)

export const database = firebase.database()
export const storage = firebase.storage()



export const cloudinaryConfig = {
  cloud_name: "drygonweb",
  api_key: "475975958647686",
  api_secret: "qSS_IgHvYLn-HDuMZCCjG-tHpWU",
  enhance_image_tag: true,
  static_image_support: true,
}

