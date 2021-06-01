import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().email().required().label("Email"),
  phone: Yup.number().label("Phone"),
  college: Yup.string().label("College/Institution"),
  message: Yup.string().label("Message")
});


function ApplyScreen() {

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          name: "",
          email: "",
          phone: "",
          college: "",
          message: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="name" placeholder="Name" />
        <FormField maxLength={255} 
        name="email" 
        placeholder="Email"
        keyboardType="email-address" />
        <FormField
          keyboardType="phone-pad"
          maxLength={8}
          name="phone"
          placeholder="Phone"
        />
        <FormField maxLength={255} name="college" placeholder="College/Institution" />
        <FormField
          maxLength={1023}
          multiline
          name="message"
          placeholder="Message"
          multiLine={true}
          numberOfLines={6}
          style={{textAlignVertical:"top", height: 100}}
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ApplyScreen;