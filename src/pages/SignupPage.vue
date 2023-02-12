<template>
  <q-page class="flex flex-center bg-grey-10">
    <q-card style="width: 80%">
      <form @submit="signupUser">
        <q-card-section>
          <div class="text-h6">Signup</div>
        </q-card-section>
        <q-card-section class="q-gutter-y-md">
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
      </form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const signupForm = ref({
  email: "",
  password: "",
});

const signupUser = () => {
  console.log("SIGNING UP USER");
  console.log(signupForm.value);
};
</script>
