<template>
  <q-page class="flex flex-center bg-grey-10">
    <q-card style="width: 80%; max-width: 500px">
      <form @submit="signupUser">
        <q-card-section>
          <div class="text-h6">Signup</div>
        </q-card-section>
        <q-card-section class="q-gutter-y-md text-center">
          <q-input v-model="signupForm.email" outlined label="email" />
          <q-input
            v-model="signupForm.password"
            outlined
            label="password"
            type="password"
          />
          <q-btn color="primary" class="full-width" type="submit">
            Sign Up
          </q-btn>
        </q-card-section>
        <q-card-section class="text-right">
          <span> Already have an account? <a href="#/login">Log In</a> </span>
        </q-card-section>
      </form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const $q = useQuasar();

const signupForm = ref({
  email: "",
  password: "",
});

const signupUser = () => {
  const { email, password } = signupForm.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      $q.notify({
        message: errorMessage,
        color: "negative",
        caption: errorCode,
      });
    });
};
</script>
