import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },

    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const uid = await dispatch("getUid");

        const db = getDatabase();
        await set(ref(db, `users/${uid}/info`), {
          bill: 1000,
          name,
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },

    getUid() {
      const user = auth.currentUser;
      return user ? user.uid : null;
    },

    async logout() {
      await auth.signOut();
    },
  },
};
