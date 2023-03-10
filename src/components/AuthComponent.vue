<template>
  <div>
    <div class="full-width col">
      <div class="full-width q-pa-lg">
        <div class="full-width">
          <div v-html="title" class="text-h5 q-mb-lg"></div>
        </div>
        <div class="full-width">
          <q-form @submit="submitForm">
            <q-input
              outlined
              class="q-mb-md"
              type="email"
              label="Email"
              v-model="formData.email"
            />
            <q-input
              outlined
              class="q-mb-md"
              type="password"
              label="Password"
              v-model="formData.password"
            />
            <div class="row">
              <q-btn type="submit" color="primary" :label="title" unelevated />
              <q-space></q-space>
              <q-btn
                flat
                label="Forgot Password?"
                color="grey-7"
                class="q-px-none"
                no-caps
                v-if="tab !== 'register'"
                @click="forgotPassword"
              />
            </div>
          </q-form>
        </div>
      </div>
      <div class="bg-grey-2 full-width" style="min-height: 110px">
        <div class="text-center text-subtitle1 text-grey-5 q-my-sm">OR</div>
        <div class="flex flex-center">
          <q-btn
            color="primary"
            @click="google"
            unelevated
            class="q-pa-none"
            style="border: 1px solid #1976d1"
            square
          >
            <q-avatar color="white" square size="34px">
              <q-img src="/google-logo.png" width="30px"></q-img>
            </q-avatar>
            <div class="q-mx-md">{{ title }} with Google</div>
          </q-btn>
        </div>
      </div>
    </div>

    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import ForgotPassword from './ForgotPassword.vue';
import { defineComponent, reactive, ref, computed } from 'vue';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export default defineComponent({
  name: 'AuthComponent',
  props: {
    tab: {
      type: String,
      default: 'login',
    },
  },
  components: { ForgotPassword },
  setup(props) {
    const router = useRouter();

    const formData = reactive({
      email: '',
      password: '',
    });
    const resetPwdDialog = ref(false);

    // Computed
    const title = computed(() => {
      return props.tab === 'login' ? 'Sign in' : 'Sign up';
    });

    // Methods
    const submitForm = () => {
      if (props.tab === 'login') {
        signInExistingUser(formData.email, formData.password);
      } else {
        createUser(formData.email, formData.password);
      }
    };
    const google = () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          router.push('/');
        })
        .catch((error) => console.log('error', error));
    };
    const signInExistingUser = (email, password) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const createUser = (email, password) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const forgotPassword = () => {
      resetPwdDialog.value = true;
    };

    return {
      formData,
      resetPwdDialog,
      submitForm,
      google,
      signInExistingUser,
      createUser,
      forgotPassword,
      title,
    };
  },
});
</script>
