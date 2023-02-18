<template>
  <q-page class="flex flex-center bg-grey-10">
    <q-card style="width: 80%; max-width: 500px">
      <form @submit="signInUser">
        <q-card-section>
          <div class="text-h6">Log In</div>
        </q-card-section>
        <q-card-section class="q-gutter-y-md">
          <q-input v-model="loginForm.email" outlined label="email" />
          <q-input
            v-model="loginForm.password"
            outlined
            label="password"
            type="password"
          />
          <q-btn color="primary" class="full-width" type="submit">
            Log In
          </q-btn>
        </q-card-section>
      </form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "stores/user";
import { useQuasar } from "quasar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const router = useRouter();
const $q = useQuasar();
const userStore = useUserStore();

const loginForm = ref({
  email: "",
  password: "",
});

const signInUser = () => {
  const { email, password } = loginForm.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      userStore.updateUser(user);
      router.push({ name: "Dashboard" });
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
